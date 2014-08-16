var x = 0;

function drawRects(context) {
	maxHex = "FFFFFF";
	randHex = Math.floor(Math.random() * parseInt(maxHex,16)).toString(16);
	context.fillStyle = "#000000";
	var width = 0;
	var height = 0;
	var new_width = 0;

		var width = Math.floor(Math.random() * 100) + 50;
		var height = Math.floor(Math.random() * 350) + 100;
		context.fillRect(x, 600 - height, width, height);
		x += Math.floor(Math.random() * width / 2) + width / 2;
		if (x < 2000) {window.setTimeout(drawRects, 100, context);}
	
}

window.onload = function () {
	var canvas = document.getElementById('cvs1');
	var context = canvas.getContext('2d');
	drawRects(context);
};
