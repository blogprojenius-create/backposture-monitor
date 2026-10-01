import React, {
  useState,
} from "react";

import {
  View,
  Alert,
  StyleSheet,
} from "react-native";

import AppHeader from "../components/AppHeader";
import BottomNavigation from
  "../components/BottomNavigation";

import StatusScreen from "./StatusScreen";
import GraphScreen from "./GraphScreen";
import HistoryScreen from "./HistoryScreen";

export default function DashboardScreen({
  navigation,
}) {
  const [activeTab, setActiveTab] =
    useState("Status");

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Do you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () =>
            navigation.replace("Login"),
        },
      ]
    );
  };

  const renderContent = () => {
    if (activeTab === "Graph") {
      return <GraphScreen />;
    }

    if (activeTab === "History") {
      return <HistoryScreen />;
    }

    return <StatusScreen />;
  };

  return (
    <View style={styles.container}>

      {/* FIXED TOP */}
      <AppHeader
        onLogout={handleLogout}
      />

      {/* ONLY MIDDLE AREA SCROLLS */}
      <View style={styles.middle}>
        {renderContent()}
      </View>

      {/* FIXED BOTTOM */}
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