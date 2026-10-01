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

const tabs = [
  {
    key: "Status",
    label: "Status",
    icon: "heart-outline",
    activeIcon: "heart",
  },
  {
    key: "Graph",
    label: "Graph",
    icon: "analytics-outline",
    activeIcon: "analytics",
  },
  {
    key: "History",
    label: "History",
    icon: "time-outline",
    activeIcon: "time",
  },
];

export default function BottomNavigation({
  activeTab,
  setActiveTab,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(
            insets.bottom,
            8
          ),
        },
      ]}
    >
      {tabs.map((tab) => {
        const active = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() =>
              setActiveTab(tab.key)
            }
            activeOpacity={0.75}
          >
            <View
              style={[
                styles.iconWrapper,
                active &&
                  styles.activeIconWrapper,
              ]}
            >
              <Ionicons
                name={
                  active
                    ? tab.activeIcon
                    : tab.icon
                }
                size={21}
                color={
                  active
                    ? COLORS.purpleDark
                    : COLORS.muted
                }
              />
            </View>

            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 66,

    paddingTop: 7,
    paddingHorizontal: 14,

    backgroundColor: COLORS.white,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: COLORS.border,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: -3,
    },

    elevation: 10,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapper: {
    width: 38,
    height: 30,

    borderRadius: 15,

    alignItems: "center",
    justifyContent: "center",
  },

  activeIconWrapper: {
    backgroundColor: "#F2E9FF",
  },

  label: {
    fontSize: 11,
    fontWeight: "600",
    color: COLORS.muted,
    marginTop: 2,
  },

  activeLabel: {
    color: COLORS.purpleDark,
    fontWeight: "800",
  },
});