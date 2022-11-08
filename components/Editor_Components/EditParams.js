import React from "react"
import { WebView } from "react-native-webview"

function CodeOfEditFormula(parameter) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<title>Edit Params</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Gugi&display=swap" rel="stylesheet">
	<style>
	*{
		margin: 0%;
		padding: 0%;
		font-family: 'Gugi', cursive;
		box-sizing: border-box;
	}
	body{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	button{
		width: 100%;
		height: 50px;
		border-radius: 16px;
		border: none;
		background-color: #191919;
		color: white;
	}
	button:active{
		background-color: #888;
	}
	#btn{
		padding: 10px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 6px;
		justify-items: center;
		width: 100%;
	}
	#result{
		overflow-y: scroll;
		width: 100%;
		height: 170px;
		overflow-wrap: break-word;
		margin-bottom: 10px;
		background-color: #191919;
		padding: 15px 10px;
		color: white;
	}
	</style>
</head>
<body>
	<div id="result"></div>
	<div id="btn">
		<button onclick="tapofbtn('Code');">Code</button>
		<button onclick="tapofbtn('(');">(</button>
		<button onclick="tapofbtn(')');">)</button>
		<button onclick="tapofbtn('delete');">⌫</button>
		<button onclick="tapofbtn('1');">1</button>
		<button onclick="tapofbtn('2');">2</button>
		<button onclick="tapofbtn('3');">3</button>
		<button onclick="tapofbtn('+');">+</button>
		<button onclick="tapofbtn('4');">4</button>
		<button onclick="tapofbtn('5');">5</button>
		<button onclick="tapofbtn('6');">6</button>
		<button onclick="tapofbtn('-');">-</button>
		<button onclick="tapofbtn('7');">7</button>
		<button onclick="tapofbtn('8');">8</button>
		<button onclick="tapofbtn('9');">9</button>
		<button onclick="tapofbtn('*');">*</button>
		<button onclick="tapofbtn('.');">.</button>
		<button onclick="tapofbtn('0');">0</button>
		<button onclick="tapofbtn(',');">,</button>
		<button onclick="tapofbtn('/');">/</button>
		<button onclick="tapofbtn('Text');">Text</button>
		<button onclick="tapofbtn('left');"><-</button>
		<button onclick="tapofbtn('right');">-></button>
		<button onclick="tapofbtn('Ok');">Ok</button>
	</div>
	<script>

		/* ============================================ Code */


		const rest = document.querySelector("#result")
		let listOfParams = ${parameter}
		let position = listOfParams.length

		function changeText(){
			if(listOfParams.length>0){
				let textFromList = listOfParams.reduce((a, b, i) =>{
					let c = ""
					if(i == 0 && position == 0){
						return c = "|" + String(b)
					}
					c = String(a) + String(b)
					if(i+1 == position){
						c += "|"
					}
					return c
				}, '')
				rest.textContent = textFromList
			} else {
				rest.textContent ='|'
			}
			return textFromList
		}

		function addTextOrCode(isText){
			let defaultParameter = ''
			if (position < listOfParams.length) {
				if (isText && listOfParams[position].startsWith("'")) {
					defaultParameter = listOfParams[position].slice(1, -1)
				} else
					if (!isText && listOfParams[position].startsWith(" ")) {
						defaultParameter = listOfParams[position].substring(1)
					}
			}
			let userAnswer = prompt(isText?'⠀⠀Enter Text': '⠀⠀Write Code', defaultParameter)
			if (userAnswer) {
				let numberOfDelate = 0
				if (defaultParameter.length > 0) {
					numberOfDelate = 1
				}
				listOfParams.splice(position, numberOfDelate, isText ? "'" + userAnswer + "'" : " " + userAnswer)
				position++
			}
			userAnswer = ''
		}

		function tapofbtn(text){
			switch(text) {
				case "left":
					if( position>0 ){
						position--
					} else {
						position = 0
					}
					break
				case "right":if( position<listOfParams.length ){
					position++
				} else {
					position = listOfParams.length
				}
					break
				case "Text":
					addTextOrCode(true)
					break
				case "Code":
					addTextOrCode(false)
					break
				case "delete":
					if(listOfParams.length>0){
						listOfParams.splice(position-1, 1)
						position--
					} else{
						listOfParams=[]
						position=0
					}
					break
				case "Ok":
					window.ReactNativeWebView.postMessage(JSON.stringify(listOfParams))
					break
				default:
					listOfParams.splice(position, 0, text)
					position++
					break
				}
				changeText()
		}

		changeText()
	</script>
</body>
</html>`
}

export default function EditParams({ ChengeParams, setEditParams, parameter }) {
  let html = CodeOfEditFormula(JSON.stringify(parameter[0])) // set code to html
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ html }}
      onMessage={(event) => {
        ChengeParams(JSON.parse(event.nativeEvent.data))
        setEditParams(false)
      }}
    />
  )
}
