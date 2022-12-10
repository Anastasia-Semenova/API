import React from "react";
import { View, StyleSheet } from "react-native";

const Box = ({ size = 100, color }) => (
  <View
    style={{
      width: parseInt(size),
      height: parseInt(size),
      backgroundColor: color,
      margin: 4,
    }}
  />
);

export default Box;