import React from "react"
import { WebView } from "react-native-webview"
import { ListOfElements } from "../Lists/ListOfElements"

function CodeOfEditFormula(parameter, element, listOfData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<title>Edit Params</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cuprum:wght@700&display=swap" rel="stylesheet">
	<style>
	*{
		margin: 0%;
		padding: 0%;
		font-family: 'Cuprum', sans-serif;
		box-sizing: border-box;
	}
	body{
		height: 100%;
		width: 100%;
	}
	#btn button{
		width: 100%;
		padding: 7px;
		font-size: 16px;
		border-radius: 17px;
		border: none;
		background-color: #191919;
		color: white;
		height: 100%;
		text-align: center;
	}
	#btn>button:active{
		background-color: #888;
	}
	#btn{
		padding: 20px 10px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 6px;
		justify-items: center;
		width: 100%;
		height: 60vh;
	}
	#result{
		overflow-y: scroll;
		width: 100%;
		height: 30vh;
		overflow-wrap: break-word;
		background-color: #191919;
		padding: 15px 10px;
		color: white;
		font-size: 18px;
	}
	#where{
		width: 100%;
		height: 10vh;
		background-color: ${element.color};
		padding: 15px;
		display: flex;
		justify-content: flex-start;
		gap: 5px;
		alignItems: center;
	}
	#where>button{
		padding: 3px;
		border:none;
		outline: none;
		border-radius: 5px;
		max-width: 60px;
		background-color: #e3e3e3;
		overflow-X: scroll;
		scroll-behavior: smooth;
	}
	.formuls{
		grid-column-start: 5;
		grid-row-start: 1;
		grid-row-end: 7;
		display: grid;
		grid-template-row: repeat(6, 1fr);
		gap: 6px;
		justify-items: center;
		width: 100px;
		max-height: 60vh;
		overflow-Y: scroll;
	}
	.formuls>li{
		width: 100%;
		font-size: 16px;
		border-radius: 17px;
		border: none;
		background-color: #191919;
		color: white;
		height: 100%;
		list-style: none;
		text-align: center;
		padding: 7px 0 3px;
	}
	li>ul{
		background-color: #e3e3e3;
		border-bottom-left-radius: 17px;
		border-bottom-right-radius: 17px;
		width: 100%;
		margin-top: 10px;
	}
	li>ul>li{
		text-align:center;
		color: black;
		margin-bottom: 4px;
	}
	</style>
</head>
<body>
	<div id="where"></div>
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
		<ul class="formuls" id="tree">
			<li>Data
				<ul hidden id="dataList">
					<li style="color: #777" onclick="createVarieble()">+Create</li>
				</ul>
			</li>
			<li>Math
				<ul hidden>
					<li onclick="tapOfFunctionBtn(2, 'Math.pow', '(', ',', ')');">pow</li>
					<li onclick="tapOfFunctionBtn(0,'Math.random()');">random</li>
					<li onclick="tapOfFunctionBtn(1,'Math.sqrt', '(', ')');">sqrt</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.sin', '(', ')');">sin</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.cos', '(', ')');">cos</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.tan', '(', ')');">tan</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.asin', '(', ')');">asin</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.acos', '(', ')');">acos</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.atan', '(', ')');">atan</li>
					<li onclick="tapOfFunctionBtn(2, 'Math.atan2', '(', ',' ,')');">atan2</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.max', '(', ')');">max</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.min', '(', ')');">min</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.abs', '(', ')');">abs</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.ceil', '(', ')');">ceil</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.floor', '(', ')');">floor</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.round', '(', ')');">round</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.trunc', '(', ')');">trunc</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.sign', '(', ')');">sign</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.log', '(', ')');">log</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.log10', '(', ')');">log10</li>
					<li onclick="tapOfFunctionBtn(0, 'Math.PI');">PI</li>
				</ul>
			</li>
			<li>Properties
				<ul hidden>
					<li>x</li>
					<li>y</li>
					<li>width</li>
					<li>height</li>
				</ul>
			</li>
			<li>Logic</li>
			<li>Function</li>
			<li>...
				<ul hidden>
					<li onclick="tapOfFunctionBtn(1,'\${','}');">CodeInHTML</li>
					<li onclick="tapOfFunctionBtn(2,' ? ',' : ');">ternary</li>
					<li onclick="tapofbtn('[');">[</li>
					<li onclick="tapofbtn(']');">]</li>
				</ul>
			</li>
		</ul>
	</div>


	<script>

		/* ============================================ Code */
		const tree = document.querySelector('#tree')
		const where = document.querySelector('#where')
		const result = document.querySelector('#result')

		tree.onclick = function(event) {
      let childrenContainer = event.target.querySelector('ul');
      if (!childrenContainer) return;
      childrenContainer.hidden = !childrenContainer.hidden;
    }
		// Create variable =============================>
		

		const TextInWhereOnStart = "${element.text}"
		const listOfChageParams = ${JSON.stringify(element.listChengers)}

		let List = ${parameter}
		let listOfData = ${JSON.stringify(listOfData)}
		let listOfParams = {}
		let position = 0
		let whichPosition = 0 //which Parameter

		onStart() // set default value in data

		// Different Function ===================>
		


		function createVarieble(){
			let resultat = prompt('Create Data')
			if(!resultat) return
			if(listOfData.includes(resultat)) return
			listOfData.push(String(resultat))
			chengeDataList()
		}

		function chengeDataList(){
			let resultat = listOfData.reduce((a,b)=> {return a + \`<li onclick="tapofbtn('\${b}');">\${b}</li>\`}, '')
			resultat+='<li style="color: #777" onclick="createVarieble()">+Create</li>'
			dataList.innerHTML = resultat
		} 

		function setTextInWhere(){
			let resultat = TextInWhereOnStart
			let realChenge = []
			for (let i = 0; i < listOfChageParams.length; i++) {
				resultat = resultat.replace(listOfChageParams[i], \`<button class='whereBtn' onClick="newParameter(\${i});"></button>\`)
				if(List[i].length>0){
					realChenge.push(List[i].reduce((a, b) => a + b))
				}else{
					realChenge.push('')
				}
			}
			where.innerHTML = resultat
			let whereBtns = document.querySelectorAll('.whereBtn')
			whereBtns.forEach((i, index)=>i.textContent = realChenge[index])
		}

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
				result.textContent = textFromList
			} else {
				result.textContent ='|'
			}
			List[whichPosition] = listOfParams
			setTextInWhere()
			return textFromList
		}

		function newParameter(parameter){
			if(parameter !== whichPosition){
				whichPosition = parameter
				onStart()
			}
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

		function tapOfFunctionBtn(){
			for (let index = 1; index < arguments.length; index++) {
				listOfParams.splice(position, 0, arguments[index])
				position++
			}
			position-=arguments[0]
			changeText()
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
				case "right":
					if( position<listOfParams.length ){
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
						if(position > 0){
							listOfParams.splice(position-1, 1)
							position--
						}
					} else{
						listOfParams=[]
						position=0
					}
					break
				case "Ok":
					window.ReactNativeWebView.postMessage(JSON.stringify([[...List], [...listOfData]]))
					break
				default:
					listOfParams.splice(position, 0, text)
					position++
					break
				}
				changeText()
		}

		function onStart(){
			listOfParams = List[whichPosition]
			position = listOfParams.length
			chengeDataList()
			changeText()
		}
		
	</script>
</body>
</html>`
}

export default function EditParams({
  ChengeParams,
  setEditParams,
  element,
  listOfData
}) {
  let theElement = ListOfElements[element.idOfELement] //Element in Global List
  //element - element in project
  let html = CodeOfEditFormula(
    JSON.stringify(element.parameter),
    theElement,
    listOfData
  ) // set code to html
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ html }}
      onMessage={(event) => {
        let resultat = JSON.parse(event.nativeEvent.data)
        ChengeParams(resultat[0], resultat[1])
        setEditParams(false)
      }}
    />
  )
}
