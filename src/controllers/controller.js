const services = require('../services/services')
const HttpError = require('../models/errors/httpError')

exports.razorpay = async (req, res) => {
    try {
        
        let response = await services.razorpay(req.fastify, req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check CustomerId")
        }

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Payment Failed", e.message)
    }
}
exports.initiatePayment = async (req, res) => {
    try {
        
        let response = await services.initiatePayment(req.fastify, req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check CustomerId")
        }

        return res.status(201).send({
            status: 'success',
            message: "Reserved Inventory Updated ..."
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Initiate Payment Failed", e.message)
    }
}