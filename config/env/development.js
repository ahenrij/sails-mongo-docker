require('dotenv').config()

module.exports = {
    datastores: {
        default: {
            adapter: 'sails-mongo',
            url: "mongodb://" + 
            process.env.MONGO_INITDB_ROOT_USERNAME + ":" + 
            process.env.MONGO_INITDB_ROOT_PASSWORD + "@" + 
            process.env.MONGO_SERVER_LOCAL +":27017/" + 
            process.env.MONGO_INITDB_DATABASE,
        }
    },
    security: {
        cors: {
            allRoutes: true,
            allowOrigins: ['http://localhost:8080'],
            allowCredentials: true,
            allowRequestHeaders: 'content-type, authorization'
        }
    }
}