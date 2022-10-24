import React from "react"
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack" /* import react navigation */

/* ================ import screens ============*/
import ViewResult from "./components/ViewResult"
import Editor from "./components/Editor"
import AddBlock from "./components/AddBlock"

const Stack = createStackNavigator()

/* ============NAVIGATION ===============*/
export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        /* transition from right like on IOS */
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen /* create Editor */
        name="Editor"
        component={Editor}
        options={{ title: "Code Editor" }}
      />

      <Stack.Screen /* create View for Result */
        name="Result"
        component={ViewResult}
        options={{ title: "View" }}
      />

      <Stack.Screen /* create Create Block */
        name="AddBlock"
        component={AddBlock}
        options={{ title: "Create Block" }}
      />
    </Stack.Navigator>
  )
}
