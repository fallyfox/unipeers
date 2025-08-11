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
                    name="dynamic-feed" 
                    size={34} 
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
                    size={34} 
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
                    size={34} 
                    color={color} />
                )
            }}/>
        </Tabs>
    )
}