const shortid = require('shortid')
const Razorpay = require('razorpay')

const config = require('../config/index')
const keys  = config.razorpay

const payment = new Razorpay({
    key_id: keys.key_id,
    key_secret: keys.key_secret
})

const razorpay  = async (fastify,payRequest) =>{
    try {
        const cart = await fastify.axios.get("http://localhost:3003/getCartInfo?customerId="+payRequest.customerId)
        
        let amount = 0
        cart.data.data.forEach((p) => {
            amount = amount+(p.price*p.quantity)
        });
        const payment_capture = 1
        const currency = 'INR'

        const options = {
            amount,
            currency,
            receipt: shortid.generate(),
            payment_capture
        }
        
        const response = await payment.orders.create(options)
        console.log(response)
        
        return response
        
    } catch (error) {
        return {response:"Not Found"}
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

module.exports ={
    razorpay,
    initiatePayment 
}