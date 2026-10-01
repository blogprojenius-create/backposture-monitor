import React from "react";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  historyData,
} from "../data/dummyData";

import { COLORS } from "../styles/colors";

export default function HistoryScreen({
  isGuest = false,
}) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        History
      </Text>

      <Text style={styles.subtitle}>
        {isGuest
          ? "History preview — readings are hidden"
          : "Latest posture activity appears first"}
      </Text>

      <View style={styles.todayBadge}>
        <Text style={styles.todayText}>
          TODAY
        </Text>
      </View>

      {isGuest
        ? historyData.map((item) => (
            <GuestHistoryCard
              key={item.id}
            />
          ))
        : historyData.map((item) => (
            <RealHistoryCard
              key={item.id}
              item={item}
            />
          ))}

      {isGuest && (
        <View style={styles.loginCard}>

          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={COLORS.purpleDark}
          />

          <Text style={styles.loginText}>
            Login to view your posture history,
            notifications and readings.
          </Text>

        </View>
      )}

    </ScrollView>
  );
}

function GuestHistoryCard() {
  return (
    <View style={styles.card}>

      <View style={styles.iconCircle}>
        <Ionicons
          name="lock-closed-outline"
          size={21}
          color={COLORS.purpleDark}
        />
      </View>

      <View style={styles.info}>

        <View style={styles.row}>
          <Text style={styles.hiddenTitle}>
            Condition
          </Text>

          <Text style={styles.hiddenValue}>
            —
          </Text>
        </View>

        <Text style={styles.detail}>
          Time: —
        </Text>

        <Text style={styles.detail}>
          Back Angle: —
        </Text>

        <Text style={styles.detail}>
          Notification: —
        </Text>

      </View>

    </View>
  );
}

function RealHistoryCard({
  item,
}) {
  const good = item.type === "good";

  return (
    <View
      style={[
        styles.card,
        {
          borderLeftColor: good
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
              ? "#E9F8EF"
              : "#FFF0EC",
          },
        ]}
      >

        <Ionicons
          name={
            good
              ? "checkmark"
              : "warning-outline"
          }
          size={22}
          color={
            good
              ? COLORS.green
              : COLORS.coral
          }
        />

      </View>

      <View style={styles.info}>

        <View style={styles.row}>
          <Text
            style={[
              styles.hiddenTitle,
              {
                color: good
                  ? COLORS.green
                  : COLORS.coral,
              },
            ]}
          >
            {item.condition}
          </Text>

          <Text style={styles.time}>
            {item.time}
          </Text>
        </View>

        <Text style={styles.detail}>
          Back angle: {item.angle}°
        </Text>

        <Text style={styles.detail}>
          Duration: {item.duration}
        </Text>

        <Text style={styles.detail}>
          {good
            ? `Last updated: ${item.lastUpdated}`
            : `Notification: ${item.notificationTime}`}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  title: {
    color: COLORS.blueDark,
    fontSize: 26,
    fontWeight: "900",
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 4,
  },

  todayBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#F2E9FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 20,
    marginBottom: 13,
  },

  todayText: {
    color: COLORS.purpleDark,
    fontSize: 11,
    fontWeight: "900",
  },

  card: {
    flexDirection: "row",

    backgroundColor: COLORS.white,

    borderRadius: 17,

    borderLeftWidth: 4,
    borderLeftColor: COLORS.purpleDark,

    padding: 15,

    marginBottom: 12,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: "#F2E9FF",

    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hiddenTitle: {
    color: COLORS.purpleDark,
    fontSize: 15,
    fontWeight: "900",
  },

  hiddenValue: {
    color: COLORS.muted,
    fontSize: 15,
    fontWeight: "800",
  },

  time: {
    color: COLORS.muted,
    fontSize: 12,
  },

  detail: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 7,
  },

  loginCard: {
    backgroundColor: "#F5F0FF",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  loginText: {
    flex: 1,
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 9,
  },
});