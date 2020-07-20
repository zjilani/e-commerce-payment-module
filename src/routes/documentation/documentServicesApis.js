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
                                            // "messaage"
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