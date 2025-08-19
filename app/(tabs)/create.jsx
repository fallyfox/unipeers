import { howToCreateEvent } from "@/assets/local-data/how-to-create-event";
import { formatTimestampToDate } from "@/utils/format-date.utils";
import { themeColors } from "@/utils/theme.utils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Create () {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState(new Date());
    const [showPicker,setShowPicker] = useState(false);

    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowPicker(false);
    }

    return (
        <View style={styles.main}>
            <Text className="text-black text-4xl font-bold">Create an event</Text>

            <ScrollView contentContainerStyle={{gap: 16}}>
                {/* event creation form */}
                <View className="flex gap-4 bg-white rounded-md p-3">
                    <View>
                        <Text className="text-md text-neutral-500">Event title</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="title of your event"
                        value={title}
                        onChangeText={(text) => setTitle(text)}/>
                    </View>
                    
                    <View>
                        <Text className="text-md text-neutral-500">Event description</Text>
                        <TextInput
                        multiline={true}
                        style={styles.textarea}
                        placeholder="title of your event"
                        value={description}
                        onChangeText={(text) => setDescription(text)}/>
                    </View>

                    <View>
                        <TouchableOpacity 
                        onPress={() => setShowPicker(true)}
                        style={{
                            backgroundColor: themeColors.darkGray,
                            borderRadius: 50,
                            paddingHorizontal: 16,
                            paddingVertical: 8
                        }}
                        className="flex flex-row justify-between items-center">
                            <Text className="font-bold text-lg text-neutral-100">{formatTimestampToDate(date)}</Text>
                            <Text className="font-bold text-2xl text-neutral-100">Select event date</Text>
                        </TouchableOpacity>
                        {showPicker && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            mode="date"
                            value={date}
                            onChange={onChange}/>
                        )}
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
        paddingTop: Platform.OS === "ios" ? 24 : StatusBar.currentHeight,
        paddingHorizontal: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: themeColors.darkGray,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        fontSize: 16,
    },
    textarea: {
        borderWidth: 1,
        borderColor: themeColors.darkGray,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: 16,
    },
})