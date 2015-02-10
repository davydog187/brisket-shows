'use strict';

var express = require('express');
var Brisket = require('brisket');

var PORT = process.env.PORT || 8080;

var SHOW_DATA = {
    'game-of-thrones': {
        name: 'Game of Thrones!',
        url: "http://i0.wp.com/cdn.bgr.com/2014/03/game-of-thrones.jpg?w=625"
    },
    'walking-dead': {
        name: 'The Walking Dead',
        url: "http://upload.wikimedia.org/wikipedia/en/1/17/The_Walking_Dead_title_card.jpg"
    },
    'shameless': {
        name: "Shameless!"
    }

};

var app = express()

    .use(express.static(__dirname + '/public'))

    .use('/api', express.Router()

        .get('/shows/:type', function(request, response) {
            var show = SHOW_DATA[request.params.type];

            if (!show) {
                response.status(404).json({ missing: 'show' });
            }

            response.json(show);
        })

    )

    .use(Brisket.createServer({
        apiHost: 'http://localhost:' + PORT,

        clientAppRequirePath: 'app/ClientApp',

        ServerApp: require('./app/javascripts/server/ServerApp'),

        // add properties here that you want to expose to ServerApp
        //  and ClientApp
        environmentConfig: {
            favoriteFood: 'Brisket'
        },

        // add properties that you only want to expose to the ServerApp
        serverConfig: {
            favoriteServerSide: 'a plate'
        },

        onRouteHandled: function(options) {
            console.log("Original request was for: " + options.request.path);
            console.log("Responded to matched route: " + options.route);
        }

    }))

    .use(function(request, response) {
        response.status(500).sendfile(__dirname + '/public/unrecoverable-error.html');
    })
;


app.listen(PORT);
console.log("Brisket app is listening on port: %s", PORT);
