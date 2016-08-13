require("babel-polyfill");

var Home = require('./screen/Home/Home.jsx');
//var CheckoutStore = require('checkout.store');
var ReactDOM = require('react-dom');
var React = require('react');
var Util = require('util');

window._ = require('underscore');

/*
function logToServer(e) {
    try {
        if (e.stack && typeof Util.postInHouseLog !== "undefined") {
            Util.postInHouseLog("GLOBAL JS ERROR: " +  e.message + " : stack: " + e.stack);
        } else if (typeof Util.sendInHouseLog !== "undefined") {
            Util.sendInHouseLog("GLOBAL JS ERROR: " +  e.message);
        }
    } catch(e) {};
}
*/

$(document).ready(function() {

    window.addEventListener("error", function (e) {
        console.error("Logged Error: ", e);
        //logToServer(e);
    });

    //CheckoutStore.load().then(function() {
        ReactDOM.render(<Home />, document.getElementById("reactApp"));
    //}).done();

});
