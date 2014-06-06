/**
 * @module ui/box.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Box
 * @extends Component
 */
exports.Box = Component.specialize(/** @lends Box# */ {
    constructor: {
        value: function Box() {
            this.super();
        }
    },
    
    _top: {value: null},
    top: {
        set: function(value) {
            this._top = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._top;
        }
    },

    _left: {value: null},
    left: {
        set: function(value) {
            this._left = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._left;
        }
    },

    _color: {value: null},
    color: {
        set: function(value) {
            this._color = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._color;
        }
    },

    _content: {value: null},
    content: {
        set: function(value) {
            this._content = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._content;
        }
    },

    _count: {value: null},
    count: {
        set: function(value) {
            this._count = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._count;
        }
    },

    draw: {
        value: function() {
            var element = this._element,
                style = element.style;

            element.textContent = this._content;
            style.top = this._top + "px";
            style.left = this._left + "px";
            style.background = "rgb(0, 0, " + this._color + ")";
        }
    }
});
