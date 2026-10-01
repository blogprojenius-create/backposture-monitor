import React from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  currentStatus,
  previousDays,
} from "../data/dummyData";

import StatusCard from "../components/StatusCard";

import { COLORS } from "../styles/colors";

export default function StatusScreen({
  isGuest = false,
}) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.pageTitle}>
        Current Status
      </Text>

      <Text style={styles.subtitle}>
        {isGuest
          ? "Preview mode — readings are hidden"
          : "Live posture monitoring"}
      </Text>

      {isGuest ? (
        <GuestStatusCard />
      ) : (
        <StatusCard
          posture={currentStatus.posture}
          angle={currentStatus.angle}
          condition={currentStatus.condition}
          duration={currentStatus.sittingDuration}
          updated={currentStatus.lastUpdated}
        />
      )}

      <Text style={styles.sectionTitle}>
        Posture Details
      </Text>

      <View style={styles.grid}>

        <DetailCard
          icon="body-outline"
          title="Posture Condition"
          value={isGuest ? "—" : currentStatus.condition}
        />

        <DetailCard
          icon="scan-outline"
          title="Back Angle"
          value={isGuest ? "—" : `${currentStatus.angle}°`}
        />

        <DetailCard
          icon="time-outline"
          title="Sitting Duration"
          value={
            isGuest
              ? "—"
              : currentStatus.sittingDuration
          }
        />

        <DetailCard
          icon="warning-outline"
          title="Alert Count"
          value={
            isGuest
              ? "—"
              : currentStatus.alertCount
          }
        />

        <DetailCard
          icon="refresh-outline"
          title="Last Updated"
          value={
            isGuest
              ? "—"
              : currentStatus.lastUpdated
          }
        />

        <DetailCard
          icon="hardware-chip-outline"
          title="Device"
          value={
            isGuest
              ? "—"
              : currentStatus.deviceConnected
                ? "Connected"
                : "Disconnected"
          }
        />

      </View>

      <Text style={styles.sectionTitle}>
        Previous Days
      </Text>

      {isGuest ? (
        previousDays.map((day) => (
          <PreviousDayGuest
            key={day.id}
            date={day.date}
          />
        ))
      ) : (
        previousDays.map((day) => (
          <PreviousDayCard
            key={day.id}
            day={day}
          />
        ))
      )}

      {isGuest && (
        <LoginPrompt />
      )}

    </ScrollView>
  );
}

function GuestStatusCard() {
  return (
    <View style={styles.guestStatusCard}>

      <View style={styles.lockCircle}>
        <Ionicons
          name="lock-closed-outline"
          size={28}
          color={COLORS.purpleDark}
        />
      </View>

      <Text style={styles.guestStatusTitle}>
        Current Status
      </Text>

      <Text style={styles.guestDash}>
        —
      </Text>

      <Text style={styles.guestStatusText}>
        Login to view posture readings
      </Text>

    </View>
  );
}

function DetailCard({
  icon,
  title,
  value,
}) {
  return (
    <View style={styles.detailCard}>

      <View style={styles.iconCircle}>
        <Ionicons
          name={icon}
          size={20}
          color={COLORS.purpleDark}
        />
      </View>

      <Text style={styles.detailTitle}>
        {title}
      </Text>

      <Text style={styles.detailValue}>
        {value}
      </Text>

    </View>
  );
}

function PreviousDayGuest({
  date,
}) {
  return (
    <View style={styles.previousCard}>

      <View style={styles.previousLeft}>

        <Text style={styles.previousDate}>
          {date}
        </Text>

        <Text style={styles.previousText}>
          Posture Condition: —
        </Text>

        <Text style={styles.previousText}>
          Back Angle: —
        </Text>

        <Text style={styles.previousText}>
          Duration: —
        </Text>

      </View>

      <Ionicons
        name="lock-closed-outline"
        size={22}
        color={COLORS.purpleDark}
      />

    </View>
  );
}

function PreviousDayCard({
  day,
}) {
  return (
    <View style={styles.previousCard}>

      <View style={styles.previousLeft}>

        <Text style={styles.previousDate}>
          {day.date}
        </Text>

        <Text style={styles.previousText}>
          {day.posture}
        </Text>

        <Text style={styles.previousText}>
          Back Angle: {day.angle}°
        </Text>

        <Text style={styles.previousText}>
          Duration: {day.duration}
        </Text>

      </View>

      <Text style={styles.previousAlert}>
        {day.alerts} alerts
      </Text>

    </View>
  );
}

function LoginPrompt() {
  return (
    <TouchableOpacity
      style={styles.loginButton}
      activeOpacity={0.8}
    >
      <Ionicons
        name="lock-open-outline"
        size={18}
        color="#FFFFFF"
      />

      <Text style={styles.loginButtonText}>
        LOGIN TO VIEW DATA
      </Text>
    </TouchableOpacity>
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

  pageTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.blueDark,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 4,
  },

  guestStatusCard: {
    backgroundColor: "#F5F0FF",
    borderWidth: 1,
    borderColor: "#DCCBFA",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 26,
    marginTop: 18,
  },

  lockCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  guestStatusTitle: {
    marginTop: 13,
    color: COLORS.blueDark,
    fontSize: 19,
    fontWeight: "900",
  },

  guestDash: {
    fontSize: 42,
    fontWeight: "900",
    color: COLORS.muted,
    marginTop: 7,
  },

  guestStatusText: {
    color: COLORS.muted,
    fontSize: 13,
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

  detailCard: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 17,
    padding: 15,
    marginBottom: 12,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#F2E9FF",
    alignItems: "center",
    justifyContent: "center",
  },

  detailTitle: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 10,
  },

  detailValue: {
    fontSize: 18,
    fontWeight: "900",
    color: COLORS.blueDark,
    marginTop: 4,
  },

  previousCard: {
    backgroundColor: COLORS.white,
    borderRadius: 17,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  previousLeft: {
    flex: 1,
  },

  previousDate: {
    color: COLORS.blueDark,
    fontSize: 16,
    fontWeight: "900",
  },

  previousText: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 5,
  },

  previousAlert: {
    color: COLORS.coral,
    fontSize: 12,
    fontWeight: "700",
  },

  loginButton: {
    height: 54,
    backgroundColor: COLORS.purpleDark,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },
});