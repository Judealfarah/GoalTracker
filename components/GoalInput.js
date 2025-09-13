import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useState } from "react";

function GoalInput({ showModal, addGoalHandler, closeModal }) {
  const [goal, setGoal] = useState("");

  function inputHandler(text) {
    setGoal(text);
  }

  function onAddGoal() {
    addGoalHandler(goal);
    setGoal("");
    closeModal();
  }

  return (
    <Modal transparent visible={showModal} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder="Enter your goal"
            onChangeText={inputHandler}
            placeholderTextColor="#b6823a"
            selectionColor="#b6823a"
            value={goal}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={onAddGoal} color="#ede3de" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(43, 52, 38, 0.7)", // dark semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#ede3de", // light background
    borderRadius: 12,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  closeButton: {
    position: "absolute",
    top: 2,
    right: 8,
    zIndex: 1,
  },
  closeText: {
    fontSize: 30,
    color: "#b6823a",
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#b6823a",
    width: "100%",
    padding: 14,
    borderRadius: 8,
    color: "#4a5440",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#2b3426",
    borderRadius: 6,
    overflow: "hidden",
  },
});
