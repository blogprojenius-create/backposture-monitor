import React from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import StatusCard from "../components/StatusCard";

import {
  currentStatus,
  previousDays,
} from "../data/dummyData";

import { COLORS } from "../styles/colors";

export default function StatusScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.pageTitle}>
        Current Status
      </Text>

      <Text style={styles.pageSubtitle}>
        Live posture monitoring
      </Text>

      <StatusCard
        posture={currentStatus.posture}
        angle={currentStatus.angle}
        condition={currentStatus.condition}
        duration={
          currentStatus.sittingDuration
        }
        updated={currentStatus.lastUpdated}
      />

      <Text style={styles.sectionTitle}>
        Today's Overview
      </Text>

      <View style={styles.grid}>

        <MetricCard
          icon="time-outline"
          title="Sitting Duration"
          value={
            currentStatus.sittingDuration
          }
        />

        <MetricCard
          icon="warning-outline"
          title="Alert Count"
          value={currentStatus.alertCount}
        />

        <MetricCard
          icon="hardware-chip-outline"
          title="Duration"
          value={
            currentStatus.durationHours
          }
        />

        <MetricCard
          icon={
            currentStatus.deviceConnected
              ? "checkmark-circle-outline"
              : "close-circle-outline"
          }
          title="Device"
          value={
            currentStatus.deviceConnected
              ? "Connected"
              : "Disconnected"
          }
          color={
            currentStatus.deviceConnected
              ? COLORS.green
              : COLORS.coral
          }
        />

      </View>

      <View style={styles.updatedCard}>

        <Ionicons
          name="refresh-outline"
          size={19}
          color={COLORS.purpleDark}
        />

        <Text style={styles.updatedText}>
          Last updated{" "}
          {currentStatus.lastUpdated}
        </Text>

      </View>

      <Text style={styles.sectionTitle}>
        Previous Days
      </Text>

      {previousDays.map((day) => {
        const good =
          day.posture === "Good Posture";

        return (
          <View
            key={day.id}
            style={styles.dayCard}
          >

            <View style={styles.dayHeader}>
              <Text style={styles.dayDate}>
                {day.date}
              </Text>

              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: good
                      ? "#E9F8EF"
                      : "#FFF0E3",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    {
                      color: good
                        ? COLORS.green
                        : COLORS.coral,
                    },
                  ]}
                >
                  {day.posture}
                </Text>
              </View>
            </View>

            <View style={styles.dayValues}>

              <View>
                <Text style={styles.smallLabel}>
                  Back Angle
                </Text>

                <Text style={styles.dayValue}>
                  {day.angle}°
                </Text>
              </View>

              <View>
                <Text style={styles.smallLabel}>
                  Duration
                </Text>

                <Text style={styles.dayValue}>
                  {day.duration}
                </Text>
              </View>

              <View>
                <Text style={styles.smallLabel}>
                  Alerts
                </Text>

                <Text style={styles.dayValue}>
                  {day.alerts}
                </Text>
              </View>

            </View>

            <Text style={styles.condition}>
              Condition: {day.condition}
            </Text>

          </View>
        );
      })}

    </ScrollView>
  );
}

function MetricCard({
  icon,
  title,
  value,
  color = COLORS.purpleDark,
}) {
  return (
    <View style={styles.metricCard}>

      <View style={styles.metricIcon}>
        <Ionicons
          name={icon}
          size={21}
          color={color}
        />
      </View>

      <Text style={styles.metricTitle}>
        {title}
      </Text>

      <Text
        style={[
          styles.metricValue,
          { color },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {value}
      </Text>

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
    paddingBottom: 28,
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.blueDark,
  },

  pageSubtitle: {
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 4,
  },

  sectionTitle: {
    color: COLORS.blueDark,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 25,
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  metricCard: {
    width: "48%",

    backgroundColor: COLORS.white,

    borderRadius: 17,

    padding: 16,

    marginBottom: 12,
  },

  metricIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,

    backgroundColor: "#F2E9FF",

    alignItems: "center",
    justifyContent: "center",
  },

  metricTitle: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 10,
  },

  metricValue: {
    fontSize: 17,
    fontWeight: "900",
    marginTop: 4,
  },

  updatedCard: {
    backgroundColor: "#EEF9F4",

    borderRadius: 15,

    padding: 14,

    flexDirection: "row",
    alignItems: "center",

    marginTop: 5,
  },

  updatedText: {
    color: COLORS.muted,
    fontSize: 12,
    marginLeft: 8,
  },

  dayCard: {
    backgroundColor: COLORS.white,

    borderRadius: 18,

    padding: 17,

    marginBottom: 12,
  },

  dayHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dayDate: {
    color: COLORS.blueDark,
    fontSize: 16,
    fontWeight: "900",
  },

  badge: {
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "800",
  },

  dayValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },

  smallLabel: {
    color: COLORS.muted,
    fontSize: 11,
  },

  dayValue: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "900",
    marginTop: 3,
  },

  condition: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 14,
  },
});