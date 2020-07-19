                exports.razorpay = {
                    description:  'Customer Payment ',
                    tags: ["Payment"],
                    summary: 'Customer Payment',
                    query: {
                        "type": "object",
                        "properties": {
                            "customerId": {
                                "type": "string"
                            }
                            // "email":{
                            //     "type":"string",
                            // },
                            // "password":{
                            //     "type":"string",
                            // }
                        },
                        "required": [
                            "customerId"
                        ]
                    },
                    response: {
                        201: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['failure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                // "data": {
                                //     "type": "object",
                                //     "properties": {
                                //         "customerId":{
                                //             "type": "string",
                                //         },
                                //         "userName": {
                                //             "type": "string"
                                //         },
                                //         "mobileNo": {
                                //             "type": "number"
                                //         },
                                //         "email":{
                                //             "type":"string",
                                //         },
                                //         "password": {
                                //             "type": "string"
                                //         },
                                //         "markForDelete":{
                                //             "type":"boolean",
                                //         },
                                //         "otpVerified": {
                                //             "type": "boolean",
                                //             "default":"false",
                                //         },
                                //         "otp": {
                                //             "type":"string"
                                //         }
                                //     },
                                //     "required": [
                                //         "customerId",
                                //         "userName",
                                //         "mobileNo",
                                //         "email",
                                //         "password",
                                //         "markForDelete",
                                //         "otpVerified",
                                //         "otp"
                                //     ]
                                // },
                            },
                                    "required": [
                                            "status",
                                            // "data"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                }
                exports.initiatePayment = {
                    description:  'Initialising the Payment of a customer',
                    tags: ["Payment"],
                    summary: 'Payment Initialisation',
                    query: {
                        "type": "object",
                        "properties": {
                            "customerId": {
                                "type": "string"
                            }
                            
                        },
                        "required": [
                            "customerId"
                        ]
                    },
                    response: {
                        201: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['failure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                
                            },
                                    "required": [
                                            "status",
                                            "message"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                }