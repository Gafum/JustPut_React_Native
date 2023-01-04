const objectColor = "#913e5f"
const controlColor = "#f59073"
const propertiesColor = "#96b38e"
const dataColor = "#eb4464"

export const ListOfElements = [
  {
    id: 0, // OBJECT
    code: "element.innerHTML=element.innerHTML+`<p>${Text}</p>`",
    text: "Create Text by HTML",
    color: objectColor,
    listChengers: ["Text"],
    standartParameter: [["Text"]]
  },
  {
    id: 1, // CONTROL
    code: "function name(params){",
    text: "Function name(params)",
    color: controlColor,
    listChengers: ["name", "params"],
    standartParameter: [["name"], ["params"]],
    secondArgument: [{ code: "}", text: "End" }],
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
    code: "//a = 2",
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
    secondArgument: [{ code: "}", text: "End" }]
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
      { code: "}", text: "End" }
    ]
  },
  {
    id: 8, // OBJECT
    code: 'alert("Text")',
    text: 'messege("Text")',
    color: objectColor,
    listChengers: ['"Text"'],
    standartParameter: [['"Text"']]
  },
  {
    id: 9, // PROPERTIES
    code: `canva.width = W
canva.height = H`,
    text: "scene W×H",
    color: propertiesColor,
    listChengers: ["W", "H"],
    standartParameter: [
      ["3", "6", "0"],
      ["7", "2", "0"]
    ]
  },
  {
    id: 10, // OBJECT
    code: 'myName = new rect({ x: myX, y: myY, width: myW, height: myH, color: myColor, radius: myR, shape: "cub" })',
    text: "Create Square myName",
    color: objectColor,
    listChengers: ["myName", "myX", "myY", "myW", "myH", "myR", "myColor"],
    standartParameter: [
      ["myName"],
      ["1", "0", "0"],
      ["4", "0"],
      ["3", "0"],
      ["5", "0"],
      ["0"],
      ['"#000"']
    ],
    textInWhere:
      "myName: x: myX, y: myY, width: myW, height: myH, radius: myR, color: myColor"
  },
  {
    id: 11, // OBJECT
    code: 'myName = new rect({ x: myX, y: myY, radius: myR, startAngle:myS, endAngle: myE, counterclockwise: myCl, color: myColor, shape: "circle", width: myR*2, height: myR*2})',
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
      ["4", "0"],
      ["3", "0"],
      ["0"],
      ["degToRadian(", "3", "6", "0", ")"],
      ["false"],
      ['"#000"']
    ],
    textInWhere:
      "myName: x: myX, y: myY, radius: myR, startAngle(rad): myS, endAngle(rad): myE, counterclockwise: myCl, color: myColor"
  },
  {
    id: 12, // CONTROL
    code: `let toClean = true
draw()
function draw() {
if (toClean){ctx.clearRect(0, 0, canva.width, canva.height)}`,
    text: "Drawing cycle",
    color: controlColor,
    listChengers: ["true"],
    standartParameter: [["true"]],
    secondArgument: [
      { code: "requestAnimationFrame(draw)}", text: "End Drawing" }
    ],
    textInWhere: "Drawing cycle(Clean? true)",
    isfunction: true
  },
  {
    id: 13, // OBJECT
    code: "//Object.draw(true)",
    text: "Draw //Object Fill: true",
    color: objectColor,
    listChengers: ["//Object", "true"],
    standartParameter: [["//Object"], ["true"]]
  },
  {
    id: 14, // CONTROL
    code: `function myName(event){`,
    text: "Tap(Get event)",
    color: controlColor,
    listChengers: ["event", "myName"],
    standartParameter: [["event"], []],
    secondArgument: [{ code: "}", text: "End of Tap" }],
    isfunction: true
  },
  {
    id: 15, // OBJECT
    code: `ctx.fillStyle = myColor
ctx.font = mySt
ctx.fillText(text, myX, myY)`,
    text: "Draw Text: text",
    color: objectColor,
    listChengers: ["text", "myX", "myY", "mySt", "myColor"],
    standartParameter: [
      ['"Hi gafum"'],
      ["1", "0", "0"],
      ["4", "0"],
      ['"48px serif"'],
      ['"#000"']
    ],
    textInWhere: "text: x: myX, y: myY, fontStyle: mySt, color: myColor"
  },
  {
    id: 16, // CONTROL
    code: `function myName(event){
						if(objectClick({object: //Object, pX: event.offsetX, pY: event.offsetY})){`,
    text: "//Object.onClick",
    color: controlColor,
    listChengers: ["//Object", "myName"],
    standartParameter: [["myName"], []],
    secondArgument: [{ code: "}}", text: "End of Click" }],
    isfunction: true
  },
  {
    id: 17, // PROPERTIES
    code: "//Object.x = 100",
    text: "Set X of //Object 100",
    color: propertiesColor,
    listChengers: ["//Object", "100"],
    standartParameter: [[" //myName"], ["1", "0", "0"]]
  },
  {
    id: 18, // PROPERTIES
    code: "//Object.y = 101",
    text: "Set Y of //Object 101",
    color: propertiesColor,
    listChengers: ["//Object", "101"],
    standartParameter: [[" //myName"], ["1", "0", "1"]]
  },
  {
    id: 19, // PROPERTIES
    code: "//Object.width = 50",
    text: "Set Width of //Object 50",
    color: propertiesColor,
    listChengers: ["//Object", "50"],
    standartParameter: [[" //myName"], ["5", "0"]]
  },
  {
    id: 20, // PROPERTIES
    code: "//Object.height = 60",
    text: "Set Height of //Object 60",
    color: propertiesColor,
    listChengers: ["//Object", "60"],
    standartParameter: [[" //myName"], ["6", "0"]]
  },
  {
    id: 21, // PROPERTIES
    code: "//Object.radius = 30",
    text: "Set Radius of //Object 30",
    color: propertiesColor,
    listChengers: ["//Object", "30"],
    standartParameter: [["//myName"], ["3", "0"]]
  },
  {
    id: 22, // PROPERTIES
    code: "//Object.color = myColor",
    text: "Set Color of //Object myColor",
    color: propertiesColor,
    listChengers: ["//Object", "myColor"],
    standartParameter: [[" //myName"], ['"#000"']]
  },
  {
    id: 23, // PROPERTIES
    code: `myName = ctx.createLinearGradient(myX, myY, myfX, myfY)
CreateFradionAddPoints(myName, myColor, points)`,
    text: "createLinearGradient myName",
    color: propertiesColor,
    listChengers: ["myName", "myX", "myY", "myfX", "myfY", "myColor", "points"],
    standartParameter: [
      ["myName"],
      ["0"],
      ["0"],
      ["200"],
      ["0"],
      ["[", '"#fff"', ",", '"red"', "]"],
      ["[", "0", ",", "1", "]"]
    ],
    textInWhere:
      'myName:<span style="font-size:10px;">(position is absolute)</span> Start X<span style="font-size:10px;">(coordinate of the start point)</span>: myX, Start Y: myY, Finish X<span style="font-size:10px;">(coordinate of the end point)</span>: myfX, Finish Y: myfY, List of Color: myColor, List of Points: points'
  },
  {
    id: 24, // PROPERTIES
    code: `myName = ctx.createRadialGradient(myX, myY, myR1, myfX, myfY, myR2)
CreateFradionAddPoints(myName, myColor, points)`,
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
  }
]
