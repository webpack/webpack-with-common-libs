// twbs/bootstrap is included in the webpack.config.js
// as multi-module entry

$("#myModal").modal({
	show: false
});

$("#save-button").click(function() {
	alert("Saved");
	$("#myModal").modal("hide");
});