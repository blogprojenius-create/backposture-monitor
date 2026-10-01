import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  LinearGradient,
} from "expo-linear-gradient";

import {
  Ionicons,
} from "@expo/vector-icons";

import Logo from "../components/Logo";
import { COLORS } from "../styles/colors";

export default function GuestScreen({
  navigation,
}) {
  return (
    <LinearGradient
      colors={[
        "#EFFAF4",
        "#F5F3FF",
        "#FFF7F4",
      ]}
      style={styles.container}
    >

      <Logo size={82} />

      <Text style={styles.title}>
        Explore PostureCare
      </Text>

      <Text style={styles.description}>
        Learn how posture monitoring can help
        you build healthier everyday habits.
      </Text>

      <View style={styles.card}>

        <View style={styles.iconCircle}>
          <Ionicons
            name="compass-outline"
            size={28}
            color={COLORS.purpleDark}
          />
        </View>

        <Text style={styles.cardTitle}>
          Guest Mode
        </Text>

        <Text style={styles.cardText}>
          Explore the app, but personal posture
          details, history and analytics remain
          available only after login.
        </Text>

      </View>

      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() =>
          navigation.navigate("Login")
        }
      >
        <Text style={styles.exploreText}>
          LOGIN TO EXPLORE
        </Text>

        <Ionicons
          name="arrow-forward"
          size={18}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          navigation.goBack()
        }
      >
        <Text style={styles.backText}>
          Back to Login
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 22,

    fontSize: 28,
    fontWeight: "900",

    color: COLORS.blueDark,

    textAlign: "center",
  },

  description: {
    marginTop: 10,

    color: COLORS.muted,

    fontSize: 14,
    lineHeight: 21,

    textAlign: "center",
  },

  card: {
    width: "100%",

    backgroundColor: COLORS.white,

    borderRadius: 20,

    padding: 22,

    alignItems: "center",

    marginTop: 28,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,

    backgroundColor: "#F2E9FF",

    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    marginTop: 13,

    color: COLORS.blueDark,

    fontSize: 18,
    fontWeight: "900",
  },

  cardText: {
    marginTop: 7,

    color: COLORS.muted,

    fontSize: 13,
    lineHeight: 20,

    textAlign: "center",
  },

  exploreButton: {
    width: "100%",
    height: 54,

    marginTop: 24,

    borderRadius: 14,

    backgroundColor: COLORS.purpleDark,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 8,
  },

  exploreText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "900",
  },

  backButton: {
    marginTop: 18,
  },

  backText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: "700",
  },
});