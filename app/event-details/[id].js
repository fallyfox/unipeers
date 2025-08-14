import { events } from "@/assets/local-data/events";
import { themeColors } from "@/utils/theme.utils";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { EventSnippet } from "../../components/EventSnippet";

const screenWidth = Dimensions.get("window").width * 0.94;

export default function EventDetails () {
    const { id } = useLocalSearchParams();
    const [data,setData] = React.useState(undefined);

    React.useEffect(() => {
        if (id !== undefined && id !== null && id !== "") {
            const filteredData = events.filter(item => item.id === id)[0];
            setData(filteredData);
        }
    },[id]);

    // convert event timestamp to date
    const convertTimestamp = (stamp) => {
        const eventDate = new Date(stamp);
        return String(eventDate);
    }

    const decideFee = (free,fee) => {
        let feeText = "";
        if (free === true) {
            feeText = "FREE"
        } else {
            feeText = `₦${fee}`
        }

        return feeText;
    } 

    if (data !== undefined) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex:1,paddingVertical:16,display:"flex",justifyContent:"space-between" }}>
                    {/* upper group */}
                    <View className="flex gap-y-3">
                        <View className="flex flex-row justify-center">
                            <Image
                            source={{ uri: data.bannerUrl}}
                            style={{width: screenWidth,height:280,resizeMode:"cover"}}
                            className="rounded-md"
                            alt="event cover image"/>
                        </View>

                        {/* body area */}
                        <View className="flex justify-between gap-y-2 px-3">
                            <EventSnippet 
                            mainTitle={data.time} 
                            subTitle={data.date} 
                            iconName="event-note"/>

                            <EventSnippet 
                            mainTitle={data.title} 
                            subTitle={data.createdBy}
                            iconName="event-note"/>

                            <EventSnippet 
                            mainTitle={decideFee(data.free,data.fee)} 
                            subTitle={convertTimestamp(data.createdAt)}
                            iconName="account-balance-wallet"/>

                            <EventSnippet 
                            mainTitle={data.venue} 
                            subTitle={data.school}
                            iconName="event-note"/>

                            {/* description block */}
                            <View>
                                <Text style={{color: themeColors.darkGreen, fontWeight: "bold"}}>Event description</Text>
                                <Text>{data.desc}</Text>
                            </View>
                        </View>
                    </View>

                    {/* bottom group */}
                    <View className="px-3">
                        <TouchableOpacity style={{backgroundColor: themeColors.darkGreen}} className="h-16 flex justify-center items-center rounded-full">
                            <Text className="text-3xl text-white">Save event</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}