"use strict";

var templates = require("../../build/templates");

var UsesHogan = {

    templateAdapter: require("hogan-brisket")(templates)

};

module.exports = UsesHogan;
