import React, { useState } from "react";

import {
  View,
  Alert,
  StyleSheet,
} from "react-native";

import AppHeader from "../components/AppHeader";
import BottomNavigation from "../components/BottomNavigation";

import StatusScreen from "./StatusScreen";
import GraphScreen from "./GraphScreen";
import HistoryScreen from "./HistoryScreen";

export default function DashboardScreen({
  navigation,
  route,
}) {
  const [activeTab, setActiveTab] = useState("Status");

  const isGuest =
    route?.params?.isGuest === true;

  const handleLogout = () => {
    navigation.replace("Login");
  };

  const renderContent = () => {
    if (activeTab === "Graph") {
      return <GraphScreen isGuest={isGuest} />;
    }

    if (activeTab === "History") {
      return <HistoryScreen isGuest={isGuest} />;
    }

    return <StatusScreen isGuest={isGuest} />;
  };

  return (
    <View style={styles.container}>

      {/* FIXED TOP HEADER */}
      <AppHeader
        onLogout={handleLogout}
        isGuest={isGuest}
      />

      {/* SCROLLABLE MIDDLE */}
      <View style={styles.middle}>
        {renderContent()}
      </View>

      {/* FIXED BOTTOM NAV */}
      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FB",
  },

  middle: {
    flex: 1,
  },
});