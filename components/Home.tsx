import { introStyles } from "@/styles/intro.styles";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={introStyles.cover}>
      <ImageBackground
      style={introStyles.bg}
      source={require("../assets/images/intro_bg.jpg")}>
        <View style={introStyles.layer}>
          <View style={introStyles.header}>
            <Text style={introStyles.title}>UniPeers</Text>
          </View>

          <View style={introStyles.body}>
            <Text style={introStyles.bodyText}>The school app for socialising. Connect with friends, create your own event, and find other amazing events from students.</Text>
          </View>

          <View>
            <TouchableOpacity style={introStyles.btn}>
              <Text style={introStyles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
