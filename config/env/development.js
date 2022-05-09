module.exports = {
    datastores: {
        default: {
            adapter: 'sails-mongo',
            url: 'mongodb://root:h3W+ee3p+st2VJlnRiIMTw==@127.0.0.1:27017/db',
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