import { ListOfElements, tapElements } from "./ListOfElements"
import Style from "./style"
import SortableJS from "./sortable"
import svgs from "./svg-icons"

export default function Html(data, name, theme) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <title>Just Put</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cuprum:wght@700&display=swap"
      rel="stylesheet"
    />
    <style>
      ${Style(theme)}
    </style>
  </head>

  <body>
    <!-- ASSETS -->
		${svgs(theme)}		<!-- get svg icons -->

    <ul id="listEditor">
      <!-- content -->
    </ul>

    <div class="fab-container">
      <div class="iconbutton" id="main-btn-label">
        <span>+</span>
      </div>
      <ul class="options">
        <li class="btn-label" id="btn-label1" data-mycolor="#96b38e">
          <span>Propertie</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-properties"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label2" data-mycolor="#f59073">
          <span>Control</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-control"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label3" data-mycolor="#913e5f">
          <span>Object</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-object"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label4" data-mycolor="#eb4464">
          <span>Data</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-data"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label5" onclick="codeCreator();">
          <span>Start</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg style="max-height: 100%">
                <use xlink:href="#icon-start"></use>
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <!-- ADD BLOCK -->
    <div id="addblocks">
      <div class="fix where-addblock">
        <span>Add block </span>
				<button onclick="closeAddBlockParams();">x</button>
      </div>
			<div class="where-addblock">
        <span>Add block </span>
      </div>
      <ul id="listAddBlock">
        <!-- content -->
      </ul>
    </div>

    <!-- EDIT PARAMS -->
    <div id="editparams">
      <div id="where">
        <div id="inner-where"></div>
        <button onclick="closeEditParams();">x</button>
      </div>
      <div id="result"></div>
      <div id="btns">
        <div class="mainBtn">
          <button onclick="tapofbtn('@0Code**');">Code</button>
          <button onclick="tapofbtn('(');">(</button>
          <button onclick="tapofbtn(')');">)</button>
          <button onclick="tapofbtn('@0delete**');">⌫</button>
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
          <button onclick="tapofbtn('@0Text**');">Text</button>
          <button onclick="tapofbtn('@0left**');"><-</button>
          <button onclick="tapofbtn('@0right**');">-></button>
          <button onclick="tapofbtn('@0Ok**');">Ok</button>
        </div>
        <ul class="formuls" id="tree">
          <li class="mainLi">
            Data
            <ul id="dataList">
              <li style="color: #777" onclick="createVarieble(true)">
                +Create
              </li>
            </ul>
          </li>
          <li class="mainLi">
            Math
            <ul>
              <li onclick="tapOfFunctionBtn(2, 'Math.pow', '(', ',', ')');">
                pow
              </li>
              <li onclick="tapOfFunctionBtn(0,'Math.random()');">random</li>
              <li onclick="tapOfFunctionBtn(1,'Math.sqrt', '(', ')');">sqrt</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.sin', '(', ')');">sin</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.cos', '(', ')');">cos</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.tan', '(', ')');">tan</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.asin', '(', ')');">
                asin
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.acos', '(', ')');">
                acos
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.atan', '(', ')');">
                atan
              </li>
              <li onclick="tapOfFunctionBtn(2, 'Math.atan2', '(', ',' ,')');">
                atan2
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.max', '(', ')');">max</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.min', '(', ')');">min</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.abs', '(', ')');">abs</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.sign', '(', ')');">
                sign
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.ceil', '(', ')');">
                ceil
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.floor', '(', ')');">
                floor
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.round', '(', ')');">
                round
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.trunc', '(', ')');">
                trunc
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.log', '(', ')');">
                log
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.log10', '(', ')');">
                log10
              </li>
              <li onclick="tapOfFunctionBtn(0, 'Math.PI');">PI</li>
            </ul>
          </li>
          <li style="font-size: 14px" class="mainLi">
            Properties
            <ul>
							<li onclick="tapofbtn('.x');">x</li>
							<li onclick="tapofbtn('.y');">y</li>
							<li onclick="tapofbtn('.width');">width</li>
							<li onclick="tapofbtn('.height');">height</li>
							<li onclick="tapofbtn('.color');">color</li>
							<li onclick="tapofbtn('.radius');">radius</li>
							<li onclick="tapofbtn('.direction');">direction</li>
							<li onclick="tapofbtn('.startAngle');">startAngle</li>
							<li onclick="tapofbtn('.endAngle');">endAngle</li>
							<li onclick="tapofbtn('DisplayWidth');">DisplayWidth</li>
							<li onclick="tapofbtn('DisplayHeight');">DisplayHeight</li>
            </ul>
          </li>
          <li class="mainLi">
            Logic
            <ul>
              <li onclick="tapofbtn('=');">SET</li>
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
              <li onclick="tapofbtn('undefined');">undefined</li>
            </ul>
          </li>
          <li class="mainLi">Function
						<ul>
							<li onclick="tapOfFunctionBtn(1,'prompt(',')');">prompt</li>
							<li onclick="tapOfFunctionBtn(1,'confirm(',')');">confirm</li>
							<li onclick="tapOfFunctionBtn(2,'joinStrings(',',',')');">joinStrings</li>
							<li onclick="tapOfFunctionBtn(1,'degToRadian(',')');">degToRadian</li>
							<li onclick="tapOfFunctionBtn(2,'randomInteger(',',',')');">randomInteger</li>
							<li onclick="tapOfFunctionBtn(2,'colisionBetween(',',',')');">colisionBetween</li>
							<li onclick="tapOfFunctionBtn(2,'distanceBetween(',',',')');">distanceBetween</li>
							<li onclick="tapofbtn('.length');">length</li>
							<li onclick="tapOfFunctionBtn(1,'.indexOf(',')');">indexOf</li>
							<li onclick="tapOfFunctionBtn(1,'.lastIndexOf(',')');">lastIndexOf</li>
							<li onclick="tapOfFunctionBtn(1,'.includes(',')');">includes</li>
							<li onclick="tapOfFunctionBtn(1,'.isArray(',')');">isArray</li>
							<li onclick="tapOfFunctionBtn(1,'Object.keys(',')');">Object.keys</li>
						</ul>
					</li>
          <li class="mainLi">
            My func
            <ul id="functList">
              <li style="color: #777" onclick="createVarieble(false)">
                +Create
              </li>
            </ul>
          </li>
          <li class="mainLi">
            ...
            <ul>
              <li onclick="tapOfFunctionBtn(1,'\${','}');">CodeInHTML</li>
              <li onclick="tapOfFunctionBtn(1,' ? ',' : ');">ternary</li>
              <li onclick="tapOfFunctionBtn(0, '%');">module</li>
							<li style="display: flex; justify-content: center; align-items:center; gap: 5px">
								<button onclick="addColor();" style="padding: 4px 7px; font-size: 16px; border-radius: 7px;border: none; background-color: #191919; color: #fff; text-align: center; outline: none;">
									Add
								</button>
								<input type="color" id="color-picker" value="#30c731">
							</li>
              <li onclick="tapofbtn('[');">[</li>
              <li onclick="tapofbtn(']');">]</li>
              <li onclick="tapofbtn('{');">{</li>
              <li onclick="tapofbtn('}');">}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <script>
      /* ====== Data */
			const objectColor = "#913e5f"
			const controlColor = "#f59073"
			const propertiesColor = "#96b38e"
			const dataColor = "#eb4464"
      const ListOfElements = ${JSON.stringify(ListOfElements)}
			const tapElements = ${JSON.stringify(tapElements)}
      let listOfData = []
      let listOfFunct = []
			let copyList = []
    </script>

    <script>${SortableJS()}</script>

    <script>

      /* ============================================ Code for Editor and addblocks */
      const ListInEditor = document.querySelector("#listEditor")
      const addblocks = document.querySelector("#addblocks")
      const mainBtnLabel = document.querySelector("#main-btn-label")
      const ListAddBlock = document.querySelector("#listAddBlock")
      const btnStart = document.querySelector("#btn-label5")
      const body = document.querySelector("body")

      mainBtnLabel.onclick = () => {
				mainBtnLabel.classList.toggle("active")
      }

      document.querySelectorAll('.btn-label').forEach((i, index) => {
				if (index === document.querySelectorAll('.btn-label').length - 1) {
					return
				}
				addblocks.scrollTo(0,0)
				i.onclick = () => {
					let resultList = ListOfElements.filter((element) => element.color == i.dataset.mycolor)
					ListAddBlock.innerHTML = ""
					resultList.forEach((j) => {
						ListAddBlock.innerHTML += \`
							<li class="ElementsInEditor" onclick="addBlock(\${j.id});">
								<span style="color:\${ListOfElements[j.id].color}">
								\${j.text}
								</span>
							</li>\`

					})
					addblocks.classList.add("active")
					body.classList.add("no-scroll")
					addblocks.querySelector(".where-addblock").style.backgroundColor = i.dataset.mycolor
					mainBtnLabel.classList.remove("active")
				}
      })

			function addBlock(element) {
				if (tapElements.includes(String(element))) {
					ListOfElements[element].standartParameter[1] = ["A" + Date.now() + Math.random().toString(32).slice(4)]
				}
				let adderElement = Math.floor((document.documentElement.scrollTop + window.innerHeight / 2) / (40 + listOfFunct.length * 2)) - 2
				if (ListInEditor.children.length * 40 < window.innerHeight * 0.7) {
					adderElement = ListInEditor.children.length - 1
				}
				let li = ""
				if (ListInEditor.children.length) {
					li = document.createElement("li")
					ListInEditor.children[adderElement].after(li)
				} else {
					ListInEditor.innerHTML = "<li class='newElement'></li>"
					li = document.querySelector(".newElement")
					adderElement = -1
				}
				li.classList.add("ElementsInEditor")
				li.style.marginTop = ListOfElements[element].isfunction ? "15px" : "0px"
				li.style.backgroundColor = ListOfElements[element].color
				li.innerHTML = \`<div class="innerOfElement" ${
          theme &&
          'style="background-color: ${ListOfElements[element].color}; border-radius:8px;"'
        }>
							<div class="my-handle" onclick="showBtnElement(event);">
								<span></span>
								<div class="my-handle-inner"></div>
							</div>
							<div class="btn-in-element">
								<div class="btn-delete" onclick="deleteElement(event);">
									<svg class="icon-delete-editor">
										<use xlink:href="#icon-delete"></use>
									</svg>
								</div>
								<div class="btn-delete" onclick="copyElement(event);">
									<svg class="icon-delete-editor">
										<use xlink:href="#icon-copy"></use>
									</svg>
								</div>
								<div class="btn-delete" onclick="pasteElement(event);">
									<svg class="icon-delete-editor">
										<use xlink:href="#icon-paste"></use>
									</svg>
								</div>
							</div>
						<span style="color: black" class="elementText" data-id="\${element}" data-parameter='\${JSON.stringify(ListOfElements[element].standartParameter)}'>
							\${ListOfElements[element].text}
						</span>
					</div>
						<span class="EditParameterBtn" onclick="changeparams(event);">
							<svg class="icon-delete-editor">
								<use xlink:href="#icon-edit"></use>
							</svg>
						</span>\`
				if (ListOfElements[element].secondArgument) {
					li.classList.add("start")
					ListOfElements[element].secondArgument.forEach((i, index) => {
						adderElement++
						let addLi = document.createElement("li")
						addLi.classList.add("ElementsInEditor")
						index + 1 == ListOfElements[element].secondArgument.length && addLi.classList.add("finish")
						ListInEditor.children[adderElement].after(addLi)
						ListInEditor.children[adderElement + 1].innerHTML = \`
									<div class="innerOfElement" ${
                    theme &&
                    'style="background-color: ${ListOfElements[element].color}; border-radius:8px;"'
                  }>
										<span style="margin-left: 38px; color:${
                      theme ? "black" : "${ListOfElements[element].color}"
                    };" class="elementText" data-id="\${(index + 1 == ListOfElements[element].secondArgument.length ? "AMain" : "CONTI") + index + element}" data-parameter='"\${i.code}"'>
											\${i.text}
										</span>
									</div>\`
							})
						}
				saveData()
				if(${!theme}){
					li.querySelector(".elementText").style.color = ListOfElements[element].color
				}
				li.style.backgroundColor = "transparent"
				addblocks.classList.remove("active")
				body.classList.remove("no-scroll")
			}
	
			function closeAddBlockParams() {
				ListAddBlock.innerHTML = ""
				addblocks.classList.remove("active")
				body.classList.remove("no-scroll")
			}
	
			function deleteElement(event) {
				if (event.target.closest('li').classList.contains("start")) {
					let firstElement = Array.from(ListInEditor.children).findIndex((i) => i == event.target.closest('li'))
					let listDelete = []
					for (let i = firstElement + 1; i < getTheListOfChangeElem(firstElement, 0) + 1; i++) {
						listDelete.push(ListInEditor.children[i])
					}
					listDelete.forEach((i) => i.remove())
				}
				event.target.closest('li').remove()
				saveData()
			}

			function copyElement(event) {
				let element = event.target.closest('li')
				copyList = []
				if (element.classList.contains("start")) {
					let firstElement = Array.from(ListInEditor.children).findIndex((i) => i == element)
					for (let i = firstElement + 1; i < getTheListOfChangeElem(firstElement, 0) + 1; i++) {
						copyList.push(ListInEditor.children[i].cloneNode(true))
					}
				}
				copyList.unshift(element.cloneNode(true))
			}
	
			function pasteElement(event) {
				if (copyList.length > 0) {
					copyList.forEach((i, index) => {
						const cloneOfElement = i.cloneNode(true)
						const textOfNewElement = cloneOfElement.querySelector('.elementText')
	
						if (index === 0) {
							cloneOfElement.style.backgroundColor = ListOfElements[textOfNewElement.dataset.id].color
							textOfNewElement.style.color = "black"
							setTimeout(() => {
								textOfNewElement.style.color = ListOfElements[textOfNewElement.dataset.id].color
								cloneOfElement.style.backgroundColor = "transparent"
							}, 0)
						}

						if(cloneOfElement.querySelector(".active")){
							cloneOfElement.querySelectorAll(".active").forEach((i)=>i.classList.remove("active"))
						}

						event.target.closest('li').before(cloneOfElement)

						if (tapElements.includes(String(textOfNewElement.dataset.id))) {
							let parameter = textOfNewElement.dataset.parameter
							let newParameter = JSON.parse(parameter)
							newParameter[1] = ["A" + Date.now() + Math.random().toString(32).slice(4)]
							textOfNewElement.dataset.parameter = JSON.stringify(newParameter)
						}
					})
					saveData()
				}
			}
	
			function showBtnElement(event) {
				let element = event.target.closest('li')
				if (element) {
					element.querySelector(".btn-in-element").classList.toggle("active")
					element.querySelector(".my-handle-inner").classList.toggle("active")
				}
			}
	
			function saveData(createCode="") {
				let a = []
				a.push({
					data: [...listOfData],
					functions: [...listOfFunct],
					name: "${name}"
				})
				let attachment = 0
				Array.from(ListInEditor.children).forEach((i, index) => {
					if (i.classList.contains("finish")) {
						attachment--
					}
					a.push({
						text: i.querySelector(".elementText").innerText,
						id: i.querySelector(".elementText").dataset.id,
						parameter: JSON.parse(i.querySelector(".elementText").dataset.parameter),
						padding: attachment<6?attachment * 20:120
					})
					i.style.paddingLeft = a[index + 1].padding + "px"
					if (i.classList.contains("start")) {
						attachment++
					}
				})
				if (ListInEditor.children[0] > 0 && ListOfElements[ListInEditor.children[0].querySelector(".elementText").dataset.id].isfunction) {
					ListInEditor.children[0].style.marginTop = "0px"
				}
				window.ReactNativeWebView.postMessage(JSON.stringify(a)+createCode)
			}
	

			function codeCreator() {
				saveData("createCode")
			}
	
			function getTheListOfChangeElem(index, attachment) {
				if (ListInEditor.children[index].classList.contains("finish")) {
					attachment--
					if (attachment == 0) {
						return index
					}
				}
				if (ListInEditor.children[index].classList.contains("start")) {
					attachment++
				}
				index++
				return getTheListOfChangeElem(index, attachment)
			}
			
			let listOfchangeElemnents = []
			let sortable = Sortable.create(ListInEditor, {
				handle: '.my-handle-inner',
				animation: 150,
				filter: '.filtered',
				fallbackTolerance: 5,
				touchStartThreshold: 4,
				onStart: (evt) => {
					if (evt.item.classList.contains("start")) {
						listOfchangeElemnents = []
						for (let i = evt.oldIndex + 1; i < getTheListOfChangeElem(evt.oldIndex, 0) + 1; i++) {
							listOfchangeElemnents.push(ListInEditor.children[i])
							ListInEditor.children[i].style.display = "none"
						}
					}
				},
				onEnd: (evt) => {
					if (evt.newIndex == 0 && ListInEditor.children[1]) {
						ListOfElements[ListInEditor.children[1].querySelector(".elementText").dataset.id].isfunction? ListInEditor.children[1].style.marginTop = "15px" : ""
					}
					if (evt.item.classList.contains("start")) {
						if (ListOfElements[evt.item.querySelector(".elementText").dataset.id].isfunction) {
							evt.item.style.marginTop = "15px"
						}
						listOfchangeElemnents.reverse()
						listOfchangeElemnents.forEach((i) => {
							evt.item.after(i)
							i.style.display = "flex"
						})
						listOfchangeElemnents = []
					}
				},
				store: {
					get: function (sortable) {
						let result = ${data}
						if (!result) return
						if (result[0]) {
							listOfData = [...result[0].data]
							listOfFunct = [...result[0].functions]
						}
						result.shift()
						result.forEach((i, index) => {
							if (i.id.startsWith('AMain') || i.id.startsWith('CONTI')) {
								ListInEditor.innerHTML += \`
									<li class="ElementsInEditor \${i.id.startsWith('AMain') ? 'finish' : ''}" style="padding-left: \${i.padding}px;">
										<div class="innerOfElement" ${
                      theme &&
                      'style="background-color: ${ListOfElements[i.id.slice(6)].color}; border-radius:8px;"'
                    }>
											<span style="margin-left: 38px; color: ${
                        theme
                          ? "black"
                          : "${ListOfElements[i.id.slice(6)].color}"
                      };" class="elementText" data-id="\${i.id}" data-parameter='"\${i.parameter}"'>
												\${i.text}
											</span>
										</div >
									</li >\`
								return
							}
							ListInEditor.innerHTML += \`
					<li class="ElementsInEditor \${ListOfElements[i.id].secondArgument ? "start" : ""}" style="padding-left: \${i.padding}px; \${
            ListOfElements[i.id].isfunction && index != 0
              ? "margin-top: 15px;"
              : ""
          }">
									<div class="innerOfElement" ${
                    theme &&
                    'style="background-color: ${ListOfElements[i.id].color}; border-radius:8px;"'
                  }>
										<div class="my-handle" onclick="showBtnElement(event);">
											<span></span>
											<div class="my-handle-inner"></div>
										</div>
										<div class="btn-in-element">
											<div class="btn-delete" onclick="deleteElement(event);">
												<svg class="icon-delete-editor">
													<use xlink:href="#icon-delete"></use>
												</svg>
											</div>
											<div class="btn-delete" onclick="copyElement(event);">
												<svg class="icon-delete-editor">
													<use xlink:href="#icon-copy"></use>
												</svg>
											</div>
											<div class="btn-delete" onclick="pasteElement(event);">
												<svg class="icon-delete-editor">
													<use xlink:href="#icon-paste"></use>
												</svg>
											</div>
										</div>
										<span style="color:${
                      theme ? "black" : "${ListOfElements[i.id].color}"
                    };" class="elementText" data-id="\${i.id}" data-parameter='\${JSON.stringify(i.parameter)}'>
										\${i.text}
										</span>
									</div>
									<span class="EditParameterBtn" onclick="changeparams(event);">
										<svg class="icon-delete-editor">
											<use xlink:href="#icon-edit"></use>
										</svg>
							</span>
								</li >\`
						})
					},
	
					set: function (sortable) {
						/* Save Data */
						saveData()
					}
				}
			})
    </script>





    <script>

      /* ============================================ Code for Edit Params */
      const editparams = document.querySelector('#editparams')
      const where = editparams.querySelector('#inner-where')
      const result = editparams.querySelector('#result')
      const dataList = editparams.querySelector('#dataList') //data List In formuls
      const functList = editparams.querySelector('#functList') //function List in formuls


      document.querySelector('#tree').onclick = (event) => {
				if(event.target.classList.contains("mainLi")){
					event.target.classList.toggle("LiAfterTap")
				}
      }

      // Create variable =============================>

      let TextInWhereOnStart = "hi Gafum"
      let listOfChageParams = []

      let List = []
      let listOfParams = []
      let position = 0
      let whichPosition = 0 //which Parameter
      let editingElement = 0 //Element that editing now in html
			let idOfElement = 0 //Id of editing element


      function changeparams(event) {
				whichPosition = 0
				editingElement = event.target.closest(".ElementsInEditor").querySelector('.elementText')
				idOfElement = editingElement.dataset.id
				if(!ListOfElements[idOfElement].standartParameter){
					return
				}
				TextInWhereOnStart = ListOfElements[idOfElement].text
				if(ListOfElements[idOfElement].textInWhere) {
					TextInWhereOnStart = ListOfElements[idOfElement].textInWhere
				}
				listOfChageParams = ListOfElements[idOfElement].listChengers
				List = JSON.parse(editingElement.dataset.parameter)
				if (listOfChageParams.length > List.length) {
					if (!List) {
						List = []
					}
					for (let i = 0; i < listOfChageParams.length - List.length; i++) {
						List.push(ListOfElements[idOfElement].standartParameter[List.length+i])
					}
				}
				where.scrollTo(0,0)
				onStart()
				document.querySelectorAll(".LiAfterTap").forEach((i) => i.classList.remove("LiAfterTap"))
				editparams.querySelector('#where').style.backgroundColor = ListOfElements[idOfElement].color
				if (editparams.querySelector('#eventList')) { editparams.querySelector('#eventList').remove() }
				if (event.target.closest(".ElementsInEditor").style.paddincolisionWithTouchgLeft !== "0px") {
					if (getFirstElement(Array.from(ListInEditor.children).indexOf(event.target.closest(".ElementsInEditor")) - 1)) {
						let li = document.createElement("li")
						li.classList.add("mainLi")
						li.id = "eventList"
						li.innerHTML = \`MouseEvent
						<ul>
							<li onclick="tapOfFunctionBtn(0,'MousePosition','.x');">mouse X</li>
							<li onclick="tapOfFunctionBtn(0, 'MousePosition','.y');">mouse Y</li>
							<li onclick="tapOfFunctionBtn(1, 'colisionWithTouch({ MousePosition, object: ', '})');">
							colisionWithTouch</li>
							<li onclick="tapofbtn('event.type');">TypeOfClick</li>
							<li onclick="tapofbtn('event.target');">Target</li>
							<li onclick="tapofbtn('tappedElement');">tappedElement</li>
						</ul>\`
					editparams.querySelector('#tree').prepend(li)
				}
			}
				editparams.classList.add("active")
				body.classList.add("no-scroll")
      }

      // Different Function ===================>
			function addColor(){
				tapofbtn('"' + editparams.querySelector('#color-picker').value + '"')
			}

			function getFirstElement(index) {
				if(index < 0){
					return false
				}
				if (ListInEditor.children[index].style.paddingLeft == "0px") {
					let element = ListInEditor.children[index].querySelector('.elementText').dataset.id
					return tapElements.includes(String(element)) ? true : false
				} else {
					return getFirstElement(index - 1)
				}
			}

      function closeEditParams() {
				editparams.classList.remove("active")
				body.classList.remove("no-scroll")
      }

      function createVarieble(isData) {
				event.stopPropagation()
				let resultat = prompt(isData ? '⠀⠀Create Data' : '⠀⠀Create Function')
				if (!resultat) return
				resultat = resultat.replace(/\\s/g, '')
				if (!resultat) return
				if (listOfData.includes(resultat)) return
				(isData ? listOfData : listOfFunct).push(String(resultat).slice(0, 9))
				chengeDataList(isData)
      }

      function daleteVarOrFunc(isData, element) {
				if (!confirm(\`Delete \${element}\`)) return
				let listh = isData ? listOfData : listOfFunct
				listh.splice(listh.indexOf(element), 1)
				chengeDataList(isData)
				saveData()
      }

      function chengeDataList(isData) {
				let resultat = (isData ? listOfData : listOfFunct).reduce((a, b) => {
					return a + \`<li>
						<span class="nameOfvarieble" onclick="tapofbtn('\${b}'); event.stopPropagation();">\${b}</span>
						<span class="btn-delete" onclick="daleteVarOrFunc(\${isData}, '\${b}'); event.stopPropagation();">
								<svg class="icon-delete-editor">
									<use xlink:href="#icon-delete"></use>
								</svg>
						</span>
						</li>\`
				}, '')
				if (isData) {
					resultat += '<li style="color: #777; display: block;" onclick="createVarieble(true)">+Create</li>'
					dataList.innerHTML = resultat
				} else {
					resultat += '<li style="color: #777; display: block;" onclick="createVarieble(false)">+Create</li>'
					functList.innerHTML = resultat
				}
      }

      function setTextInWhere() {
				let resultat = TextInWhereOnStart
				let realChenge = []
				for (let i = 0; i < listOfChageParams.length; i++) {
					resultat = resultat.replace(listOfChageParams[i], \`<button class='whereBtn' onClick = "newParameter(\${i});" \${i==whichPosition&&'style="background-color: #c5c5c580;"'} > </button >\`)
					if (List[i].length > 0) {
						realChenge.push(List[i].reduce((a, b) => a + b))
					} else {
						realChenge.push(' ')
					}
				}
				where.innerHTML = resultat
				let whereBtns = document.querySelectorAll('.whereBtn')
				whereBtns.forEach((i, index) => i.textContent = realChenge[index])
      }

      function changeText() {
				let textFromList = ""
				if (listOfParams.length > 0) {
					let textFromList = listOfParams.reduce((a, b, i) => {
						let c = ""
						if (i == 0 && position == 0) {
							return c = "|" + String(b)
						}
						c = String(a) + String(b)
						if (i + 1 == position) {
							c += "|"
						}
						return c
					}, '')
					result.textContent = textFromList
				} else {
					result.textContent = '|'
				}

				List[whichPosition] = listOfParams
				setTextInWhere()
				return textFromList
			}

			function newParameter(parameter) {
				if (parameter !== whichPosition) {
					whichPosition = parameter
					onStart()
				}
      }

      function addTextOrCode(isText) {
			let defaultParameter = ''
			if (position < listOfParams.length) {
				if (isText && listOfParams[position].startsWith('"')) {
					defaultParameter = listOfParams[position].slice(1, -1)
				} else
					if (!isText && listOfParams[position].startsWith(" ")) {
						defaultParameter = listOfParams[position].substring(1)
					}
			}
			let userAnswer = prompt(isText ? '⠀⠀Enter Text' : '⠀⠀Write Code', defaultParameter)
			if (userAnswer) {
				let numberOfDelate = 0
				if (defaultParameter.length > 0) {
					numberOfDelate = 1
				}
				listOfParams.splice(position, numberOfDelate, isText ? '"' + userAnswer + '"' : " " + userAnswer)
				position++
			}
			userAnswer = ''
      }

      function tapOfFunctionBtn() {
			event.stopPropagation()
			for (let index = 1; index < arguments.length; index++) {
				listOfParams.splice(position, 0, arguments[index])
				position++
			}
			position -= arguments[0]
			changeText()
      }

      function tapofbtn(text) {
			event.stopPropagation()
			switch (text) {
				case "@0left**":
					if (position > 0) {
						position--
					} else {
						position = 0
					}
					break
				case "@0right**":
					if (position < listOfParams.length) {
						position++
					} else {
						position = listOfParams.length
					}
					break
				case "@0Text**":
					addTextOrCode(true)
					break
				case "@0Code**":
					addTextOrCode(false)
					break
				case "@0delete**":
					if (listOfParams.length > 0) {
						if (position > 0) {
							listOfParams.splice(position - 1, 1)
							position--
						}
					} else {
						listOfParams = []
						position = 0
					}
					break
				case "@0Ok**":
					let textInEditor = ListOfElements[idOfElement].text
					let maxTextWidth = Math.floor((window.screen.availWidth - ListOfElements[idOfElement].text.length * 10) / 17)
					if(!maxTextWidth|| maxTextWidth<2){
						maxTextWidth = 2
					}
					for (let i = 0; i < listOfChageParams.length; i++) {
						if (List[i].length <= 0) {
							List[i] = ListOfElements[idOfElement].standartParameter[i]
						}
						let realChenge = List[i].reduce((a, b) => a + b).slice(0, maxTextWidth)
						textInEditor = textInEditor.replace(listOfChageParams[i], realChenge)
					}
					editingElement.dataset.parameter = JSON.stringify(List)
					editingElement.textContent = textInEditor
					saveData()
					closeEditParams()
					break
				default:
					listOfParams.splice(position, 0, text)
					position++
					break
			}
			changeText()
      }

      function onStart() {
				listOfParams = List[whichPosition]
				position = listOfParams.length
				chengeDataList(true)
				chengeDataList(false)
				changeText()
      }
    </script>
  </body>
</html>`
}
