import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "../styles/colors";

export default function AppHeader({ onLogout }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 8,
        },
      ]}
    >
      <View>
        <Text style={styles.title}>PostureCare</Text>

        <Text style={styles.subtitle}>
          Smart posture monitoring
        </Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onLogout}
        activeOpacity={0.7}
      >
        <Ionicons
          name="log-out-outline"
          size={21}
          color={COLORS.purpleDark}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 82,

    paddingHorizontal: 20,
    paddingBottom: 12,

    backgroundColor: COLORS.white,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  title: {
    fontSize: 21,
    fontWeight: "900",
    color: COLORS.blueDark,
  },

  subtitle: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },

  logoutButton: {
    width: 42,
    height: 42,
    borderRadius: 21,

    backgroundColor: "#F2E9FF",

    alignItems: "center",
    justifyContent: "center",
  },
});