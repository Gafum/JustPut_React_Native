const TextStyle = {
  fontFamily: "calibri-regular",
  fontSize: 16,
  lineHeight: 18
}

/* List of Buttons that will show in the float action */
export const actions = [
  {
    text: "Properties",
    icon: require("../../assets/properties.png"),
    name: "bt_properties1",
    position: 0,
    color: "#96b38e",
    textColor: "#888",
    textStyle: TextStyle
  },
  {
    text: "Control",
    icon: require("../../assets/control.png"),
    name: "bt_control2",
    position: 1,
    color: "#f59073",
    textColor: "#888",
    textStyle: TextStyle
  },
  {
    text: "Object",
    icon: require("../../assets/addObject.png"),
    name: "bt_object3",
    position: 2,
    color: "#913e5f",
    textColor: "#888",
    textStyle: TextStyle
  },
  {
    text: "Data",
    icon: require("../../assets/data.png"),
    name: "bt_data4",
    position: 3,
    color: "#eb4464",
    textColor: "#888",
    textStyle: TextStyle
  },
  {
    text: "Start",
    icon: require("../../assets/playButton.png"),
    name: "bt_start5",
    position: 4,
    color: "#3db05a",
    textColor: "#888",
    textStyle: TextStyle,
    textElevation: 15
  }
]
