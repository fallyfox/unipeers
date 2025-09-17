import { Span } from "@/styled/custom-styled-components";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import { addDoc, collection, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../config/context";
import { db } from "../config/firebase";

// calculate screen width
const screenWidth = Dimensions.get("window").width;

export function EventSnippet ({ data,id }) {
  const [expandText,setExpandText] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [saves,setSaves] = useState([]);
  const [likes,setLikes] = useState([]);
  const [comments,setComments] = useState([]);
  const [typeComment,setTypedComment] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null
  }

  // get saves for this event
  const q = query(collection(db,"saved"),where("eventId","==",id));
  onSnapshot(q, (onSnap) => {
    const compiledData = [];
    onSnap.docs.forEach(doc => compiledData.push(doc.data()));
    // get only savedBy
    const re = compiledData.map(item => item.savedBy)
    setSaves(re);
  });
  
  // get likes for this event
  const q2 = query(collection(db,"likes"),where("eventId","==",id));
  onSnapshot(q2, (onSnap) => {
    const compiledData = [];
    onSnap.docs.forEach(doc => compiledData.push(doc.data()));
    // get only savedBy
    const re = compiledData.map(item => item.likedBy)
    setLikes(re);
  });
  
  // get comments for this event
  const q3 = query(collection(db,"comments"),where("eventId","==",id));
  onSnapshot(q3, (onSnap) => {
    const compiledData = [];
    onSnap.docs.forEach(doc => compiledData.push({
      id: doc.id,
      data: doc.data()
    }));
    setComments(compiledData);
  });

  const handleSaveEvent = async () => {
    try {
      await addDoc(collection(db,"saved"),{
        savedBy: currentUser.uid,
        eventId: id,
        eventImage: data.imgUrl,
        createdAt: new Date().getTime()
      })
    } catch (error) {
      console.log("Error message:",error);
    }
  }
  
  const handleLikePost = async () => {
    try {
      await addDoc(collection(db,"likes"),{
        likedBy: currentUser.uid,
        eventId: id,
        createdAt: new Date().getTime()
      })
    } catch (error) {
      console.log("Error message:",error);
    }
  }
  
  const handlePostComment = async () => {
    try {
      await addDoc(collection(db,"comments"),{
        author: currentUser.uid,
        eventId: id,
        text: typeComment,
        createdAt: new Date().getTime()
      });
      setTypedComment("");
    } catch (error) {
      console.log("Error message:",error);
    }
  }

  // get name of comment author
  async function handleGetAuthor (uid) {
    const onSnap = await getDoc(doc(db,"users",uid));
    if (onSnap.exists()) {
      let data = onSnap.data()
      let fullName = data.firstName + " " + data.lastName;
      return fullName
    } else {
      return ""
    }
  }

  return (
    <View className="flex gap-y-2">
        <Image 
        style={{
          width: screenWidth,
          height: 400,
          resizeMode: "cover"
        }}
        source={{ uri: data.imgUrl }} 
        alt="event photo"
        />

        {/* interractions */}
        <View className="flex flex-row justify-between items-center px-3">
          {/* left of interractions*/}
          <View className="flex flex-row gap-x-3">
            <View className="flex flex-row items-center gap-x-1">
              <TouchableOpacity onPress={!likes.includes(currentUser.uid) ? handleLikePost : null}>
                <Ionicons name="heart" size={24} color={likes.includes(currentUser.uid) ? "brown" : "black"}/>
              </TouchableOpacity>
              <Span className="font-bold text-xs">{likes.length}</Span>
            </View>

            <View className="flex flex-row items-center gap-x-1">
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons name="chatbubble" size={24} color="black"/>
              </TouchableOpacity>
              <Span className="font-bold text-xs">{comments.length}</Span>
            </View>

            <View className="flex flex-row items-center gap-x-1">
              <TouchableOpacity onPress={!saves.includes(currentUser.uid) ? handleSaveEvent : null}>
                <MaterialIcons name="bookmark" size={24} color={saves.includes(currentUser.uid) ? "brown" : "black"}/>
              </TouchableOpacity>
              <Span className="font-bold text-xs">{saves.length}</Span>
            </View>
          </View>

          {/* right of interractions */}
          <View className="flex flex-row items-center gap-x-3">
            <Span>{data.fee == 0 ? "Free" : "₦" + new Intl.NumberFormat().format(data.fee)}</Span>
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

        <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
          <View style={{ 
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            paddingHorizontal: 16,
            paddingBottom: 24,
            paddingTop: 12
          }}>
            <View>
              <View className="flex flex-row justify-end">
                <Pressable onPress={() => setModalVisible(false)} className="bg-neutral-200 p-1 rounded-md">
                  <Text className="font-bold text-sm">Close</Text>
                </Pressable>
              </View>

              <View className="flex flex-col gap-y-3">
                {comments.map(item => (
                  <View key={item.id}>
                    <View>
                      <Text>{handleGetAuthor(item.data.author)}</Text>
                    </View>
                    <Text>{item.data.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="flex flex-row justify-between items-start gap-x-3">
              <TextInput
              value={typeComment}
              onChangeText={(text) => setTypedComment(text)}
              placeholder="type a comment"
              style={{ padding: 8}}/>
              
              {typeComment.length > 0 &&
              <TouchableOpacity onPress={handlePostComment}>
                <FontAwesome5 name="arrow-circle-up" size={24} color="black" />
              </TouchableOpacity>}
            </View>
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Raleway-Regular",
  }
})