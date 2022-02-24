import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface IButtonProps {
  onPress: () => void;
  title: string;
}

export const Button = (props: IButtonProps): React.ReactElement => {
  const { onPress, title } = props;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
