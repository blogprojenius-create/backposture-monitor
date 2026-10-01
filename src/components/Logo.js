import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logo({ size = 82 }) {
  return (
    <View
      style={[
        styles.logo,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Text
        style={[
          styles.icon,
          {
            fontSize: size * 0.4,
          },
        ]}
      >
        ✚
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  icon: {
    color: "#6DBE7C",
    fontWeight: "900",
  },
});