const objectColor = "#913e5f"
const controlColor = "#f59073"
const propertiesColor = "#96b38e"
const dataColor = "#eb4464"

export const tapElements = ["13", "15", "24", "25"]

export const ListOfElements = [
  {
    id: 0, // OBJECT
    code: 'mainElementInHTML.innerHTML=mainElementInHTML.innerHTML+`<p>${"Text"}</p>`;',
    text: 'Create "Text" by HTML',
    color: objectColor,
    listChengers: ['"Text"'],
    standartParameter: [['"Text"']]
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
    code: 'alert("Text");',
    text: 'messege("Text")',
    color: objectColor,
    listChengers: ['"Text"'],
    standartParameter: [['"Text"']]
  },
  {
    id: 9, // OBJECT
    code: 'myName = new rect({ x: myX, y: myY, width: myW, height: myH, color: myColor, radius: myR, shape: "cub", texture: myIMG });',
    text: "Create Square myName",
    color: objectColor,
    listChengers: [
      "myName",
      "myX",
      "myY",
      "myW",
      "myH",
      "myR",
      "myColor",
      "myIMG"
    ],
    standartParameter: [
      ["myName"],
      ["1", "0", "0"],
      ["5", "0", "0"],
      ["2", "0", "0"],
      ["7", "0"],
      ["0"],
      ['"#000"'],
      ["undefined"]
    ],
    textInWhere:
      "myName: x: myX, y: myY, width: myW, height: myH, radius: myR, color: myColor, texture: myIMG "
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
    text: "Set X of //Object 100",
    color: propertiesColor,
    listChengers: ["//Object", "100"],
    standartParameter: [[" //myName"], ["1", "0", "0"]]
  },
  {
    id: 17, // PROPERTIES
    code: "//Object.y = 101;",
    text: "Set Y of //Object 101",
    color: propertiesColor,
    listChengers: ["//Object", "101"],
    standartParameter: [[" //myName"], ["1", "0", "1"]]
  },
  {
    id: 18, // PROPERTIES
    code: "//Object.width = 50;",
    text: "Set Width of //Object 50",
    color: propertiesColor,
    listChengers: ["//Object", "50"],
    standartParameter: [[" //myName"], ["5", "0"]]
  },
  {
    id: 19, // PROPERTIES
    code: "//Object.height = 60;",
    text: "Set Height of //Object 60",
    color: propertiesColor,
    listChengers: ["//Object", "60"],
    standartParameter: [[" //myName"], ["6", "0"]]
  },
  {
    id: 20, // PROPERTIES
    code: "//Object.radius = 30;",
    text: "Set Radius of //Object 30",
    color: propertiesColor,
    listChengers: ["//Object", "30"],
    standartParameter: [["//myName"], ["3", "0"]]
  },
  {
    id: 21, // PROPERTIES
    code: "//Object.color = myColor;",
    text: "Set Color of //Object myColor",
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
	myName.a.onload = () => {
		myName.swidth = this.width
		myName.sheight = this.height
	}
	myName.a.src = mySourse
	myName.sx = 0
	myName.sy = 0
} catch (e) {
	alert('Image not found 0(')
};`,
    text: "Create Texture myName",
    color: objectColor,
    listChengers: ["myName", "mySourse"],
    standartParameter: [
      ["//myName"],
      [
        '"https://yt3.ggpht.com/ytc/AMLnZu9y3rmdvECWk3AWSxCiZmDDROoqSXEvFkozxBi0=s900-c-k-c0x00ffffff-no-rj"'
      ]
    ],
    textInWhere: "Create Texture myName, Sourse: mySourse"
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
  /* Array Method */
  {
    id: 31, // CONTROL
    code: "for (let index = 0begin; index <= 54; index = index action) {",
    text: "If index less 54, do action",
    color: dataColor,
    listChengers: ["index", "less", "54", "action", "0begin"],
    standartParameter: [["index"], ["<"], ["5", "4"], ["+", "1"], ["0"]],
    secondArgument: [{ code: "};", text: "End of the repeats" }],
    textInWhere:
      "If index less 54, do action, <span style='font-size:14px;'>value at start:</span> 0begin"
  },
  {
    id: 32, // CONTROL
    code: "array.push(newElement);",
    text: "In array add newElement",
    color: dataColor,
    listChengers: ["array", "newElement"],
    standartParameter: [["array"], ['"newElement"']]
  },
  {
    id: 33, // CONTROL
    code: "array.pop();",
    text: "Delete last element in array",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 34, // CONTROL
    code: "array.unshift(element);",
    text: "New first element in array",
    color: dataColor,
    listChengers: ["element", "array"],
    standartParameter: [['"element"'], ["array"]]
  },
  {
    id: 35, // CONTROL
    code: "array.shift();",
    text: "Delete first element in array",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 36, // CONTROL
    code: "array.forEach((element, index)=>{",
    text: "array.forEach(element, index)",
    color: dataColor,
    listChengers: ["array", "element", "index"],
    standartParameter: [["array"], ["element"], ["index"]],
    secondArgument: [{ code: "});", text: "End of the forEach" }]
  },
  {
    id: 37, // CONTROL
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
    id: 38, // CONTROL
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
    id: 39, // CONTROL
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
    id: 40, // CONTROL
    code: "array.splice(5, some);",
    text: "delete some elements",
    color: dataColor,
    listChengers: ["5", "array", "some"],
    standartParameter: [["5"], ["array"], ["1"]],
    textInWhere: "In position 5 in array delete some elements"
  },
  {
    id: 41, // CONTROL
    code: "array.splice(5, 0, newElements);",
    text: "Add some elements in array",
    color: dataColor,
    listChengers: ["5", "array", "newElements"],
    standartParameter: [["5"], ["array"], ["1", ",", "2"]],
    textInWhere: "In position 5 in array add newElements"
  },
  {
    id: 42, // CONTROL
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
    id: 43, // CONTROL
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
    id: 44, // CONTROL
    code: "array.sort((a, b)=>+(a-b));",
    text: "array.sort(+)",
    color: dataColor,
    listChengers: ["array", "+"],
    standartParameter: [["array"], ["+"]]
  },
  {
    id: 45, // CONTROL
    code: "array.reverse();",
    text: "array.reverse",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 46, // CONTROL
    code: "shuffle(array);",
    text: "array.shuffle",
    color: dataColor,
    listChengers: ["array"],
    standartParameter: [["array"]]
  },
  {
    id: 47, // CONTROL
    code: "array1 = array1.concat(array2);",
    text: "array1 connect with array2",
    color: dataColor,
    listChengers: ["array1", "array2"],
    standartParameter: [["array1"], ["[", "1", ",", "2", "]"]]
  },
  {
    id: 48, // CONTROL
    code: "return{",
    text: "return",
    color: controlColor,
    standartParameter: ["Hi GAfum"],
    secondArgument: [{ code: "};", text: "End of the return" }]
  },
  {
    id: 49, // CONTROL
    code: "continue;",
    text: "continue",
    color: controlColor,
    standartParameter: ["Hi GAfum"]
  }
]
