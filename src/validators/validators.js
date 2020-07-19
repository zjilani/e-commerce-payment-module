const HttpError = require('../models/errors/httpError')
const axios = require('axios')


exports.validateRazorpayRequest = async function (req, res, done) {
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }
    else {
        done()
    }
}
exports.validateInitiatePaymentRequest = async function (req, res, done) {
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }
    else {
        done()
    }
}