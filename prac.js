// const app = require('express')()
// const path = require('path')
// const shortid = require('shortid')
// const Razorpay = require('razorpay')

// const razorpay = new Razorpay({
// 	key_id: 'rzp_test_eOlDma4ggO8msK',
// 	key_secret: 'GAN3SeWktZL3UCxC841Bn6Rc'
// })

// app.get('/razorpay', async (req, res) => {
// 	const payment_capture = 1
// 	const amount = 499
// 	const currency = 'INR'

// 	const options = {
// 		amount: amount * 100,
// 		currency,
// 		receipt: shortid.generate(),
// 		payment_capture
// 	}

// 	try {
// 		const response = await razorpay.orders.create(options)
// 		console.log(response)
// 		res.json({
// 			id: response.id,
// 			currency: response.currency,
// 			amount: response.amount
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

// app.listen(1337, () => {
// 	console.log('Listening on 1337')
// })