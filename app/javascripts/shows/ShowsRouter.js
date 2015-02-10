'use strict';

var RouterBrewery = require('../routing/RouterBrewery');
var ParksAndRecView = require('./ParksAndRecView');
var Show = require('./Show');
var DramaView = require('./DramaView');

var ShowsRouter = RouterBrewery.create({

    routes: {
        'shows/dramas/:show': 'dramas',
        'shows/comedies/parks-and-rec': 'parksAndRec'
    },

    parksAndRec: function() {
        return new ParksAndRecView();
    },

    dramas: function(name) {
        console.log("show name: ", name);
        var show = new Show({
            type: name
        });

        return show.fetch()
            .then(function() {
                return new DramaView({ model: show });
            });
    }

});

module.exports = ShowsRouter;
