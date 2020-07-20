const controllers = require('../controllers/controller')
const validators = require('../validators/validators')
const fastify = require('fastify')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "GET",
        url: "/razorpay",
        handler: controllers.razorpay,
        schema: documentation.razorpay,
        preValidation: validators.validateRazorpayRequest
    },
    {
        method: "POST",
        url: "/initiatePayment",
        handler: controllers.initiatePayment,
        schema: documentation.initiatePayment,
        preValidation: validators.validateInitiatePaymentRequest
    },
    {
        method: "POST",
        url: "/makePayment",
        handler: controllers.makePayment,
        schema: documentation.makePayment,
        preValidation: validators.validateMakePaymentRequest
    }
    
]


module.exports = routes