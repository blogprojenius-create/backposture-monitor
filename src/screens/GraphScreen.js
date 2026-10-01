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

import AngleChart from "../components/AngleChart";

import {
  todayGraph,
  previousGraphs,
} from "../data/dummyData";

import { COLORS } from "../styles/colors";

export default function GraphScreen({
  isGuest = false,
}) {
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
        Back angle against time
      </Text>

      <View style={styles.badge}>
        <View style={styles.dot} />

        <Text style={styles.badgeText}>
          TODAY
        </Text>
      </View>

      {isGuest ? (
        <GuestGraph
          title="Today's Posture Graph"
        />
      ) : (
        <AngleChart
          title="Today's Back Angle"
          data={todayGraph}
        />
      )}

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          Today's Summary
        </Text>

        <View style={styles.summaryRow}>

          <Summary
            label="Best"
            value={isGuest ? "—" : "8°"}
          />

          <Summary
            label="Highest"
            value={isGuest ? "—" : "24°"}
          />

          <Summary
            label="Average"
            value={isGuest ? "—" : "13.3°"}
          />

        </View>

      </View>

      <Text style={styles.previousTitle}>
        Previous Days
      </Text>

      {previousGraphs.map((item) => (

        <View key={item.id}>

          <Text style={styles.dayText}>
            {item.date}
          </Text>

          {isGuest ? (
            <GuestGraph
              title={`${item.date} Posture Graph`}
            />
          ) : (
            <AngleChart
              title={`${item.date} Back Angle`}
              data={item.data}
            />
          )}

        </View>

      ))}

      {isGuest && (
        <View style={styles.loginCard}>

          <Ionicons
            name="lock-closed-outline"
            size={21}
            color={COLORS.purpleDark}
          />

          <Text style={styles.loginText}>
            Login to view actual posture readings
            and graph values.
          </Text>

        </View>
      )}

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

function GuestGraph({
  title,
}) {
  return (
    <View style={styles.guestGraph}>

      <Text style={styles.guestGraphTitle}>
        {title}
      </Text>

      <View style={styles.graphArea}>

        <View style={styles.horizontalLine1} />
        <View style={styles.horizontalLine2} />
        <View style={styles.horizontalLine3} />

        <View style={styles.fakeGraph}>

          <View
            style={[
              styles.fakeSegment,
              {
                transform: [
                  {
                    rotate: "-8deg",
                  },
                ],
              },
            ]}
          />

          <View
            style={[
              styles.fakeSegment,
              {
                transform: [
                  {
                    rotate: "12deg",
                  },
                ],
              },
            ]}
          />

          <View
            style={[
              styles.fakeSegment,
              {
                transform: [
                  {
                    rotate: "-5deg",
                  },
                ],
              },
            ]}
          />

          <View
            style={[
              styles.fakeSegment,
              {
                transform: [
                  {
                    rotate: "9deg",
                  },
                ],
              },
            ]}
          />

        </View>

        <View style={styles.lockOverlay}>
          <View style={styles.lockCircle}>
            <Ionicons
              name="lock-closed-outline"
              size={23}
              color={COLORS.purpleDark}
            />
          </View>

          <Text style={styles.hiddenText}>
            Readings hidden
          </Text>
        </View>

      </View>

      <View style={styles.graphFooter}>
        <Text style={styles.axisPlaceholder}>
          Time
        </Text>

        <Text style={styles.axisPlaceholder}>
          Angle: —
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
    marginTop: 5,
    marginBottom: 12,
  },

  dayText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 6,
  },

  guestGraph: {
    backgroundColor: COLORS.white,
    borderRadius: 19,
    padding: 17,
    marginBottom: 17,
  },

  guestGraphTitle: {
    color: COLORS.blueDark,
    fontSize: 17,
    fontWeight: "900",
  },

  graphArea: {
    height: 190,
    marginTop: 12,
    borderRadius: 14,
    backgroundColor: "#FBFCFD",
    overflow: "hidden",
    position: "relative",
  },

  horizontalLine1: {
    position: "absolute",
    top: 40,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: "#E6EAEA",
  },

  horizontalLine2: {
    position: "absolute",
    top: 95,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: "#E6EAEA",
  },

  horizontalLine3: {
    position: "absolute",
    top: 150,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: "#E6EAEA",
  },

  fakeGraph: {
    position: "absolute",
    left: 25,
    right: 25,
    top: 72,
    flexDirection: "row",
    alignItems: "center",
  },

  fakeSegment: {
    height: 3,
    flex: 1,
    backgroundColor: "#CBB8E8",
    marginHorizontal: -1,
    borderRadius: 3,
  },

  lockOverlay: {
    position: "absolute",
    inset: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.45)",
  },

  lockCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F2E9FF",
    justifyContent: "center",
    alignItems: "center",
  },

  hiddenText: {
    color: COLORS.purpleDark,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
  },

  graphFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  axisPlaceholder: {
    color: COLORS.muted,
    fontSize: 11,
  },

  loginCard: {
    backgroundColor: "#F5F0FF",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  loginText: {
    flex: 1,
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 9,
  },
});