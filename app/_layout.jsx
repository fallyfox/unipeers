import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="(tabs)"
      options={{
        headerShown:false,
      }}/>
      
      <Stack.Screen
      name="index"
      options={{
        headerShown:false,
        title:"Home"
      }}/>

      <Stack.Screen
      name="about"
      options={{
        headerShown:false,
        title:"About Unipeers"
      }}/>
      
      <Stack.Screen
      name="event-details/[id]"
      options={{
        headerShown:true,
        title:"Event details"
      }}/>
    </Stack>
  )
}
