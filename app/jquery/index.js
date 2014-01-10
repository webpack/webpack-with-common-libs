// require jquery
// This is not strictly required as we used the ProvidePlugin
// in the webpack.config.js to bind $ to "jquery"
// but it's better style to make it explicit
var $ = require("jquery");

// require jquery-ui
// the complete library
/* require("jquery-ui"); */

// or single modules
// you need to manage required module manually
require("jquery-ui/ui/jquery.ui.core");
require("jquery-ui/ui/jquery.ui.widget");
require("jquery-ui/ui/jquery.ui.mouse");
require("jquery-ui/ui/jquery.ui.draggable");

// some styling for border etc.
require("./style.css");



$(function() {
	$("#draggable").draggable();
});