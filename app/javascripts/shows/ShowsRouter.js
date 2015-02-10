'use strict';

var RouterBrewery = require('../routing/RouterBrewery');
var ParksAndRecView = require('./ParksAndRecView');
var Show = require('./Show');
var ShowView = require('./ShowView');

var ShowsRouter = RouterBrewery.create({

    routes: {
        'shows/parks-and-rec': 'parksAndRec',
        'shows/:show': 'showHandler'
    },

    parksAndRec: function() {
        return new ParksAndRecView();
    },

    showHandler: function(name) {
        console.log("show name: ", name);
        var show = new Show({
            type: name
        });

        return show.fetch()
            .then(function() {
                return new ShowView({ model: show });
            });
    }

});

module.exports = ShowsRouter;
