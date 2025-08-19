import { howToCreateEvent } from "@/assets/local-data/how-to-create-event";
import { themeColors } from "@/utils/theme.utils";
import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function Create () {
    const [title,setTitle] = useState("");

    console.log(title);

    return (
        <View style={styles.main}>
            <Text className="text-black text-4xl font-bold">Create an event</Text>

            <ScrollView contentContainerStyle={{gap: 16}}>
                {/* event creation form */}
                <View className="flex gap-4 bg-white rounded-md p-3">
                    <View>
                        <Text className="text-xs text-neutral-500">Event title</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="title of your event"
                        value={title}
                        onChangeText={(text) => setTitle(text)}/>
                    </View>
                </View>

                {/* how to create event - documentation */}
                <View className="flex gap-4 bg-white rounded-md p-3">
                    {howToCreateEvent.map(item => (
                        <View key={item.title}>
                            <Text className="font-bold">{item.title}</Text>
                            <Text className="text-neutral-700">{item.doc}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        gap: 16,
        backgroundColor: themeColors.lightGreen,
        paddingTop: Platform.OS === "ios" ? 24 : StatusBar.currentHeight,
        paddingHorizontal: 12,
    },
    input: {
        borderWidth: 2,
        borderColor: themeColors.lightGreen,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        fontSize: 16,
    }
})