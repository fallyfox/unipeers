import { events } from "@/assets/local-data/events";
import { EventSnippet } from "@/components/EventSnippet";
import { useFonts } from "expo-font";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Seperator () {
  return (
    <View style={{height:32, backgroundColor:"transparent"}}></View>
  )
}

export default function Index () {
  const [fontsLoaded] = useFonts({
    "Bodoni-Bold": require("../../assets/fonts/BodoniFLF-Bold.ttf"),
    "Raleway-Bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
        data={events}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <EventSnippet data={item}/>
          )
        }}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Bodoni-Bold",
    fontWeight: "bold"
  }
})