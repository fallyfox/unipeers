import { Span } from "@/styled/custom-styled-components";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

// calculate screen width
const screenWidth = Dimensions.get("window").width;

export function EventSnippet ({ data }) {
  const [expandText,setExpandText] = useState(false);

  const [fontsLoaded] = useFonts({
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <View className="flex gap-y-2">
        <Image 
        style={{
          width: screenWidth,
          height: 400,
          resizeMode: "cover"
        }}
        source={{ uri: data.bannerUrl }}
        alt="event photo"
        />

        {/* interractions */}
        <View className="flex flex-row justify-between items-center px-3">
          {/* left of interractions*/}
          <View className="flex flex-row gap-x-3">
            <View className="flex flex-row items-center gap-x-1">
              <Ionicons name="heart" size={24} color="black"/>
              <Span className="font-bold text-xs">57</Span>
            </View>
            <View className="flex flex-row items-center gap-x-1">
              <Ionicons name="chatbubble" size={24} color="black"/>
              <Span className="font-bold text-xs">23</Span>
            </View>
            <View className="flex flex-row items-center gap-x-1">
              <MaterialIcons name="loop" size={24} color="black"/>
              <Span className="font-bold text-xs">2</Span>
            </View>
          </View>

          {/* right of interractions */}
          <View className="flex flex-row items-center gap-x-3">
            <Span>N20,000</Span>
            <Link href={`/event-details/[${data.id}]`}>
              <Feather name="arrow-up-right" size={24} color="black"/>
            </Link>
          </View>
        </View>

        {/* event post section */}
        <Pressable onPress={() => setExpandText(!expandText)} className="px-3">
          {expandText 
          ?
          <Text style={styles.text}>{data.desc}</Text>
          :
          <Text style={styles.text}>{data.desc.slice(0,80)}...</Text>}
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Raleway-Regular",
  }
})