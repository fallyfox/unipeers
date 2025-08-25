import { useFonts } from "expo-font";
import { Dimensions, Image, StyleSheet, View } from "react-native";

// calculate screen width
const screenWidth = Dimensions.get("window").width;

export function EventSnippet ({ data }) {
  const [fontsLoaded] = useFonts({
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <View>
        <Image 
        style={{
          width: screenWidth,
          height: 400,
          resizeMode: "cover"
        }}
        source={{ uri: data.bannerUrl }}
        alt="event photo"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Raleway-Regular",
  }
})