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

export default function HistoryScreen() {
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
        Latest posture activity appears first
      </Text>

      <View style={styles.todayBadge}>
        <Text style={styles.todayText}>
          TODAY
        </Text>
      </View>

      {historyData.map((item) => {
        const good = item.type === "good";

        return (
          <View
            key={item.id}
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

              <View style={styles.topRow}>

                <Text
                  style={[
                    styles.condition,
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

              <Text style={styles.angle}>
                Back angle: {item.angle}°
              </Text>

              <Text style={styles.duration}>
                Duration: {item.duration}
              </Text>

              {good ? (
                <View style={styles.metaRow}>
                  <Ionicons
                    name="refresh-outline"
                    size={13}
                    color={COLORS.muted}
                  />

                  <Text style={styles.metaText}>
                    Last updated:{" "}
                    {item.lastUpdated}
                  </Text>
                </View>
              ) : (
                <View style={styles.metaRow}>
                  <Ionicons
                    name="notifications-outline"
                    size={13}
                    color={COLORS.coral}
                  />

                  <Text
                    style={[
                      styles.metaText,
                      {
                        color: COLORS.coral,
                      },
                    ]}
                  >
                    Notification:{" "}
                    {item.notificationTime}
                  </Text>
                </View>
              )}

            </View>

          </View>
        );
      })}

    </ScrollView>
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

    borderLeftWidth: 5,

    padding: 15,

    marginBottom: 12,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,

    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  condition: {
    fontSize: 14,
    fontWeight: "900",
    flex: 1,
  },

  time: {
    fontSize: 12,
    color: COLORS.muted,
  },

  angle: {
    color: COLORS.text,
    fontSize: 13,
    marginTop: 8,
  },

  duration: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 4,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  metaText: {
    color: COLORS.muted,
    fontSize: 11,
    marginLeft: 5,
  },
});