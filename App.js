import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addGoalHandler(goal) {
    setGoalsList((currentList) => [
      ...currentList,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentList) => {
      return currentList.filter((goal) => goal.id !== id);
    });
  }

  function resetGoalsHandler() {
    setGoalsList([]);
  }

  function startAddGoalHandler() {
    setShowModal((showModal) => !showModal);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("./assets/images/goal.png")}
        />
        <Text style={styles.title}>Goal Tracker!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Goal"
          color="#2b3426"
          onPress={startAddGoalHandler}
        />
        <Button
          title="Delete All"
          onPress={resetGoalsHandler}
          color="#2b3426"
          disabled={goalsList.length === 0}
        />
      </View>

      {goalsList.length > 0 && (
        <Text style={styles.text}>Long press on a goal to delete it.</Text>
      )}

      <GoalInput
        addGoalHandler={addGoalHandler}
        showModal={showModal}
        closeModal={startAddGoalHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ede3de",
  },
  listContainer: {
    flex: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#b6823a",
    textAlign: "left",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    color: "#b6823a",
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    transform: [{ translateY: -12 }],
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});
