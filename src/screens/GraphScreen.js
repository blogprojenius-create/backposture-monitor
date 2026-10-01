import React from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from "react-native";

import AngleChart from "../components/AngleChart";

import {
  todayGraph,
  previousGraphs,
} from "../data/dummyData";

import { COLORS } from "../styles/colors";

export default function GraphScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Posture Graph
      </Text>

      <Text style={styles.subtitle}>
        Back angle measured across the day
      </Text>

      <View style={styles.badge}>
        <View style={styles.dot} />

        <Text style={styles.badgeText}>
          TODAY
        </Text>
      </View>

      <AngleChart
        title="Today's Back Angle"
        data={todayGraph}
      />

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          Today's Summary
        </Text>

        <View style={styles.summaryRow}>

          <Summary
            label="Best"
            value="8°"
          />

          <Summary
            label="Highest"
            value="24°"
          />

          <Summary
            label="Average"
            value="13.3°"
          />

        </View>

      </View>

      <Text style={styles.previousTitle}>
        Previous Days
      </Text>

      {previousGraphs.map((item) => (
        <View key={item.id}>

          <View style={styles.dayLabel}>
            <Text style={styles.dayText}>
              {item.date}
            </Text>
          </View>

          <AngleChart
            title={`${item.date} Back Angle`}
            data={item.data}
          />

        </View>
      ))}

    </ScrollView>
  );
}

function Summary({
  label,
  value,
}) {
  return (
    <View>
      <Text style={styles.summaryLabel}>
        {label}
      </Text>

      <Text style={styles.summaryValue}>
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

  badge: {
    alignSelf: "flex-start",

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F2E9FF",

    borderRadius: 20,

    paddingHorizontal: 11,
    paddingVertical: 7,

    marginTop: 19,
    marginBottom: 12,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: COLORS.purpleDark,

    marginRight: 7,
  },

  badgeText: {
    color: COLORS.purpleDark,
    fontSize: 11,
    fontWeight: "900",
  },

  summaryCard: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },

  summaryTitle: {
    color: COLORS.blueDark,
    fontSize: 16,
    fontWeight: "900",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  summaryLabel: {
    color: COLORS.muted,
    fontSize: 11,
  },

  summaryValue: {
    color: COLORS.purpleDark,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  previousTitle: {
    color: COLORS.blueDark,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 7,
    marginBottom: 12,
  },

  dayLabel: {
    marginBottom: 5,
  },

  dayText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: "800",
  },
});