import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Profile () {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* header section */}
        <View className="flex items-center">
          <Image
          style={{width: 86, height: 86}}
          source={require("../../assets/images/user.png")}
          alt="demo user profile photo"
          />
          <Text className="font-bold">Ademola Suleiman</Text>
          <Text className="text-stone-600 tracking-widest">@adesule</Text>
        </View>

        {/* body section */}
        <View>
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-stone-700 track-wider">Account email</Text>
            <Text className="text-md text-stone-800">ademola_sule@gmail.com</Text>
          </View>
        </View>

        {/* bottom section */}
        <View></View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}