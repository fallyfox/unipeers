import { Seperator } from "@/components/ListSeperator";
import { UserEventSnippet } from "@/components/UserEventSnippet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Dimensions, FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../config/context";
import { auth, db } from "../../config/firebase";

// 24 is used for padding, 16 for gap, 4 is meant for unaccounted spaces
const screenWidth = Dimensions.get("window").width - 24 - 16 - 4; 

export default function Profile () {
  const { currentUser } = useContext(AuthContext);
  const [userEvents,setUserEvents] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  // signout procedure
  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth)
      .then(() => {
        router.replace("/signin")
      });
      setIsLoading(false);
    } catch (error) {
      Alert.alert(
        "Message",
        "Unknown error!",
        [{ text: "Try again"}]
      );
      console.error("Error:",error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const handleFetchUserEvents = async () => {
      const reData = []; // compile fetched data here

      const q = query(
        collection(db,"events"),
        where("createdBy","==",currentUser?.uid)
      );

      onSnapshot(q, (onSnap) => {
        onSnap.docs.forEach((doc) => reData.push({
          id: doc.id,
          data: doc.data()
        }));
        setUserEvents(reData);
      });
    }

    // call and execute function
    handleFetchUserEvents();
  },[currentUser]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ paddingHorizontal: 12 }} className="flex gap-6">
        {/* header section */}
        <View className="flex items-center">
          <Image
          style={{width: 86, height: 86}}
          source={require("../../assets/images/user.png")}
          alt="demo user profile photo"
          />
          <Text className="font-bold">Ademola Suleiman</Text>
          <Text className="text-stone-600 tracking-widest">@adesule</Text>

          {/* profile actions */}
          <View className="flex flex-row items-center gap-6 mt-3">
            <Link href="/" className="px-3 py-2 rounded-md bg-teal-700">
              <View className="flex flex-row items-center gap-3">
                <FontAwesome name="pencil-square-o" size={24} color="white"/>
                <Text className="text-lg font-semibold text-white">Update profile</Text>
              </View>
            </Link>
            <Pressable onPress={handleSignOut} className="px-3 py-2 rounded-md bg-red-700">
              {isLoading ? <ActivityIndicator size="small" color="white"/> : 
              <View className="flex flex-row items-center gap-3">
                <MaterialIcons name="logout" size={24} color="white"/>
                <Text className="text-lg font-semibold text-white">Sign out</Text>
              </View>}
            </Pressable>
          </View>
        </View>

        {/* body section */}
        <View className="flex gap-3 border border-stone-300 rounded-md p-4">
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-stone-700 track-wider">Account email</Text>
            <Text className="text-md text-stone-800">{currentUser?.email}</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-stone-700 track-wider">Department</Text>
            <Text className="text-md text-stone-800">Computer Engineering</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-stone-700 track-wider">Faculty</Text>
            <Text className="text-md text-stone-800">Engineering</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-stone-700 track-wider">Institution</Text>
            <Text className="text-md text-stone-800">Ahmadu Bello University, Zaria</Text>
          </View>
        </View>

        {/* show events by the user */}
        <View>
          <Text style={{ fontSize: 24, marginBottom: 16}}>My events</Text>

          <FlatList
          data={userEvents}
          renderItem={({item}) => {
            return (
             <UserEventSnippet boxWidth={screenWidth/3} eventData={item}/>
            )
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Seperator h={0} w={8}/>}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}