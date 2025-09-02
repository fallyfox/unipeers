import { themeColors } from "@/utils/theme.utils";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function _Layout () {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: themeColors.darkGreen
        }}>
            <Tabs.Screen
            name="index"
            options={{
                title: "Feeds",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <MaterialIcons 
                    name="home" 
                    size={30} 
                    color={color} />
                )
            }}/>
            
            <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 
                    name="user" 
                    size={30} 
                    color={color} />
                )
            }}/>
            
            <Tabs.Screen
            name="saved"
            options={{
                title: "Saved",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <MaterialIcons 
                    name="bookmark" 
                    size={30} 
                    color={color} />
                )
            }}/>
            
            <Tabs.Screen
            name="create"
            options={{
                title: "Create",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <MaterialIcons 
                    name="add-circle-outline" 
                    size={30} 
                    color={color} />
                )
            }}/>
        </Tabs>
    )
}