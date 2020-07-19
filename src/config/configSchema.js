const configSchema = {
    "type": "object",
    "properties": {
        "server": {
            "type": "object",
            "properties": {
                "port": {
                    "type": "integer"
                },
                "logLevel": {
                    "type": "string"
                }
            },
            "required": [
                "port",
                "logLevel"
            ]
        },
        "emailProviders": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "object",
                    "properties": {
                        "server": {
                            "type": "string"
                        },
                        "port": {
                            "type": "integer"
                        },
                        "senderName": {
                            "type": "string"
                        },
                        "senderEmail": {
                            "type": "string"
                        },
                        "username": {
                            "type": "string"
                        },
                        "apiKey": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "server",
                        "port",
                        "senderName",
                        "senderEmail",
                        "username",
                        "apiKey"
                    ]
                },
            },
            "required": [
                "email"
            ]
        },
        "razorpay":{
            "type":"object",
            "properties":{
                "key_id": {
                    "type": "string"
                },
                "key_secret":{
                    "type": "string",
                }
            },
            "required": [
                "key_id",
                "key_secret"
            ]

        },
        "maxPaginationSize": {
            "type": "string"
        },
        "environment": {
            "type": "string"
        },
        "mongodb": {
            "type": "object",
            "properties": {
                "baseURL": {
                    "type": "string"
                },
                "dbName": {
                    "type": "string"
                },
                "debug": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "poolSize": {
                    "type": "integer"
                }
            },
            "required": [
                "baseURL",
                "dbName",
                "debug",
                "username",
                "password",
                "poolSize"
            ]
        }
    },
    "required": [
        "server",
        "email",
        "razorpay",
        "maxPaginationSize",
        "environment",
        "mongodb"
    ]
}

module.exports = configSchema;