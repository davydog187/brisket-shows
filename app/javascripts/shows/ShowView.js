"use strict";

var BaseView = require("../base/BaseView");
var ImageView = require("../image/ImageView");

var IMAGE_CONTAINER = ".image-container";

var ShowView = BaseView.extend({

    template: "shows/show",

    beforeRender: function() {
        if (this.model.hasUrl()) {
            this.createChildView(ImageView)
                .withOptions({
                    model: this.model
                })
                .andAppendItTo(IMAGE_CONTAINER);
        }
    },

    logic: function() {
        return {
            showName: this.model.get("name")
        };
    }

});

module.exports = ShowView;
