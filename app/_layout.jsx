import { Stack } from "expo-router";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../config/context.config";
import "./globals.css";

export default function RootLayout() {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false
      }}>
        {currentUser !== undefined ?
        <Stack.Screen
        name="(tabs)"
        options={{
          headerShown:false,
        }}/>
        :
        <Stack.Screen
        name="signin"
        options={{
          headerShown:false,
          title:"Sign in"
        }}/>
        }
        
        <Stack.Screen
        name="signup"
        options={{
          headerShown:false,
          title:"Sign up"
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
    </AuthProvider>
  )
}
