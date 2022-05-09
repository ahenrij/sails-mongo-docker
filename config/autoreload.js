/**
 * Autoreload configurations.
 * 
 * https://github.com/sgress454/sails-hook-autoreload
 */

module.exports.autoreload = {
    active: true,

    overrideMigrateSetting: false,

    ignored: [
        '**/.tmp/**',
        '**/views/**',
        '**/assets/**'
    ]
}