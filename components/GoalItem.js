import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ item, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onLongPress={onDeleteItem.bind(this, item.id)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#4a5440",
  },
  goalText: {
    color: "#ede3de",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#b6823a",
    borderRadius: 6,
  },
});
