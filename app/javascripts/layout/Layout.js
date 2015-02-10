'use strict';

var Brisket = require('brisket');
var BaseView = require('../base/BaseView');
var UsesHogan = require('../concerns/UsesHogan');
var _ = require('lodash');

var Layout = Brisket.Layout.extend(_.extend({}, UsesHogan, {

    defaultTitle: 'Your first Brisket site',

    content: '#content',

    template: "layout/layout",

    beforeRender: function() {
        this.createChildView(HeaderView)
            .andPrependItTo('body');
    }

}));

var HeaderView = BaseView.extend({

    template: "layout/header",

    onDOM: function() {
        var $logo = this.$('.logo');
        $logo.fadeOut(function() {
            $logo.fadeIn();
        });
    }

});

module.exports = Layout;
