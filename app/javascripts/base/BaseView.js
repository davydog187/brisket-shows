'use strict';

var Brisket = require('brisket');
var UsesHogan = require("../concerns/UsesHogan");
var _ = require("lodash");

var BaseView = Brisket.View.extend(_.extend({}, UsesHogan, {

    // add properties here that you want to expose to all of your Views

}));

module.exports = BaseView;
