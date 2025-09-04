import { StatusBar, StyleSheet, View } from "react-native";


export default function UpdateEvent () {
    return (
        <View style={styles.wrapper}>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 4,
        paddingTop: StatusBar.currentHeight
    }
})