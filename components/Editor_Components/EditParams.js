import React from "react"
import { WebView } from "react-native-webview"
import { ListOfElements } from "../Lists/ListOfElements"

function CodeOfEditFormula(parameter, element, listOfData, listOfFunct) {
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
		user-select: none;
	}

	body{
		height: 100%;
		width: 100%;
	}

	#btn{
		padding: 0 10px;
		display: flex;
		gap: 5px;
		width: 100vw;
		height: 60vh;
	}

	.mainBtn{
		padding: 5px 0;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
		gap:5px;
		height: fit-content;
	}

	.mainBtn>button{
		min-width: 50px;
		width: 100%;
		padding: 4px 7px;
		font-size: 16px;
		border-radius: 17px;
		border: none;
		background-color: #191919;
		color: white;
		text-align: center;
		overflow: hidden;
		aspect-ratio: 1 / 1;
		transition: all .5s;
	}

	.mainBtn>button:active{
		background-color: #888;
	}

	#result{
		overflow-y: scroll;
		width: 100%;
		height: 28vh;
		overflow-wrap: break-word;
		background-color: #191919;
		padding: 15px 10px;
		color: white;
		font-size: 18px;
	}

	#where{
		width: 100%;
		height: fit-content;
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
		min-width: 27px;
		background-color: #e3e3e3;
		overflow-X: scroll;
		scroll-behavior: smooth;
		white-space: pre;
		height: fit-content;
	}

	.formuls{
		padding: 5px 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 60%;
		gap: 5px;
		max-height: 69vh;
		overflow-y: scroll;
	}

	.mainLi{
		display: flex;
		justify-content: flex-start;
		alignItems: center;
		flex-direction: column;
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

	.LiAfterTap{
		height: fit-content;
	}

	.mainLi>ul{
		pointer-events: none;
		background-color: #e3e3e3;
		border-bottom-left-radius: 17px;
		border-bottom-right-radius: 17px;
		margin-top: 0;
		padding: 0;
		transition: none;
		width: 100%;
		opacity: 0;
		height: 0;
		visibility:0;
		translate: scaleX(0);
	}

	.mainLi>.showenUl{
		pointer-events: auto;
		margin-top: 15px;
		padding: 6px;
		opacity: 1;
		height: 100%;
		visibility: 1;
		translate: scaleX(1);
		transition: all .2s;
	}
	
	.mainLi>ul>li{
		font-size: 0px;
	}

	.mainLi>.showenUl>li{
		min-height: 17px;
		text-align: center;
		color: black;
		margin-bottom: 4px;
		width: 100%;
		font-size: 14px;
		list-style: none;
	}
	</style>
</head>
<body>
	<div id="where"></div>
	<div id="result"></div>
	<div id="btn">
		<div class="mainBtn">
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
		<ul class="formuls" id="tree">
			<li class="mainLi">Data
				<ul id="dataList">
					<li style="color: #777" onclick="createVarieble(true)">+Create</li>
				</ul>
			</li>
			<li class="mainLi">Math
				<ul>
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
					<li onclick="tapOfFunctionBtn(1, 'Math.sign', '(', ')');">sign</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.ceil', '(', ')');">ceil</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.floor', '(', ')');">floor</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.round', '(', ')');">round</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.trunc', '(', ')');">trunc</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.log', '(', ')');">log</li>
					<li onclick="tapOfFunctionBtn(1, 'Math.log10', '(', ')');">log10</li>
					<li onclick="tapOfFunctionBtn(0, 'Math.PI');">PI</li>
				</ul>
			</li>
			<li style="font-size: 14px;" class="mainLi">Properties
				<ul>
					<li>x</li>
					<li>y</li>
					<li>width</li>
					<li>height</li>
				</ul>
			</li>
			<li class="mainLi">Logic
				<ul>
					<li onclick="tapofbtn('==');">==</li>
					<li onclick="tapofbtn('!==');">!==</li>
					<li onclick="tapofbtn('===');">===</li>
					<li onclick="tapofbtn('>');">></li>
					<li onclick="tapofbtn('<');"><</li>
					<li onclick="tapofbtn('>=');">>=</li>
					<li onclick="tapofbtn('<=');"><=</li>
					<li onclick="tapofbtn('&&');">and</li>
					<li onclick="tapofbtn('||');">or</li>
					<li onclick="tapofbtn('!');">no</li>
					<li onclick="tapofbtn('true');">true</li>
					<li onclick="tapofbtn('false');">false</li>
				</ul>
			</li>
			<li class="mainLi">Function</li>
			<li class="mainLi">My func
				<ul id="functList">
					<li style="color: #777" onclick="createVarieble(false)">+Create</li>
				</ul>
			</li>
			<li class="mainLi">...
				<ul>
					<li onclick="tapOfFunctionBtn(1,'\${','}');">CodeInHTML</li>
					<li onclick="tapOfFunctionBtn(1,' ? ',' : ');">ternary</li>
					<li onclick="tapOfFunctionBtn(0, '%');">module</li>
					<li onclick="tapofbtn('[');">[</li>
					<li onclick="tapofbtn(']');">]</li>
					<li onclick="tapofbtn('{');">{</li>
					<li onclick="tapofbtn('}');">}</li>
				</ul>
			</li>
		</ul>
	</div>


	<script>

		/* ============================================ Code */

		const where = document.querySelector('#where')
		const result = document.querySelector('#result')
		const dataList = document.querySelector('#dataList')
		const functList = document.querySelector('#functList')

		document.querySelector('#tree').onclick = (event) => {
      let childrenContainer = event.target.querySelector("ul")
      if (!childrenContainer||event.target==document.querySelector('#tree')) return
			event.target.classList.toggle("LiAfterTap")
      childrenContainer.classList.toggle("showenUl")
    }

		// Create variable =============================>
		
		const TextInWhereOnStart = "${element.text}"
		const listOfChageParams = ${JSON.stringify(element.listChengers)}

		let List = ${parameter}
		let listOfData = ${JSON.stringify(listOfData)}
		let ListOfFunct = ${JSON.stringify(listOfFunct)}
		let listOfParams = {}
		let position = 0
		let whichPosition = 0 //which Parameter

		onStart() // set default value in data

		// Different Function ===================>
		

		function createVarieble(isData){
			let resultat = prompt(isData?'⠀⠀Create Data':'⠀⠀Create Function').replace(/ /g,'')
			if(!resultat) return
			if(listOfData.includes(resultat)) return
			if(isData){
				listOfData.push(String(resultat).slice(0, 9))
				chengeDataList(listOfData, true)
			}else{
				ListOfFunct.push(String(resultat).slice(0, 9))
				chengeDataList(ListOfFunct, false)
			}
		}

		function chengeDataList(whatList, isData){
			let resultat = whatList.reduce((a,b)=> {return a + \`<li onclick="tapofbtn('\${b}');">\${b}</li>\`}, '')
			if(isData){
				resultat+='<li style="color: #777" onclick="createVarieble(true)">+Create</li>'
				dataList.innerHTML = resultat
			}else{
				resultat+='<li style="color: #777" onclick="createVarieble(false)">+Create</li>'
				functList.innerHTML = resultat
			}
		}

		function setTextInWhere(){
			let resultat = TextInWhereOnStart
			let realChenge = []
			for (let i = 0; i < listOfChageParams.length; i++) {
				resultat = resultat.replace(listOfChageParams[i], \`<button class='whereBtn' onClick="newParameter(\${i});"></button>\`)
				if(List[i].length>0){
					realChenge.push(List[i].reduce((a, b) => a + b))
				}else{
					realChenge.push(' ')
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
					let textInEditor = TextInWhereOnStart
					for (let i = 0; i < listOfChageParams.length; i++) {
						let maxTextWidth = Math.floor((window.screen.availWidth - TextInWhereOnStart.length * 10) / 17)
						let realChenge = List[i].reduce((a, b) => a + b).slice(0, maxTextWidth)
						textInEditor = textInEditor.replace(listOfChageParams[i], realChenge)
					}
					window.ReactNativeWebView.postMessage(JSON.stringify([[...List], [...listOfData], textInEditor, [...ListOfFunct]]))
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
			chengeDataList(listOfData, true)
			chengeDataList(ListOfFunct, false)
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
  listOfData,
  listOfFunct
}) {
  let theElement = ListOfElements[element.idOfELement] //Element in Global List
  //element - element in project
  let html = CodeOfEditFormula(
    JSON.stringify(element.parameter),
    theElement,
    listOfData,
    listOfFunct
  ) // set code to html
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ html }}
      onMessage={(event) => {
        let resultat = JSON.parse(event.nativeEvent.data)
        ChengeParams(resultat[0], resultat[1], resultat[2], resultat[3])
        setEditParams(false)
      }}
    />
  )
}
