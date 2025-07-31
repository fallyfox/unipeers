import { customStyles } from "@/components/custom-styles";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={customStyles.main}>
      <View>
        <Text style={{
          fontWeight: "bold",
          color: "gray",
          fontSize:24
          }}>React Native Training</Text>
      </View>

      <View style={{
        width: "100%",
        minHeight: 160,
        backgroundColor: "black"
      }}>
        <Text style={styles.text}>Course Banner</Text>
        <Image
        width={140}
        height={280}
        style={{
          width:"100%"
        }}
        source={{uri: "https://plus.unsplash.com/premium_photo-1748087734665-fc0f73d83858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
        alt="course photo"/>
      </View>

      <View style={{
        width: "100%",
        minHeight: 160,
        backgroundColor: "orange",
        marginVertical: 16,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 12
      }}>
        <Text style={styles.text}>About Me</Text>
      </View>

       <View style={{
        width: "100%",
        minHeight: 160,
        backgroundColor: "purple"
      }}>
        <Text style={styles.text}>About Early Code Institute</Text>
        <Image
        source={require("../assets/images/react-logo.png")}
        alt="logo"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "white"
  }
});