import React from "react";

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import Svg, {
  Line,
  Polyline,
  Circle,
  Text as SvgText,
} from "react-native-svg";

import { COLORS } from "../styles/colors";

export default function AngleChart({
  title,
  data,
}) {
  const { width } =
    useWindowDimensions();

  const chartWidth = Math.max(
    width - 76,
    290
  );

  const chartHeight = 220;

  const left = 38;
  const right = 12;
  const top = 16;
  const bottom = 38;

  const plotWidth =
    chartWidth - left - right;

  const plotHeight =
    chartHeight - top - bottom;

  const maxAngle = 30;

  const points = data.map(
    (item, index) => {
      const x =
        left +
        (index /
          (data.length - 1)) *
          plotWidth;

      const y =
        top +
        plotHeight -
        (item.angle / maxAngle) *
          plotHeight;

      return {
        ...item,
        x,
        y,
      };
    }
  );

  const pointString =
    points
      .map(
        (point) =>
          `${point.x},${point.y}`
      )
      .join(" ");

  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.chartWrapper}>

        <Svg
          width={chartWidth}
          height={chartHeight}
        >

          {[0, 10, 20, 30].map(
            (value) => {
              const y =
                top +
                plotHeight -
                (value / maxAngle) *
                  plotHeight;

              return (
                <React.Fragment
                  key={value}
                >

                  <Line
                    x1={left}
                    y1={y}
                    x2={
                      chartWidth -
                      right
                    }
                    y2={y}
                    stroke="#E6EEEC"
                    strokeWidth="1"
                  />

                  <SvgText
                    x={6}
                    y={y + 4}
                    fontSize="10"
                    fill="#6E7781"
                  >
                    {value}°
                  </SvgText>

                </React.Fragment>
              );
            }
          )}

          <Polyline
            points={pointString}
            fill="none"
            stroke={COLORS.purpleDark}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((point) => (
            <Circle
              key={`${point.time}-${point.angle}`}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#FFFFFF"
              stroke={COLORS.purpleDark}
              strokeWidth="3"
            />
          ))}

          {points.map((point) => (
            <SvgText
              key={`${point.time}-text`}
              x={point.x}
              y={chartHeight - 12}
              textAnchor="middle"
              fontSize="9"
              fill="#6E7781"
            >
              {point.time}
            </SvgText>
          ))}

        </Svg>

      </View>

      <Text style={styles.axisText}>
        Time →
      </Text>

      <Text style={styles.legend}>
        Back angle • degrees
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 17,
    marginBottom: 17,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  title: {
    color: COLORS.blueDark,
    fontSize: 17,
    fontWeight: "900",
  },

  chartWrapper: {
    alignItems: "center",
    marginTop: 10,
  },

  axisText: {
    color: COLORS.muted,
    fontSize: 11,
    textAlign: "right",
    marginTop: -3,
  },

  legend: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 5,
  },
});