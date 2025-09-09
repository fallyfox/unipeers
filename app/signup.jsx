import { Link } from "expo-router";
import { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { themeColors } from "../utils/theme.utils";

export default function Signup () {
    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 
    const [passwordConfirmation,setPasswordConfirmation] = useState(""); 

    return (
        <View style={styles.wrapper}>
            {/* <StatusBar translucent={false} barStyle="light-content"/> */}
            {/* header group */}
            <View style={styles.header}>
                <Text style={styles.brandName}>Copreneur</Text>
                <Text style={styles.brandDesc}>Where entrepreneurs collaborate with developers</Text>
            </View>

            {/* body group */}
            <View style={styles.body}>
                <Text style={styles.bodyText}>Create account</Text>

                {/* create account with google */}
                <TouchableOpacity style={styles.signInBtn}>
                    <Image
                    style={{
                        width: 36,
                        height: 36,
                    }}
                    source={require("../assets/images/google.png")}/>
                    <Text style={styles.signInText}>Google</Text>
                </TouchableOpacity>

                {/* OR */}
                <View style={styles.orSec}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line}></View>
                </View>

                {/* create account with email and password */}
                <View style={styles.emailSec}>
                    <TextInput
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="eg. johndoe@example.com"
                    value={email}
                    onChangeText={(text) => setEmail(text)}/>
                    
                    <TextInput
                    secureTextEntry={true}
                    keyboardType="default"
                    style={styles.input}
                    placeholder="create password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}/>
                    
                    {password.length >= 8 &&
                    <TextInput
                    secureTextEntry={true}
                    keyboardType="default"
                    style={styles.input}
                    placeholder="confirm password"
                    value={passwordConfirmation}
                    onChangeText={(text) => setPasswordConfirmation(text)}/>}

                    {password.length >= 8 && password == passwordConfirmation &&
                    <TouchableOpacity style={styles.signInBtn}>
                        <Text style={styles.signInText}>Create Account</Text>
                    </TouchableOpacity>}
                </View>

                {/* already have an account? */}
                <View style={styles.already}>
                    <Text style={styles.alreadyText}>Already have an account?</Text>
                    <Link href="/signin" style={styles.alreadyLink}>Go to sign in</Link>
                </View>
            </View>

            {/* bottom group */}
            <View style={styles.footer}>
                <Link href="/about" style={styles.footerLink}>About copreneur</Link>
                <Link href="/about" style={styles.footerLink}>Home</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: themeColors.gray100,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 40
   }, 
   header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8
   },
   brandName: {
    fontSize: 46,
    fontWeight: "bold",
    color: themeColors.gray300
   },
   brandDesc: {
    fontWeight: "bold",
    color: themeColors.gray300,
    textAlign: "center"
   },
   body: {
    display: "flex",
    gap: 18,
    paddingHorizontal: 20,
   },
   bodyText: {
    color: themeColors.gray300,
    fontSize: 18
   },
   already: {
    display: "flex",
    flexDirection: "row",
    gap: 4
   },
   alreadyText: {
    color: themeColors.gray300
   },
   alreadyLink: {
    color: themeColors.gray300,
    fontWeight: "bold"
   },
   signInBtn: {
    height: 56,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: themeColors.gray300,
    borderRadius: 4
   },
   signInText: {
    color: themeColors.gray100,
    fontSize: 22
   },
   footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
   },
   footerLink: {
    color: themeColors.gray300,
    fontSize: 12
   },
   orSec: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
   },
   orText: {
    fontSize: 16,
    color: themeColors.gray300
   },
   line: {
    width: "30%",
    borderTopWidth: 1,
    borderTopColor: themeColors.gray100
   },
   emailSec: {
    gap: 8
   },
   input: {
    borderWidth: 1,
    borderColor: themeColors.gray300,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 6
   }
});