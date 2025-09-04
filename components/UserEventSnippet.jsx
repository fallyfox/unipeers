import { Image, Pressable } from "react-native";

export function UserEventSnippet ({ eventData,boxWidth }) {
    return (
        <Pressable style={{
            width: boxWidth,
            height: 160,
            borderRadius: 8
            }}>
            <Image
            style={{
                width: boxWidth,
                height: 160,
                borderRadius: 8,
                resizeMode: "cover"
            }}
            source={{ uri: eventData.data.imgUrl }}/>
        </Pressable>
    )
}