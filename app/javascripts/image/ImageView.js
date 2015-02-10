"use strict";

var BaseView = require("../base/BaseView");

var ImageView = BaseView.extend({

    template: "images/image",

    onDOM: function() {
        console.log("displaying an image view!");
    }

});

module.exports = ImageView;
