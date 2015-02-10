"use strict";

var BaseModel = require("../base/BaseModel");

var Shows = BaseModel.extend({

    idAttribute: 'type',

    urlRoot: '/api/shows'

});

module.exports = Shows;
