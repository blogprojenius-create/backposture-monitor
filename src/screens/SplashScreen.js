import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  LinearGradient,
} from "expo-linear-gradient";

import Logo from "../components/Logo";
import { COLORS } from "../styles/colors";

export default function SplashScreen({
  navigation,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[
        "#EAF8F2",
        "#F2F4FF",
        "#FFF2F2",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <Logo size={105} />

      <Text style={styles.appName}>
        PostureCare
      </Text>

      <Text style={styles.quote}>
        Better posture. Better comfort.
      </Text>

      <Text style={styles.description}>
        Smart monitoring for a healthier everyday life
      </Text>

      <View style={styles.loadingRow}>
        <View style={styles.dot} />

        <Text style={styles.loading}>
          Preparing your dashboard...
        </Text>
      </View>

      <Text style={styles.version}>
        Version 1.0.0
      </Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  appName: {
    color: COLORS.blueDark,
    fontSize: 36,
    fontWeight: "900",
    marginTop: 22,
  },

  quote: {
    color: COLORS.purpleDark,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
    textAlign: "center",
  },

  description: {
    color: COLORS.muted,
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.green,
    marginRight: 8,
  },

  loading: {
    fontSize: 12,
    color: COLORS.muted,
  },

  version: {
    position: "absolute",
    bottom: 30,
    fontSize: 11,
    color: COLORS.muted,
  },
});