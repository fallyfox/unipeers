import { events } from "@/assets/local-data/events";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width * 0.94;

export default function EventDetails () {
    const { id } = useLocalSearchParams();
    const [data,setData] = React.useState(undefined);

    React.useEffect(() => {
        if (id !== undefined && id !== null && id !== "") {
            const filteredData = events.filter(item => item.id === id)[0];
            setData(filteredData);
        }
    },[id])

    if (data !== undefined) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex:1,paddingVertical:16 }}>
                    {/* upper group */}
                    <View>
                        <View className="flex flex-row justify-center">
                            <Image
                            source={{ uri: data.bannerUrl}}
                            style={{width: screenWidth,height:280,resizeMode:"cover"}}
                            className="rounded-md"
                            alt="event cover image"/>
                        </View>

                        {/* body area */}
                        <View className="flex flex-row justify-between gap-x-4">
                            <View>
                                <MaterialIcons name="event-note" size={24} color="black" />
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>

                    {/* bottom group */}
                    <View>
                        <TouchableOpacity>
                            <Text>Save event</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}