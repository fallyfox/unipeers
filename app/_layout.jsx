import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  const user = undefined;

  return (
    <Stack>
      {user !== undefined ?
      <Stack.Screen
      name="(tabs)"
      options={{
        headerShown:false,
      }}/>
      :
      <Stack.Screen
      name="signup"
      options={{
        headerShown:false,
        title:"Sign up"
      }}/>
      }
      
      <Stack.Screen
      name="signin"
      options={{
        headerShown:false,
        title:"Sign in"
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
      
      <Stack.Screen
      name="update-event/[uid]"
      options={{
        headerShown:true,
        title:"Update event"
      }}/>
      
    </Stack>
  )
}
