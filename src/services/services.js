const shortid = require('shortid')
const Razorpay = require('razorpay')

const config = require('../config/index')
const keys  = config.razorpay

const payment = new Razorpay({
    key_id: keys.key_id,
    key_secret: keys.key_secret
})

const razorpay  = async (fastify,payRequest) =>{
    const cart = await fastify.axios.get("http://localhost:3003/getCartInfo?customerId="+payRequest.customerId)
    const variantId =[]
    const productName = []
    const quantity=[]
    cart.data.data.forEach((c)=>{
        productName.push(c.productName)
        variantId.push(c.variantId)
        quantity.push(c.quantityToBuy)
    })

    let amount = 0

    cart.data.data.forEach((p) => {
        amount = amount+(p.price*p.quantityToBuy)
    });
    
    const payment_capture = 1
    const currency = 'INR'

    const options = {
        amount,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }
        
    try {
        
        const response = await payment.orders.create(options)
        
        if(response.status === 'created'){
            const pay = await fastify.axios.post("http://localhost:3001/reducingInventory",{variantId:variantId , quantity:quantity,message:"Success"})
            
            const updateQuantity = await fastify.axios.post("http://localhost:3003/updateQuantity",{variantId:variantId})
            const notify = await fastify.axios.post("http://localhost:5000/notifyCustomer",{customerId: payRequest.customerId, subject: "Your Order" , template: "bill", productName: productName, quantity: quantity  ,amount:amount})

            return {response: "Payment Done" }
        }
        else {
            const pay = await fastify.axios.post("http://localhost:3001/reducingInventory",{variantId:variantId , quantity:quantity,message:"Cancelled"})
        
            return {response:"Payment Failed"}
        }

        
    } catch (error) {
        const pay = await fastify.axios.post("http://localhost:3001/reducingInventory",{variantId:variantId , quantity:quantity,message:"Cancelled"})
        return {response:"ERROR"}
    }
    
}
const initiatePayment = async (fastify,initiatePaymentRequest) =>{
    try {
        const cart = await fastify.axios.get("http://localhost:3003/getCartInfo?customerId="+initiatePaymentRequest.customerId)
        const variantId =[]
        const quantity=[]
        cart.data.data.forEach((c)=>{
            variantId.push(c.variantId)
            quantity.push(c.quantityToBuy)
        })
        
        const updateReservedInventory = await fastify.axios.post("http://localhost:3001/reducingResInventory",{variantId:variantId , quantity:quantity})
        return {response : "Done"}
        
    } catch (error) {
        return {response:"Not Found"}
    }
    
}

const makePayment = async (fastify,makePaymentRequest) =>{
    try {

        const payment_capture = 1
        const currency = 'INR'
        const amount = makePaymentRequest.price 

        const options = {
            amount,
            currency,
            receipt: shortid.generate(),
            payment_capture
        }
        const updateReservedInventory = await fastify.axios.post("http://localhost:3001/reducingInventory",{variantId:[makePaymentRequest.variantId] , quantity:[1] , message: "Success"})
        
        const response = await payment.orders.create(options)
        
        const notify = await fastify.axios.post("http://localhost:5000/notifyCustomer",{customerId:makePaymentRequest.customerId, subject: "Your Order" , template: "bill", productName: [makePaymentRequest.productName], quantity: [1] ,amount:amount})
        return {response : "Done"}
        
    } catch (error) {
        console.log(error)
        return {response:"Not Found"}
    }
    
}

module.exports ={
    razorpay,
    initiatePayment,
    makePayment
}