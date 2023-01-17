import React from "react"
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack" /* import react navigation */

/* ================ import screens ============*/
import ViewResult from "./components/ViewResult"
import Editor from "./components/Editor"
import HomePage from "./components/HomePage"
import Settings from "./components/Settings"

const Stack = createStackNavigator()

/* ============NAVIGATION ===============*/
export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "calibri-regular"
        },
        /* transition from right like on IOS */
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen /* create Editor */
        name="HomePage"
        component={HomePage}
        options={{ title: "Projects" }}
      />
      <Stack.Screen /* create Editor */
        name="Editor"
        component={Editor}
        options={{ title: "Code Editor" }}
      />

      <Stack.Screen /* create View for Result */
        name="Result"
        component={ViewResult}
        options={{ title: "View", headerShown: false }}
      />

      <Stack.Screen /* create View for Result */
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  )
}
