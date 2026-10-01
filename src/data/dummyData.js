export const currentStatus = {
  posture: "Good Posture",
  angle: 12,
  condition: "Comfortable",
  sittingDuration: "01:35 hrs",
  alertCount: 2,
  lastUpdated: "04:42 PM",
  deviceConnected: true,
  durationHours: "1.58 hrs",
};

export const previousDays = [
  {
    id: "day-1",
    date: "Yesterday",
    posture: "Good Posture",
    angle: 10,
    condition: "Comfortable",
    duration: "02:15 hrs",
    alerts: 1,
  },
  {
    id: "day-2",
    date: "Sep 29",
    posture: "Needs Attention",
    angle: 22,
    condition: "Long sitting",
    duration: "03:20 hrs",
    alerts: 4,
  },
  {
    id: "day-3",
    date: "Sep 28",
    posture: "Good Posture",
    angle: 11,
    condition: "Comfortable",
    duration: "01:45 hrs",
    alerts: 1,
  },
];

export const todayGraph = [
  { time: "09 AM", angle: 8 },
  { time: "10 AM", angle: 12 },
  { time: "11 AM", angle: 10 },
  { time: "12 PM", angle: 18 },
  { time: "01 PM", angle: 15 },
  { time: "02 PM", angle: 24 },
  { time: "03 PM", angle: 17 },
  { time: "04 PM", angle: 12 },
];

export const previousGraphs = [
  {
    id: "g1",
    date: "Yesterday",
    data: [
      { time: "09 AM", angle: 10 },
      { time: "11 AM", angle: 12 },
      { time: "01 PM", angle: 15 },
      { time: "03 PM", angle: 11 },
      { time: "05 PM", angle: 13 },
    ],
  },
  {
    id: "g2",
    date: "Sep 29",
    data: [
      { time: "09 AM", angle: 15 },
      { time: "11 AM", angle: 20 },
      { time: "01 PM", angle: 18 },
      { time: "03 PM", angle: 22 },
      { time: "05 PM", angle: 17 },
    ],
  },
  {
    id: "g3",
    date: "Sep 28",
    data: [
      { time: "09 AM", angle: 8 },
      { time: "11 AM", angle: 11 },
      { time: "01 PM", angle: 10 },
      { time: "03 PM", angle: 13 },
      { time: "05 PM", angle: 9 },
    ],
  },
];

export const historyData = [
  {
    id: "h4",
    time: "04:42 PM",
    condition: "Good Posture",
    angle: 12,
    duration: "20 min",
    type: "good",
    lastUpdated: "04:42 PM",
  },
  {
    id: "h3",
    time: "03:35 PM",
    condition: "Poor Posture",
    angle: 24,
    duration: "4 min",
    type: "bad",
    notificationTime: "03:36 PM",
  },
  {
    id: "h2",
    time: "01:15 PM",
    condition: "Good Posture",
    angle: 9,
    duration: "32 min",
    type: "good",
    lastUpdated: "01:15 PM",
  },
  {
    id: "h1",
    time: "10:30 AM",
    condition: "Poor Posture",
    angle: 27,
    duration: "3 min",
    type: "bad",
    notificationTime: "10:31 AM",
  },
];