//window.onload = function() {
//	var canvas = document.getElementById("canvas");
//	var ctx = canvas.getContext("2d");
////	var canvas_outline = document.getElementById("canvas-outline");
////	var context = canvas_outline.getContext("2d");
//
//	//轮廓
//	function Outline() {
//		ctx.save();
//		ctx.beginPath();
//		ctx.rotate(-90 * Math.PI / 180);
//		ctx.arc(0, 0, 170, 0, Math.PI * 2);
//		ctx.arc(0, 0, 160, 0, Math.PI * 2);
//		ctx.fillStyle = "#733A1D";
//		ctx.fill("evenodd");
//		ctx.closePath();
//		ctx.stroke();
//		ctx.restore();
//	}
//	//钟表
//	function Clock() {
//		ctx.save();
//		for(var i = 0; i <= 60; i++) {
//			ctx.beginPath();
//			if(i % 5 == 0) {
//				ctx.lineWidth = 2;
//				ctx.moveTo(0, -128);
//			} else {
//				ctx.lineWidth = 1;
//				ctx.moveTo(0, -140);
//			}
//			ctx.lineTo(0, -150);
//			ctx.rotate(Math.PI / 180 * 6);
//			ctx.closePath();
//			ctx.stroke();
//		}
//		ctx.restore();
//	}
//
//	/*Write Hours*/
//	function Hours() {
//		ctx.save();
//		var now = new Date();
//		var h = now.getHours();
//		var m = now.getMinutes();
//		var s = now.getSeconds();
//		var deg = ((h * 60 * 60 + m * 60 + s) / 120) * Math.PI / 180;
//		ctx.rotate(deg);
//		ctx.beginPath();
//		ctx.lineWidth = 3;
//		ctx.lineCap = "round";
//		ctx.arc(0, 0, 15, 0, Math.PI * 2);
//		ctx.moveTo(0, 15);
//		ctx.lineTo(0, 30);
//		ctx.moveTo(0, -15);
//		ctx.lineTo(0, -80);
//		ctx.closePath();
//		ctx.stroke();
//		ctx.restore();
//	}
//
//	/*Write Minutes*/
//	function Minutes() {
//		ctx.save();
//		var now = new Date();
//		var m = now.getMinutes();
//		var s = now.getSeconds();
//		var deg = ((m * 60 + s) / 10) * Math.PI / 180;
//		ctx.rotate(deg);
//		ctx.beginPath();
//		ctx.lineWidth = 2;
//		ctx.lineCap = "round";
//		ctx.arc(0, 0, 15, 0, Math.PI * 2);
//		ctx.moveTo(0, 15);
//		ctx.lineTo(0, 35);
//		ctx.moveTo(0, -15);
//		ctx.lineTo(0, -100);
//		ctx.closePath();
//		ctx.stroke();
//		ctx.restore();
//	}
//
//	/*Write Seconds*/
//	function Seconds() {
//		ctx.save();
//		var now = new Date();
//		ctx.rotate(Math.PI / 180 * 6);
//		var s = now.getSeconds();
//		ctx.rotate(Math.PI / 180 * 6 * s);
//		ctx.beginPath();
//		ctx.lineWidth = 1;
//		ctx.lineCap = "round";
//		ctx.arc(0, 0, 15, 0, Math.PI * 2);
//		ctx.moveTo(0, 15);
//		ctx.lineTo(0, 55);
//		ctx.moveTo(0, -15);
//		ctx.lineTo(0, -120);
//		ctx.closePath();
//		ctx.stroke();
//		ctx.restore();
//	}
//
//	/*Write Line*/
//	var deg = 0;
//
//	function Line() {
//		if(deg == 360) {
//			deg = 0;
//		}
//		ctx.save();
//		ctx.rotate(-90 * Math.PI / 180);
//		ctx.beginPath();
//		ctx.arc(0, 0, 180, 0, Math.PI / 180 * deg);
//		ctx.moveTo(0, -180);
//		ctx.closePath();
//		ctx.stroke();
//		ctx.restore();
//		deg += 1;
//	}
//
//	/*Write Circle*/
//	function Circle() {
//		if(deg == 360) {
//			deg = 0;
//		}
//		ctx.save();
//		ctx.rotate(Math.PI / 180 * deg);
//		ctx.beginPath();
//		ctx.arc(0, -180, 10, 0, Math.PI * 2 * deg);
//		ctx.closePath();
//		ctx.fillStyle = '#6C0';
//		ctx.fill();
//		//ctx.fillRect(0,0,75,75);
//		ctx.restore();
//		deg += 1;
//	}
//
//	/*render 渲染*/
//	function render() {
//		ctx.clearRect(0, 0, 450, 450);
//		ctx.save();
//		ctx.translate(7.5 * 30, 7.5 * 30);
//		Outline();
//		Clock();
//		Hours();
//		Minutes();
//		Seconds();
//		Line();
//		Circle();
//		ctx.restore();
//	}
//	render();
//	setInterval(render, 111);

	/*Write 五角星*/
//	function Star(x, y, a, b) {
//		context.save();
//
//		context.translate(x, y);
//		context.scale(a, b);
//
//		context.beginPath();
//		context.lineTo(0, -30);
//		context.lineTo(-4, -5);
//		context.lineTo(-20, -0);
//		context.lineTo(-7, 7);
//		context.lineTo(-10, 25);
//		context.lineTo(0, 10);
//		context.lineTo(10, 25);
//		context.lineTo(7, 7);
//		context.lineTo(20, 0);
//		context.lineTo(5, -5);
//		context.closePath();
//
//		context.fillStyle = "#09F";
//		context.fill();
//		context.stroke();
//		context.restore();
//	}
//
//	function star() {
//		context.clearRect(0, 0, 450, 450);
//		context.save();
//		//		context.translate(7.5 * 30, 7.5 * 30);
//		for(var i = 0; i < 60; i++) {
//			var x = Math.floor(Math.random() * 450);
//			var y = Math.floor(Math.random() * 450);
//			var a = Math.random() + 0.1;
//			var b = Math.random() + 0.2;
//			Star(x, y, a, b);
//		}
//		context.stroke();
//		context.restore();
//	}
//	setInterval(star, 111);
//}