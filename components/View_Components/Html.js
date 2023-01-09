import React from "react"

export default function Html(a) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<title>View</title>
	<style>
		*{
			margin: 0%;
			padding: 0%;
			box-sizing: border-box;
			border: 0;
		}
		body{
			height: 100vh;
			width: 100vw;
		}
	</style>
</head>
<body>
	<div id="main"></div>
	<canvas style="display: block;" width="360" height="720">Error</canvas>
	<p class="loadTips">Loading</p>
	<p class="loadTips">will restart the game if you see this text for a long time</p>
	<script>
	const element = document.querySelector('#main')
	class rect {
		constructor({ 
		x = 0,
		y = 0,
		width = 50,
		height = 50,
		radius = 100,
		color = "#000",
		shape = "cub",
		startAngle = 0,
		endAngle = 2 * Math.PI,
		counterclockwise = false}) {
			this.color = color
			this.x = x
			this.y = y
			this.width = width
			this.height = height
			this.radius = radius
			this.shape = shape
			this.startAngle = startAngle
			this.endAngle = endAngle
			this.counterclockwise = counterclockwise
			this.draw = (isfill=true)=>{
				ctx.fillStyle = this.color
				ctx.strokeStyle = this.color
				ctx.beginPath()
				if(shape=="cub"){
					ctx.roundRect(this.x, this.y, this.width, this.height, [this.radius]);
				}else	if(shape=="circle"){
						ctx.arc( this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise)
				}

				if(isfill){
					ctx.fill()
				}else{
					ctx.stroke()
				}
			}
		}
	}

	const canva = document.querySelector("canvas")
	const ctx = canva.getContext("2d")
	setTimeout(()=>{	
		canva.width =  window.innerWidth
		canva.height = window.innerHeight
		document.querySelectorAll(".loadTips").forEach((i)=>i.style.display = "none")
	}, 300)

	function objectClick({object, pX, pY}){
		if(object.shape == "circle"){

			let distance = Math.floor(Math.sqrt(Math.pow(pX - object.x,2)+Math.pow(pY - object.y,2)))

			if (distance <= object.radius) {
				return true
			}
		}else if(object.shape == "cub"){
			if (pX >= object.x &&
				pX <= object.x + object.width &&   
				pY >= object.y &&        
				pY <= object.y + object.height) {  
					return true
			}
		}
	}

	function getCoordinatOfObjects(first, second){
		if (first.shape == "cub" && second.shape == "circle") {
			return { whatcolision: "cubCir", cx: second.x, cy: second.y, radius: second.radius, rx: first.x, ry: first.y, rw: first.width, rh: first.height }
		}
		if (first.shape == "circle" && second.shape == "cub") {
			return { whatcolision: "cubCir", cx: first.x, cy: first.y, radius: first.radius, rx: second.x, ry: second.y, rw: second.width, rh: second.height }
		}
		return undefined
	}


	function colisionBetween(first, second) {
		if(first.shape == second.shape){
			if(first.shape == "cub"){
				if (
					first.x + first.width >= second.x &&
					second.x + second.width >= first.x &&
					first.y + first.height >= second.y &&
					second.y + second.height >= first.y
				) {
					return true
				}
			}else if(first.shape == "circle"){

				let distance = Math.floor(Math.sqrt(Math.pow(first.x - second.x,2)+Math.pow(first.y - second.y,2)))

				if (distance <= first.radius+second.radius) {
					return true;
				}
			}
		}
		else {
			let {whatcolision, cx, cy, rx, ry, rw, rh, radius} = getCoordinatOfObjects(first, second)
			if(whatcolision == "cubCir"){
				let testX = cx, testY = cy

				if (cx < rx)         testX = rx      // test left edge
				else if (cx > rx+rw) testX = rx+rw   // right edge
				if (cy < ry)         testY = ry    	 // top edge
				else if (cy > ry+rh) testY = ry+rh   // bottom edge

				let distance =Math.floor(Math.sqrt(Math.pow(cx-testX,2)+Math.pow(cy-testY,2)))

				if (distance <= radius) {
					return true
				}
			}
		}
		return false
	}

	function CreateFradionAddPoints(myName, list, points){
		list.forEach((i, index)=>myName.addColorStop(points[index], i))
	}

	function joinStrings(a,b){
		return String(a)+String(b)
	}

	function degToRadian(deg) {
		return (Math.PI / 180) * deg
	}

	function randomInteger(min, max) {
		let rand = min + Math.random() * (max + 1 - min)
		return Math.floor(rand)
	}

	function distanceBetween(first, second){
		return Math.floor(Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)))
	}

	function getpositionOfMouse(e){
		if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
			let touch = e.touches[0] || e.changedTouches[0];
			return {x: touch.pageX, y:touch.pageY}
		} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
			return { x: e.offsetX, y: e.offsetY }
		}
	}

	try{
		${a}
	}catch(e){
		alert(e)
	}
	</script>
</body>
</html>`
}
