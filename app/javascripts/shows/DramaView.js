"use strict";

var BaseView = require("../base/BaseView");

var DramaView = BaseView.extend({

    template: "shows/drama",

    logic: function() {
        return {
            showName: "Game of thrones yo"
        };
    }

});

module.exports = DramaView;
