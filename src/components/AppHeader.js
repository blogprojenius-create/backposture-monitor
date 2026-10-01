import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { COLORS } from "../styles/colors";

export default function AppHeader({
  onLogout,
  isGuest = false,
}) {
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
      <View style={styles.left}>

        <View style={styles.titleRow}>

          <Text style={styles.title}>
            PostureCare
          </Text>

          {isGuest && (
            <View style={styles.guestBadge}>
              <Text style={styles.guestBadgeText}>
                GUEST MODE
              </Text>
            </View>
          )}

        </View>

        <Text style={styles.subtitle}>
          Smart posture monitoring
        </Text>

      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={onLogout}
      >
        <Ionicons
          name={
            isGuest
              ? "log-in-outline"
              : "log-out-outline"
          }
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

    elevation: 3,
  },

  left: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 21,
    fontWeight: "900",
    color: COLORS.blueDark,
  },

  guestBadge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: "#F2E9FF",
  },

  guestBadgeText: {
    fontSize: 9,
    fontWeight: "900",
    color: COLORS.purpleDark,
  },

  subtitle: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },

  actionButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F2E9FF",
    alignItems: "center",
    justifyContent: "center",
  },
});