import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

import {
    Ionicons,
} from "@expo/vector-icons";

import CountryPicker from
    "react-native-country-picker-modal";

import Logo from "../components/Logo";
import { COLORS } from "../styles/colors";

const DUMMY_PHONE = "9876543210";
const DUMMY_PASSWORD = "123456";

export default function LoginScreen({
    navigation,
}) {
    const [countryCode, setCountryCode] =
        useState("IN");

    const [callingCode, setCallingCode] =
        useState("91");

    const [phone, setPhone] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [countryVisible, setCountryVisible] =
        useState(false);

    const handleLogin = () => {
        if (!phone || !password) {
            Alert.alert(
                "Missing Details",
                "Please enter mobile number and password."
            );
            return;
        }

        const normalizedPhone =
            phone.replace(/\D/g, "");

        if (
            normalizedPhone === DUMMY_PHONE &&
            password === DUMMY_PASSWORD
        ) {
            navigation.replace("Dashboard");
            return;
        }

        Alert.alert(
            "Login Failed",
            "Invalid mobile number or password."
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={
                Platform.OS === "ios"
                    ? "padding"
                    : undefined
            }
        >
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >

                <Logo size={78} />

                <Text style={styles.appName}>
                    PostureCare
                </Text>

                <Text style={styles.title}>
                    Welcome Back
                </Text>

                <Text style={styles.subtitle}>
                    Your posture, monitored with care
                </Text>

                <View style={styles.form}>

                    <Text style={styles.label}>
                        Mobile Number
                    </Text>

                    <View style={styles.phoneWrapper}>

                        <TouchableOpacity
                            style={styles.countryButton}
                            onPress={() =>
                                setCountryVisible(true)
                            }
                        >
                            <CountryPicker
                                countryCode={countryCode}
                                visible={countryVisible}
                                withFilter
                                withFlag
                                withCallingCode
                                withEmoji
                                onClose={() =>
                                    setCountryVisible(false)
                                }
                                onSelect={(country) => {
                                    setCountryCode(
                                        country.cca2
                                    );

                                    setCallingCode(
                                        country.callingCode?.[0] ||
                                        "91"
                                    );

                                    setCountryVisible(false);
                                }}
                            />

                            <Text style={styles.callingCode}>
                                +{callingCode}
                            </Text>

                            <Ionicons
                                name="chevron-down"
                                size={15}
                                color={COLORS.muted}
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={styles.phoneInput}
                            placeholder="Mobile number"
                            placeholderTextColor="#A3ADB3"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                            maxLength={15}
                        />

                    </View>

                    <Text style={styles.label}>
                        Password
                    </Text>

                    <View style={styles.passwordWrapper}>

                        <Ionicons
                            name="lock-closed-outline"
                            size={19}
                            color={COLORS.muted}
                        />

                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="#A3ADB3"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity
                            onPress={() =>
                                setShowPassword(
                                    (value) => !value
                                )
                            }
                        >
                            <Ionicons
                                name={
                                    showPassword
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
                                size={20}
                                color={COLORS.muted}
                            />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        style={styles.forgot}
                        onPress={() =>
                            Alert.alert(
                                "Forgot Password",
                                "Password reset will be connected to Firebase later."
                            )
                        }
                    >
                        <Text style={styles.forgotText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginText}>
                            LOGIN
                        </Text>

                        <Ionicons
                            name="arrow-forward"
                            size={19}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.guestButton}
                        onPress={() =>
                            navigation.replace("Dashboard", {
                                isGuest: true,
                            })
                        }
                    >
                        <Ionicons
                            name="compass-outline"
                            size={19}
                            color={COLORS.purpleDark}
                        />

                        <Text style={styles.guestText}>
                            Explore as Guest
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.demoBox}>

                        <Text style={styles.demoTitle}>
                            Practice Login
                        </Text>

                        <Text style={styles.demoText}>
                            Mobile: 9876543210
                        </Text>

                        <Text style={styles.demoText}>
                            Password: 123456
                        </Text>

                    </View>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
    },

    appName: {
        marginTop: 12,
        color: COLORS.green,
        fontSize: 17,
        fontWeight: "900",
        textAlign: "center",
    },

    title: {
        marginTop: 8,
        color: COLORS.blueDark,
        fontSize: 29,
        fontWeight: "900",
        textAlign: "center",
    },

    subtitle: {
        marginTop: 6,
        color: COLORS.muted,
        fontSize: 14,
        textAlign: "center",
    },

    form: {
        marginTop: 30,
    },

    label: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 7,
    },

    phoneWrapper: {
        height: 54,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: COLORS.white,

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 14,

        marginBottom: 17,

        overflow: "hidden",
    },

    countryButton: {
        height: "100%",
        paddingHorizontal: 12,

        flexDirection: "row",
        alignItems: "center",

        borderRightWidth: 1,
        borderRightColor: COLORS.border,
    },

    callingCode: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: "700",
        marginHorizontal: 5,
    },

    phoneInput: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 13,

        color: COLORS.text,
        fontSize: 15,
    },

    passwordWrapper: {
        height: 54,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,

        backgroundColor: COLORS.white,

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 14,
    },

    passwordInput: {
        flex: 1,
        height: "100%",
        marginLeft: 10,

        color: COLORS.text,
        fontSize: 15,
    },

    forgot: {
        alignSelf: "flex-end",
        marginTop: 9,
        marginBottom: 18,
    },

    forgotText: {
        color: COLORS.purpleDark,
        fontSize: 13,
        fontWeight: "700",
    },

    loginButton: {
        height: 54,

        borderRadius: 14,

        backgroundColor: COLORS.green,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        gap: 8,
    },

    loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "900",
    },

    guestButton: {
        height: 52,

        borderRadius: 14,

        borderWidth: 1,
        borderColor: COLORS.purple,

        backgroundColor: "#FBF8FF",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        gap: 8,

        marginTop: 12,
    },

    guestText: {
        color: COLORS.purpleDark,
        fontSize: 15,
        fontWeight: "800",
    },

    demoBox: {
        marginTop: 22,

        padding: 14,

        borderRadius: 14,

        backgroundColor: "#EEF9F4",
    },

    demoTitle: {
        color: COLORS.blueDark,
        fontSize: 13,
        fontWeight: "900",
        marginBottom: 4,
    },

    demoText: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 2,
    },
});