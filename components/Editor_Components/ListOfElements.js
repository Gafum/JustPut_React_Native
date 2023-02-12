const objectColor = "#913e5f"
const controlColor = "#f59073"
const propertiesColor = "#96b38e"
const dataColor = "#eb4464"

export const tapElements = ["13", "15", "24", "25"]

export const ListOfElements = [
  {
    id: 0, // OBJECT
    code: 'addElementByHtml(`<p style="position: absolute; left: ${myX}px; top: ${myY}px">${"Text"}</p>`, myId);',
    text: 'Create "Text" by HTML',
    color: objectColor,
    listChengers: ['"Text"', "myId", "myX", "myY"],
    standartParameter: [['"Text"'], ['"textId"'], ["2", "0"], ["5", "0"]],
    textInWhere: 'Create "Text" by HTML(myId), absolute position x: myX y: myY'
  },
  {
    id: 1, // CONTROL
    code: "function name(params){",
    text: "Function name(params)",
    color: controlColor,
    listChengers: ["name", "params"],
    standartParameter: [["name"], ["params"]],
    secondArgument: [{ code: "};", text: "End" }],
    isfunction: true
  },
  {
    id: 2, // PROPERTIES
    code: "//Coment",
    text: "Coment",
    color: propertiesColor,
    listChengers: ["Coment"],
    standartParameter: [["Coment"]]
  },
  {
    id: 3, // DATA
    code: "//a = 2;",
    text: "Set //a to 2 ",
    color: dataColor,
    listChengers: [["//a"], ["2"]],
    standartParameter: [[" //a"], ["2"]]
  },
  {
    id: 4, // CONTROL
    code: "//code",
    text: "//code",
    color: controlColor,
    listChengers: ["//code"],
    standartParameter: [[" //code"]]
  },
  {
    id: 5, // CONTROL
    code: "//name('a')",
    text: "Call //name('a')",
    color: controlColor,
    listChengers: ["//name", "'a'"],
    standartParameter: [["//name"], ['"a"']]
  },
  {
    id: 6, // CONTROL
    code: "if(condition){",
    text: "If condition",
    color: controlColor,
    listChengers: ["condition"],
    standartParameter: [[1, ">", 0]],
    secondArgument: [{ code: "};", text: "End" }]
  },
  {
    id: 7, // CONTROL
    code: "if(condition){",
    text: "If condition (else)",
    color: controlColor,
    listChengers: ["condition"],
    standartParameter: [[1, ">", 0]],
    secondArgument: [
      { code: "}else{", text: "Else" },
      { code: "};", text: "End" }
    ]
  },
  {
    id: 8, // OBJECT
    code: `document.querySelector("#modal-window").showModal();
document.querySelector("#inner-modal-window").innerHTML = Text;`,
    text: "messege(Text)",
    color: objectColor,
    listChengers: ["Text"],
    standartParameter: [['"Text"']]
  },
  {
    id: 9, // OBJECT
    code: 'myName = new rect({ x: myX, y: myY, width: myW, height: myH, direction: myDir, color: myColor, radius: myR, texture: myIMG, shape: "cub" });',
    text: "Create Square myName",
    color: objectColor,
    listChengers: [
      "myName",
      "myX",
      "myY",
      "myW",
      "myH",
      "myDir",
      "myColor",
      "myR",
      "myIMG"
    ],
    standartParameter: [
      ["myName"],
      ["1", "0", "0"],
      ["5", "0", "0"],
      ["2", "0", "0"],
      ["7", "0"],
      ["degToRadian(", "0", ")"],
      ['"#000"'],
      ["0"],
      ["undefined"]
    ],
    textInWhere:
      "myName: x: myX, y: myY, width: myW, height: myH, direction: myDir, color: myColor, radius: myR, texture: myIMG"
  },
  {
    id: 10, // OBJECT
    code: 'myName = new rect({ x: myX, y: myY, radius: myR, startAngle:myS, endAngle: myE, counterclockwise: myCl, color: myColor, shape: "circle", width: myR*2, height: myR*2 });',
    text: "Create Circle myName",
    color: objectColor,
    listChengers: [
      "myName",
      "myX",
      "myY",
      "myR",
      "myS",
      "myE",
      "myCl",
      "myColor"
    ],
    standartParameter: [
      ["myName"],
      ["1", "0", "0"],
      ["7", "0"],
      ["8", "0"],
      ["0"],
      ["degToRadian(", "3", "6", "0", ")"],
      ["false"],
      ['"#000"']
    ],
    textInWhere:
      "myName: x: myX, y: myY, radius: myR, startAngle(rad): myS, endAngle(rad): myE, counterclockwise: myCl, color: myColor"
  },
  {
    id: 11, // CONTROL
    code: `let toClean = true;
draw();
function draw() {
if (toClean){ctx.clearRect(0, 0, canva.width, canva.height)};`,
    text: "Drawing cycle",
    color: controlColor,
    listChengers: ["true"],
    standartParameter: [["true"]],
    secondArgument: [
      { code: "requestAnimationFrame(draw)};", text: "End Drawing" }
    ],
    textInWhere: "Drawing cycle(Clean? true)",
    isfunction: true
  },
  {
    id: 12, // OBJECT
    code: `(Array.isArray(//Object) ? //Object : [//Object]).forEach((iser) => iser.draw(true));`,
    text: "Draw //Object Fill: true",
    color: objectColor,
    listChengers: ["//Object", "true"],
    standartParameter: [["//Object"], ["true"]]
  },
  {
    id: 13, // CONTROL Click
    code: `function myName(event){
let tappedElement = //Object;
let MousePosition = getpositionOfMouse(event);`,
    text: "Tap the canvas",
    color: controlColor,
    listChengers: ["//Object", "myName"],
    standartParameter: [["undefined"], []],
    secondArgument: [{ code: "};", text: "End of Tap" }],
    isfunction: true,
    textInWhere:
      "Tap <span style='font-size:10px;'>(only the canvas)</span> tappedElement://Object <span style='font-size:10px;'>(not necessarily)</span>"
  },
  {
    id: 14, // OBJECT
    code: `ctx.fillStyle = myColor;
ctx.font = mySt;
ctx.fillText(text, myX, myY);`,
    text: "Draw Text: text",
    color: objectColor,
    listChengers: ["text", "myX", "myY", "mySt", "myColor"],
    standartParameter: [
      ['"Hi gafum"'],
      ["2", "0", "0"],
      ["8", "0"],
      ['"48px serif"'],
      ['"#000"']
    ],
    textInWhere: "text: x: myX, y: myY, fontStyle: mySt, color: myColor"
  },
  {
    id: 15, // CONTROL
    code: `function myName(event) {
let MousePosition = getpositionOfMouse(event);
(Array.isArray(//Object) ? //Object : [//Object]).forEach((iser) => {
	if (colisionWithTouch({ object: iser, MousePosition })) {
		let tappedElement = iser;`,
    text: "//Object.onClick",
    color: controlColor,
    listChengers: ["//Object", "myName"],
    standartParameter: [["myName"], []],
    secondArgument: [{ code: "}})};", text: "End of Click" }],
    isfunction: true
  },
  {
    id: 16, // PROPERTIES
    code: "//Object.x = 100;",
    text: "Set //Object X to 100",
    color: propertiesColor,
    listChengers: ["//Object", "100"],
    standartParameter: [[" //myName"], ["1", "0", "0"]]
  },
  {
    id: 17, // PROPERTIES
    code: "//Object.y = 101;",
    text: "Set //Object Y to 101",
    color: propertiesColor,
    listChengers: ["//Object", "101"],
    standartParameter: [[" //myName"], ["1", "0", "1"]]
  },
  {
    id: 18, // PROPERTIES
    code: "//Object.width = 50;",
    text: "Set //Object Width to 50",
    color: propertiesColor,
    listChengers: ["//Object", "50"],
    standartParameter: [[" //myName"], ["5", "0"]]
  },
  {
    id: 19, // PROPERTIES
    code: "//Object.height = 60;",
    text: "Set //Object Height to 60",
    color: propertiesColor,
    listChengers: ["//Object", "60"],
    standartParameter: [[" //myName"], ["6", "0"]]
  },
  {
    id: 20, // PROPERTIES
    code: "//Object.radius = 30;",
    text: "Set //Object Radius to  30",
    color: propertiesColor,
    listChengers: ["//Object", "30"],
    standartParameter: [["//myName"], ["3", "0"]]
  },
  {
    id: 21, // PROPERTIES
    code: "//Object.color = myColor;",
    text: "Set //Object Color to myColor",
    color: propertiesColor,
    listChengers: ["//Object", "myColor"],
    standartParameter: [[" //myName"], ['"#000"']]
  },
  {
    id: 22, // PROPERTIES
    code: `myName = ctx.createLinearGradient(myX, myY, myfX, myfY)
CreateFradionAddPoints(myName, myColor, points);`,
    text: "createLinearGradient myName",
    color: propertiesColor,
    listChengers: ["myName", "myX", "myY", "myfX", "myfY", "myColor", "points"],
    standartParameter: [
      ["myName"],
      ["0"],
      ["0"],
      ["4", "0", "0"],
      ["0"],
      ["[", '"#fff"', ",", '"red"', "]"],
      ["[", "0", ",", "1", "]"]
    ],
    textInWhere:
      'myName:<span style="font-size:10px;">(position is absolute)</span> Start X<span style="font-size:10px;">(coordinate of the start point)</span>: myX, Start Y: myY, Finish X<span style="font-size:10px;">(coordinate of the end point)</span>: myfX, Finish Y: myfY, List of Color: myColor, List of Points: points'
  },
  {
    id: 23, // PROPERTIES
    code: `myName = ctx.createRadialGradient(myX, myY, myR1, myfX, myfY, myR2)
CreateFradionAddPoints(myName, myColor, points);`,
    text: "createRadialGradient myName",
    color: propertiesColor,
    listChengers: [
      "myName",
      "myX",
      "myY",
      "myR1",
      "myfX",
      "myfY",
      "myR2",
      "myColor",
      "points"
    ],
    standartParameter: [
      ["myName"],
      ["5", "0"],
      ["5", "0"],
      ["4"],
      ["8", "0"],
      ["6", "0"],
      ["8", "0"],
      ["[", '"#fff"', ",", '"red"', "]"],
      ["[", "0", ",", "1", "]"]
    ],
    textInWhere:
      'myName:<span style="font-size:10px;">(position is absolute)</span> First circle X<span style="font-size:10px;">(coordinate of the start point)</span>: myX, First circle Y: myY, First circle radius: myR1,  Second circle X<span style="font-size:10px;">(coordinate of the end point)</span>: myfX, Second circle Y: myfY, Second circle radius: myR2, List of Color: myColor, List of Points: points'
  },
  {
    id: 24, // CONTROL Click
    code: `function myName(event){
let tappedElement = //Object;
let MousePosition = getpositionOfMouse(event);`,
    text: "MouseMove",
    color: controlColor,
    listChengers: ["//Object", "myName"],
    standartParameter: [["undefined"], []],
    secondArgument: [{ code: "};", text: "End of MouseMove" }],
    isfunction: true,
    textInWhere:
      "MouseMove, tappedElement://Object<span style='font-size:10px;'>(not necessarily)</span>"
  },
  {
    id: 25, // CONTROL Click
    code: `function myName(event){
let tappedElement = //Object;
let MousePosition = getpositionOfMouse(event);`,
    text: "End Of The Touching",
    color: controlColor,
    listChengers: ["//Object", "myName"],
    standartParameter: [["undefined"], []],
    secondArgument: [{ code: "};", text: "End of Tap" }],
    isfunction: true,
    textInWhere:
      "End Of The Touch / Mouse up tappedElement://Object <span style='font-size:10px;'>(not necessarily)</span>"
  },
  {
    id: 26, // CONTROL
    code: "delay(some).then(() =>{",
    text: "Delay some ms",
    color: controlColor,
    listChengers: ["some"],
    standartParameter: [["1", "0", "0", "0"]],
    secondArgument: [{ code: "});", text: "End of delay" }],
    textInWhere: "Delay some ms <span style='font-size:10px;'>(1s/1000)</span>"
  },
  {
    id: 27, // CONTROL
    code: `myInterval = setInterval(myIntervalTimeMs, some)
function myIntervalTimeMs(){`,
    text: "Repeate every some ms",
    color: controlColor,
    listChengers: ["some", "myInterval"],
    standartParameter: [["1", "0", "0", "0"], ["myInterval"]],
    secondArgument: [{ code: "};", text: "End of repeats" }],
    isfunction: true,
    textInWhere:
      "Repeate every some ms <span style='font-size:10px;'>(1s/1000)</span> Name: myInterval <span style='font-size:8px;'>You will be able to stop it in the future</span>"
  },
  {
    id: 28, // CONTROL
    code: "clearInterval(myInterval)",
    text: "stop repeats of the myInterval",
    color: controlColor,
    listChengers: ["myInterval"],
    standartParameter: [[" myInterval"]]
  },
  {
    id: 29, // Objects
    code: `myName = {}
myName.a = new Image()
try {
	myName.a.onload = function () {
		myName.swidth = this.width
		myName.sheight = this.height
	}
	myName.a.src = mySourse
	myName.sx = 0
	myName.sy = 0
	myName.standartDirection = myDir
} catch (e) {
	alert('Image not found 0(')
};`,
    text: "Create Texture myName",
    color: objectColor,
    listChengers: ["myName", "mySourse", "myDir"],
    standartParameter: [
      ["//myName"],
      [
        '"https://yt3.ggpht.com/ytc/AMLnZu9y3rmdvECWk3AWSxCiZmDDROoqSXEvFkozxBi0=s900-c-k-c0x00ffffff-no-rj"'
      ],
      ["0"]
    ],
    textInWhere:
      "Create Texture myName, Sourse: mySourse, standartDirection: myDir"
  },
  {
    id: 30, // PROPERTIES
    code: `texture.sx = myStartX
texture.sy = myStartY
texture.swidth = myWidth
texture.sheight = myHeight;`,
    text: "Clip texture",
    color: propertiesColor,
    listChengers: ["texture", "myStartX", "myStartY", "myWidth", "myHeight"],
    standartParameter: [["texture"], ["0"], ["0"], ["5", "0"], ["5", "0"]],
    textInWhere:
      "Clip texture: StartX: myStartX, StartY: myStartY, Width of the Clip: myWidth, Height of the Clip: myHeight"
  },
  {
    id: 31, // DATA
    code: "//a += 1;",
    text: "//a add 1 ",
    color: dataColor,
    listChengers: [["//a"], ["1"]],
    standartParameter: [[" //a"], ["1"]]
  },
  {
    id: 32, // DATA
    code: "//a *= 2;",
    text: "//a multiply by 2 ",
    color: dataColor,
    listChengers: [["//a"], ["2"]],
    standartParameter: [[" //a"], ["2"]]
  },
  {
    id: 33, // DATA
    code: "//a /= 2;",
    text: "//a divide by 2 ",
    color: dataColor,
    listChengers: [["//a"], ["2"]],
    standartParameter: [[" //a"], ["2"]]
  },
  /* Array Method */
  {
    id: 34, // DATA
    code: "for (var index = 0; index < 10; index++) {",
    text: "Repeat 10 times",
    color: dataColor,
    listChengers: ["10", "index"],
    standartParameter: [["1", "0"], ["index"]],
    secondArgument: [{ code: "};", text: "End of the repeats" }],
    textInWhere: "Repeat 10 times Number of current value: index"
  },
  {
    id: 35, // DATA
    code: "array.push(newElement);",
    text: "In array add newElement",
    color: dataColor,
    listChengers: ["array", "newElement"],
    standartParameter: [["array"], ['"newElement"']]
  },
  {
    id: 36, // DATA
    code: "array.pop();",
    text: "Delete last element in array",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 37, // DATA
    code: "array.unshift(element);",
    text: "New first element in array",
    color: dataColor,
    listChengers: ["element", "array"],
    standartParameter: [['"element"'], ["array"]]
  },
  {
    id: 38, // DATA
    code: "array.shift();",
    text: "Delete first element in array",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 39, // DATA
    code: "array.forEach((element, index)=>{",
    text: "array.forEach(element, index)",
    color: dataColor,
    listChengers: ["array", "element", "index"],
    standartParameter: [["array"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the forEach" }]
  },
  {
    id: 40, // DATA
    code: "array1 = array2.map((element, index)=>{",
    text: "In array1 map array2",
    color: dataColor,
    listChengers: ["array1", "array2", "element", "index"],
    standartParameter: [["array1"], ["array2"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the map" }],
    textInWhere:
      "New array: array1, array2.map(element, index) <span style='font-size:14px;'>use with return</span>"
  },
  {
    id: 41, // DATA
    code: "array1 = array2.filter((element, index)=>{",
    text: "In array1 filter array2",
    color: dataColor,
    listChengers: ["array1", "array2", "element", "index"],
    standartParameter: [["array1"], ["array2"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the filter" }],
    textInWhere:
      "New array: array1, array2.reduce(element, index) <span style='font-size:14px;'>use with return</span>"
  },
  {
    id: 42, // DATA
    code: "array1 = array2.reduce((previousResult, currentValue, index)=>{",
    text: "In array1 reduce array2",
    color: dataColor,
    listChengers: [
      "array1",
      "array2",
      "previousResult",
      "currentValue",
      "index"
    ],
    standartParameter: [
      ["array1"],
      ["array2"],
      ["previousResult"],
      ["currentValue"],
      ["index"]
    ],
    secondArgument: [{ code: "});", text: "End of the reduce" }],
    textInWhere:
      "New array: array1, array2.reduce(previousResult , currentValue, index) <span style='font-size:14px;'>use with return</span>"
  },
  {
    id: 43, // DATA
    code: "array.splice(5, some);",
    text: "delete some elements",
    color: dataColor,
    listChengers: ["5", "array", "some"],
    standartParameter: [["5"], ["array"], ["1"]],
    textInWhere: "In position 5 in array delete some elements"
  },
  {
    id: 44, // DATA
    code: "array.splice(5, 0, newElements);",
    text: "Add some elements in array",
    color: dataColor,
    listChengers: ["5", "array", "newElements"],
    standartParameter: [["5"], ["array"], ["1", ",", "2"]],
    textInWhere: "In position 5 in array add newElements"
  },
  {
    id: 45, // DATA
    code: "array1 = array2.find((element, index)=>{",
    text: "array.find(element, index)",
    color: dataColor,
    listChengers: ["array1", "array2", "element", "index"],
    standartParameter: [["array1"], ["array2"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the find" }],
    textInWhere:
      "Variable: array1, array2.find(element, index) <span style='font-size:14px;'>use with return</span>"
  },
  {
    id: 46, // DATA
    code: "array1 = array2.findIndex((element, index)=>{",
    text: "array.findIndex(element, index)",
    color: dataColor,
    listChengers: ["array1", "array2", "element", "index"],
    standartParameter: [["array1"], ["array2"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the find" }],
    textInWhere:
      "Variable: array1, array2.findIndex(element, index) <span style='font-size:14px;'>use with return</span>"
  },
  {
    id: 47, // DATA
    code: "array.sort((a, b)=>+(a-b));",
    text: "array.sort(+)",
    color: dataColor,
    listChengers: ["array", "+"],
    standartParameter: [["array"], ["+"]]
  },
  {
    id: 48, // DATA
    code: "array.reverse();",
    text: "array.reverse",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 49, // DATA
    code: "shuffle(array);",
    text: "array.shuffle",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 50, // DATA
    code: "array1 = array1.concat(array2);",
    text: "array1 connect with array2",
    color: dataColor,
    listChengers: ["array1", "array2"],
    standartParameter: [["array1"], ["[", "1", ",", "2", "]"]]
  },
  {
    id: 51, // CONTROL
    code: "return{",
    text: "return",
    color: controlColor,
    standartParameter: ["Hi GAfum"],
    secondArgument: [{ code: "};", text: "End of the return" }]
  },
  {
    id: 52, // CONTROL
    code: "continue;",
    text: "continue",
    color: controlColor,
    standartParameter: ["Hi GAfum"]
  },

  /* PROPERTIES */
  {
    id: 53, // PROPERTIES
    code: "//Object.direction = myDirection;",
    text: "Set //Object Direction to myDirection",
    color: propertiesColor,
    listChengers: ["//Object", "myDirection"],
    standartParameter: [[" //myName"], ["degToRadian(", "5", "0", ")"]]
  },
  {
    id: 54, // PROPERTIES
    code: "//Object.go(HowSteps)",
    text: "Move //Object HowSteps steps",
    color: propertiesColor,
    listChengers: ["//Object", "HowSteps"],
    standartParameter: [[" //myName"], ["1", "0"]]
  },
  {
    id: 55, // PROPERTIES
    code: "ctx.scale(X, Y);",
    text: "scale scene X, Y",
    color: propertiesColor,
    listChengers: ["X", "Y"],
    standartParameter: [["2"], ["1"]]
  },
  {
    id: 56, // PROPERTIES
    code: "ctx.transform(HSc, VSk, HSk, VSc, X, Y);",
    text: "transform scene X, Y",
    color: propertiesColor,
    listChengers: ["HSc", "VSk", "HSk", "VSc", "X", "Y"],
    standartParameter: [["1"], ["0.2"], ["0.8"], ["1"], ["0"], ["0"]],
    textInWhere:
      "transform <span style='font-size:14px;'>Horizontal scaling:</span>HSc, <span style='font-size:14px;'>Vertical skewing:</span>VSk, <span style='font-size:14px;'>Horizontal skewing: </span>HSk, <span style='font-size:14px;'>Vertical scaling:</span>VSc, x: X, y: Y"
  },
  {
    id: 57, // PROPERTIES
    code: "ctx.rotate(angle);",
    text: "rotate scene angle",
    color: propertiesColor,
    listChengers: ["angle"],
    standartParameter: [["degToRadian(", "2", "0", ")"]]
  },
  {
    id: 58, // PROPERTIES
    code: "//Object.x += 10;",
    text: "Add to //Object X 10",
    color: propertiesColor,
    listChengers: ["//Object", "10"],
    standartParameter: [[" //myName"], ["1", "0"]]
  },
  {
    id: 59, // PROPERTIES
    code: "//Object.y += 10;",
    text: "Add to //Object Y 10",
    color: propertiesColor,
    listChengers: ["//Object", "10"],
    standartParameter: [[" //myName"], ["1", "1"]]
  },
  {
    id: 60, // PROPERTIES
    code: "//Object.width += 20;",
    text: "Add to //Object Width  20",
    color: propertiesColor,
    listChengers: ["//Object", "20"],
    standartParameter: [[" //myName"], ["2", "0"]]
  },
  {
    id: 61, // PROPERTIES
    code: "//Object.height += 20;",
    text: "Add to //Object Height 20",
    color: propertiesColor,
    listChengers: ["//Object", "20"],
    standartParameter: [[" //myName"], ["2", "0"]]
  },
  {
    id: 62, // PROPERTIES
    code: "//Object.direction += 20;",
    text: "Add to //Object Direction 20",
    color: propertiesColor,
    listChengers: ["//Object", "20"],
    standartParameter: [[" //myName"], ["2", "0"]]
  },
  {
    id: 63, // PROPERTIES
    code: `SmothMove({movedObject: object, X: Math.floor(newX), Y: Math.floor(newY), MyTime: speed});`,
    text: "object smoothMove to newX, newY",
    color: propertiesColor,
    listChengers: ["object", "newX", "newY", "speed", "cycleSpeed"],
    standartParameter: [
      ["myName"],
      ["1", "0", "0"],
      ["2", "5", "0"],
      ["3", "0", "0", "0"],
      ["1", "0", "0"]
    ],
    textInWhere: "object move smoothly to x: newX, y: newY in speed ms"
  },
  {
    id: 64, // PROPERTIES
    code: "canva.style.backgroundColor = myColor",
    text: "Background-color: myColor",
    color: propertiesColor,
    listChengers: ["myColor"],
    standartParameter: [['"#30c731"']]
  },
  {
    id: 65, // DATA
    code: `try{
	localStorage.setItem('@variable', variable)
}catch{
	try{
		StoredData['variable'] = variable
		window.ReactNativeWebView.postMessage(JSON.stringify(StoredData))
	}catch(e){
		alert(e)
	};
};`,
    text: "Save variable",
    color: dataColor,
    listChengers: ["variable"],
    standartParameter: [[" myName"]],
    textInWhere: "Save variable *works only in browser"
  },
  {
    id: 66, // DATA
    code: `try{
	variable = localStorage.getItem('@variable')
}catch{
	try{
		variable = StoredData['variable']
	}catch(e){
		alert(e)
	}
};`,
    text: "Read variable",
    color: dataColor,
    listChengers: ["variable"],
    standartParameter: [[" myName"]],
    textInWhere: "Read variable *works only in browser"
  },
  {
    id: 67, // DATA
    code: `try{
	localStorage.removeItem('@Variable')
}catch{
	try{
		if(StoredData['Variable']){
			delete StoredData['Variable']
			window.ReactNativeWebView.postMessage(JSON.stringify(StoredData))
		}
	}catch(e){
		alert(e)
	};
};`,
    text: "Variable delete from Storege",
    color: dataColor,
    listChengers: ["Variable"],
    standartParameter: [[" myName"]],
    textInWhere: "Variable delete from Storege *works only in browser"
  },

  /* Internet===================================== */

  {
    id: 68, // DATA
    code: `try{
fetch(url)
	.then((response) => {
		if (response.ok) {
			return response.text();
		}
		return "Error"
	})
	.then((data) => {
		variable = data;
	})
	.catch((e) => {
		variable = e;
		console.log(e);
	});
}catch(e){
	myName = "Error:" + e;
};`,
    text: "GET in variable url",
    color: dataColor,
    listChengers: ["variable", "url"],
    standartParameter: [
      [" //myName"],
      ['"https://jsonplaceholder.typicode.com/users?id=1"']
    ]
  },
  {
    id: 69, // DATA
    code: `try {
fetch(url, {
	method: 'POST',
	body: JSON.stringify(myBODY),
	headers: {
		myHEADERS
	}
})
	.then((response) => {
		if (response.ok) {
			return response.text();
		}
		return "Error"
	})
	.then((data) => {
		variable = data;
	})
	.catch((e) => {
		variable = e;
		console.log(e);
	});
}catch(e){
	variable = "Error:" + e;
};`,
    text: "POST in variable url",
    color: dataColor,
    listChengers: ["variable", "url", "myBODY", "myHEADERS"],
    standartParameter: [
      [" //myName"],
      ['"https://jsonplaceholder.typicode.com/posts"'],
      [' { title: "foo", body: "bar", userId: 1 }'],
      ['"Content-type": "application/json; charset=UTF-8"']
    ],
    textInWhere: "POST in variable url body: myBODY, headers: myHEADERS"
  },
  {
    id: 70, // DATA
    code: `try {
fetch(url, {
	method: 'PUT',
	body: JSON.stringify(myBODY),
	headers: {
		myHEADERS
	}
})
	.then((response) => {
		if (response.ok) {
			return response.text();
		}
		return "Error"
	})
	.then((data) => {
		variable = data;
	})
	.catch((e) => {
		variable = e;
		console.log(e);
	});
}catch(e){
	variable = "Error:" + e;
};`,
    text: "PUT in variable url",
    color: dataColor,
    listChengers: ["variable", "url", "myBODY", "myHEADERS"],
    standartParameter: [
      [" //myName"],
      ['"https://jsonplaceholder.typicode.com/posts/1"'],
      [' { id: 1, title: "foo", body: "bar", userId: 1 }'],
      ['"Content-type": "application/json; charset=UTF-8"']
    ],
    textInWhere: "PUT in variable url body: myBODY, headers: myHEADERS"
  },
  {
    id: 71, // DATA
    code: `try {
fetch(url, {
	method: 'PATCH',
	body: JSON.stringify(myBODY),
	headers: {
		myHEADERS
	}
})
	.then((response) => {
		if (response.ok) {
			return response.text();
		}
		return "Error"
	})
	.then((data) => {
		variable = data;
	})
	.catch((e) => {
		variable = e;
		console.log(e);
	});
}catch(e){
	variable = "Error:" + e;
};`,
    text: "PATCH in variable url",
    color: dataColor,
    listChengers: ["variable", "url", "myBODY", "myHEADERS"],
    standartParameter: [
      [" //myName"],
      ['"https://jsonplaceholder.typicode.com/posts/1"'],
      [' { title: "foo" }'],
      ['"Content-type": "application/json; charset=UTF-8"']
    ],
    textInWhere: "PATCH in variable url body: myBODY, headers: myHEADERS"
  },
  {
    id: 72, // DATA
    code: `try {
	fetch(url, {
		method: 'DELETE',
	});
}catch(e){
	console.log(e);
};`,
    text: "DELETE url",
    color: dataColor,
    listChengers: ["url"],
    standartParameter: [['"https://jsonplaceholder.typicode.com/posts/1"']]
  },
  {
    id: 73, // OBJECT
    code: `addElementByHtml(\`<div class="input-text-container" style="position: absolute; left: \${myX}px; top: \${myY}px;">
		<input required="" type="\${isPassword?"password":"text"}" id="\${myId}main" name="\${myId}main" value="\${standartValue}" maxlength="myLenth" style="\${myStyle}">
		<label for="\${myId}main" style="\${myStyle}">\${myPlaceholder}</label>		
	</div>\`, myId);
	document.getElementById(myId+"main").onchange = (event)=>{
		myName = event.target.value
	};`,
    text: "Text input(myId)",
    color: objectColor,
    listChengers: [
      "myId",
      "standartValue",
      "myPlaceholder",
      "myLenth",
      "myStyle",
      "myName",
      "isPassword",
      "myX",
      "myY"
    ],
    standartParameter: [
      ['"InputId"'],
      ['"Text..."'],
      ['"Write text"'],
      ["2", "2", "1", "2", "4", "4"],
      ['"width: 200px;"'],
      [" myName"],
      ["false"],
      ["4", "0"],
      ["6", "0"]
    ],
    textInWhere:
      "Create Text input(myId) with: standartValue, placeholder: myPlaceholder, maxlength: myLenth, style: myStyle, save data in myName, It is password: isPassword, absolute position x: myX y: myY"
  },
  {
    id: 74, // OBJECT
    code: `addElementByHtml(\`<input type="range" min="\${myMIN}" max="\${myMAX}" value="\${standartValue}" step="\${oneStep}" oninput="myName=this.value" style="position: absolute; left: \${myX}px; top: \${myY}px; \${myStyle}" />\`, myId);`,
    text: "Slider(myId)",
    color: objectColor,
    listChengers: [
      "myId",
      "standartValue",
      "myMIN",
      "myMAX",
      "oneStep",
      "myName",
      "myStyle",
      "myX",
      "myY"
    ],
    standartParameter: [
      ['"SliderId"'],
      ["5"],
      ["0"],
      ["10"],
      ["1"],
      ["myName"],
      ['"width: 200px;"'],
      ["5", "0"],
      ["6", "0"]
    ],
    textInWhere:
      "Create Slider(myId), value: standartValue, lowest value: myMIN, greatest value: myMAX, step: oneStep, save data in myName, style: myStyle, absolute position x: myX y: myY"
  },
  {
    id: 75, // OBJECT
    code: `addElementByHtml(\`<input type="color" value="\${standartValue}" onchange="myName = this.value" style="position: absolute; left: \${myX}px; top: \${myY}px;">\`, myId);`,
    text: "Color picker(myId)",
    color: objectColor,
    listChengers: ["myId", "standartValue", "myName", "myX", "myY"],
    standartParameter: [
      ['"ColorId"'],
      ['"#eb4464"'],
      ["myName"],
      ["2", "0"],
      ["4", "0"]
    ],
    textInWhere:
      "Color picker(myId), color: standartValue, save data in myName, absolute position x: myX y: myY"
  },
  {
    id: 76, // OBJECT
    code: `addElementByHtml(\`<div class="input-checkbox-conteiner" style="position: absolute; left: \${myX}px; top: \${myY}px;">
		<input type="checkbox" class="input-checkbox" id="\${myId}ch" onchange='myName=this.checked;'
			\${standartValue&&"checked"}>
		<label for="\${myId}ch">
			<span class="checkbox-bipolar">
			</span>
		</label>
		<label for="\${myId}ch" style="\${myStyle}">\${myHint}</label>
	</div>\`, myId);`,
    text: "Checkbox(myId)",
    color: objectColor,
    listChengers: [
      "myId",
      "standartValue",
      "myHint",
      "myName",
      "myStyle",
      "myX",
      "myY"
    ],
    standartParameter: [
      ['"CheckId"'],
      ["false"],
      ['"isHappy"'],
      ["myName"],
      ['"width: 200px;"'],
      ["5", "0"],
      ["8", "0"]
    ],
    textInWhere:
      "Checkbox(myId), value: standartValue, hint: myHint, save data in myName, style: myStyle, absolute position x: myX y: myY"
  },
  {
    id: 77, // OBJECT
    code: `addElementByHtml(\`<div class="input-radio-container" style="position: absolute; left: \${myX}px; top: \${myY}px;">
		<input type="radio" id="\${myId}in" name="\${groupName}" onchange='myName=standartValue;' value="\${standartValue}">
		<label for="\${myId}in" style="\${myStyle}">\${myHint}</label>		
	</div>\`, myId);`,
    text: "Radio input(myId)",
    color: objectColor,
    listChengers: [
      "groupName",
      "myId",
      "standartValue",
      "myHint",
      "myName",
      "myStyle",
      "myX",
      "myY"
    ],
    standartParameter: [
      ['"group1"'],
      ['"RadioId"'],
      ['"option 1"'],
      ['"Option 1"'],
      ["myName"],
      ['"width: 100px;"'],
      ["8", "0"],
      ["9", "0"]
    ],
    textInWhere:
      "Create Radio input(groupName) id:myId, value: standartValue, hint: myHint, save data in myName, style: myStyle, absolute position x: myX y: myY"
  }
]
