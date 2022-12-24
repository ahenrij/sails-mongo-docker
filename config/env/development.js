require('dotenv').config();

module.exports = {
  datastores: {
    default: {
      adapter: `sails-mongo`,
      url: process.env.DATABASE_URL
    }
  },
  security: {
    cors: {
      allRoutes: true,
      allowOrigins: ['http://localhost:8080'],
      allowCredentials: true,
      allowRequestHeaders: 'content-type, authorization'
    }
  },
  blueprints: {
    rest: true,
    shortcuts: false,
  },
};