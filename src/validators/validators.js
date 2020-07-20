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
exports.validateMakePaymentRequest = async function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }else if(!req.body.productId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }else if(!req.body.variantId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }else if(!req.body.productName){
        res.code(400)
        done(new HttpError('faliure', 20001, 'productName is missing'))
    }else if(!req.body.price){
        res.code(400)
        done(new HttpError('faliure', 20001, 'price is missing'))
    }
    else {
        done()
    }
}