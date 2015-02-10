"use strict";

var templates = require("../../build/templates");

var UsesHogan = {

    templateAdapter: require("hogan-brisket")(templates.templates)

};

module.exports = UsesHogan;
