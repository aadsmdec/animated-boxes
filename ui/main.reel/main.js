/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    count: {value: 0},
    array: {value: null},

    templateDidLoad: {
        value: function() {
            var array = [];

            for (var i = 0; i < this.total; i++) {
                array[i] = i;
            }
            this.array = array;

            this.needsDraw = true;
        }
    },

    draw: {
        value: function() {
            var count = this.count++;

            this.top = Math.sin(count / 10) * 10;
            this.left = Math.cos(count / 10) * 10;
            this.color = count % 255;
            this.content = count % 100;

            this.needsDraw = true;
        }
    }
});
