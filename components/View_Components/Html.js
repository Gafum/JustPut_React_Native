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
				if(isfill){
					ctx.fillStyle = this.color
				}else{
					ctx.strokeStyle = this.color
					ctx.beginPath()
				}
				if(shape=="cub"){
					if(isfill){
						ctx.fillRect(this.x, this.y, this.width, this.height)
					}else{
						ctx.strokeRect(this.x, this.y, this.width, this.height)
					}
				}else
				if(shape=="circle"){
					ctx.strokeStyle = this.color
					ctx.beginPath()
					ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise)
					if(isfill){
						ctx.fill()
					}else{
						ctx.stroke()
					}
				}
			}
		}
	}

	const canva = document.querySelector("canvas")
	const ctx = canva.getContext("2d")

	function ColisionBetween(first, second) {
		if (
			first.x + first.width > second.x &&
			second.x + second.width > first.x &&
			first.y + first.height > second.y &&
			second.y + second.height > first.y
		) {
			return true
		}
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

	try{
		${a}
	}catch(e){
		alert(e)
	}
	</script>
</body>
</html>`
}
