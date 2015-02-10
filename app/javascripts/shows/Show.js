"use strict";

var BaseModel = require("../base/BaseModel");

var Shows = BaseModel.extend({

    idAttribute: 'type',

    urlRoot: '/api/shows',

    hasUrl: function() {
        return !!this.get("url");
    }

});

module.exports = Shows;
