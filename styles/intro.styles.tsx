import { themeColors } from "@/utils/theme.utils";
import { StyleSheet } from "react-native";

export const introStyles = StyleSheet.create({
    cover: {
        flex:1,
    },
    bg: {
        flex:1,
    },
    layer: {
        flex:1,
        display: "flex",
        justifyContent: "space-between",
        paddingVertical:48,
        paddingHorizontal: 28
        // backgroundColor: themeColors.darkGreen,
        // opacity: 0.3
    },
    header: {
        
    },
    body: {
        backgroundColor: themeColors.black,
        opacity: 0.7,
        borderRadius: 12,
        padding: 16
    },
    bodyText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    title: {
        fontSize: 60,
        color: "white",
    },
    btn: {
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: themeColors.darkGreen
    },
    btnText: {
        fontSize: 24,
        color: "white",
    }
});