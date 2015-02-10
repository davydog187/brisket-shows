'use strict';

var Brisket = require('brisket');
var Routers = require('../routing/Routers');

var ServerApp = Brisket.ServerApp.extend({

    routers: Routers,

    start: function(options) {
        var environmentConfig = options.environmentConfig;
        var serverConfig = options.serverConfig;

        // do server-only app set up here
        console.log('My food is ' + environmentConfig.favoriteFood);
        console.log('My favorite server side ' + serverConfig.favoriteServerSide);
        console.log('ServerApp has started');
    }

});

module.exports = ServerApp;
