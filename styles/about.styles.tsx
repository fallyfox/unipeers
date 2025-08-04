import { themeColors } from "@/utils/theme.utils";
import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: themeColors.darkGray,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    header: {
        display: "flex",
        alignItems: "flex-end"
    },
    title: {
        color: themeColors.lightGreen,
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 4
    },
    body: {

    },
    aboutBlock: {
        display: "flex",
        gap: 6
    },
    aboutText: {
        color: "white"
    },
    featuresBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    featureBlock: {
        backgroundColor: themeColors.darkGreen,
        borderRadius: 8,
        padding: 4
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    featureText: {

    },
    footer: {

    }
});