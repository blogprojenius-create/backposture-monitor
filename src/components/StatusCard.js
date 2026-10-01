import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  LinearGradient,
} from "expo-linear-gradient";

import {
  Ionicons,
} from "@expo/vector-icons";

import { COLORS } from "../styles/colors";

export default function StatusCard({
  posture,
  angle,
  condition,
  duration,
  updated,
}) {
  const good = posture === "Good Posture";

  return (
    <LinearGradient
      colors={
        good
          ? ["#EAF9F0", "#EFF8FF"]
          : ["#FFF5EA", "#FFF0F0"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.card,
        {
          borderColor: good
            ? COLORS.green
            : COLORS.coral,
        },
      ]}
    >
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: good
              ? "#E5F7EA"
              : "#FFE8E3",
          },
        ]}
      >
        <Ionicons
          name={
            good
              ? "checkmark"
              : "warning-outline"
          }
          size={28}
          color={
            good
              ? COLORS.green
              : COLORS.coral
          }
        />
      </View>

      <Text
        style={[
          styles.posture,
          {
            color: good
              ? COLORS.green
              : COLORS.coral,
          },
        ]}
      >
        {posture}
      </Text>

      <Text style={styles.angle}>
        {angle}°
      </Text>

      <Text style={styles.angleLabel}>
        Current Back Angle
      </Text>

      <View style={styles.detailRow}>
        <Ionicons
          name="heart-outline"
          size={15}
          color={COLORS.muted}
        />

        <Text style={styles.detail}>
          {condition}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Ionicons
          name="time-outline"
          size={15}
          color={COLORS.muted}
        />

        <Text style={styles.detail}>
          Sitting {duration}
        </Text>
      </View>

      <Text style={styles.updated}>
        Last updated {updated}
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 22,

    alignItems: "center",

    paddingVertical: 22,
    paddingHorizontal: 18,

    marginTop: 18,

    minHeight: 300,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,

    alignItems: "center",
    justifyContent: "center",
  },

  posture: {
    fontSize: 21,
    fontWeight: "900",
    marginTop: 13,
  },

  angle: {
    fontSize: 50,
    fontWeight: "900",
    color: COLORS.blueDark,
    marginTop: 5,
  },

  angleLabel: {
    fontSize: 13,
    color: COLORS.muted,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  detail: {
    color: COLORS.muted,
    fontSize: 13,
    marginLeft: 6,
  },

  updated: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 14,
  },
});