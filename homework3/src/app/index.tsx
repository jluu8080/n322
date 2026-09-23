// import * as Device from 'expo-device';
import {
  Alert,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

//Icon Imports
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
// import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//Foundational Imports
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  //Breakdown
  //value, function
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const [errorState, setShowError] = useState(false);

  //Either store a number or nothing at all
  const [editState, setEditState] = useState<number | null>(null);

  const [editText, setEditText] = useState("");

  // const isWeb = Platform.OS === "web";
  // const isMobileDevice = Platform.OS ===  "ios" || Platform.OS === 'android';

  //Adding an item to tasks
  function addItem() {
    //Ensures no one adds an empty item.
    if (item.trim() === "") {
      //Finding out which device the user is on
      if (Platform.OS === "web") {
        setShowError(true);
      } else if (Platform.OS === "android" || Platform.OS === "ios") {
        Alert.alert("Error", "Can't add an empty task...");
      }
      return;
    }

    //The ... adds the item at the end of the array.
    setTasks([...tasks, item.trim()]); //What the heck is this?
    setShowError(false); //Sets the Error Text Visibility to false.
    setItem("");
  }

  //Deletes Tasks
  function deleteItem(index: number) {
    //Removes the selected item from the grocery list via filtering it out from the array.
    //.filter(callBackFunction, argument
    const newtasks = tasks.filter(
      (item, itemIndex) => itemIndex !== index, //The => itemIndex !== index is essentially the whole callBack Function. If an item !== this index add it to the new array. Otherwise, skip it.
    );

    editItem(index);
    setTasks(newtasks);
  }

  //Edit Tasks
  function editItem(index: number) {
    setEditState(index);
    setEditText(tasks[index]);
  }

  //Exit Edit for an Item
  function exitEdit(index: number) {
    setEditState(null);
  }

  //Save Edit
  function saveEdit(index: number) {
    //Makes a copy
    const newTasks = [...tasks];

    //At the index passed, set the edited Text in which is trimmed of spaces
    newTasks[index] = editText.trim();

    //Sets the new copy of tasks
    setTasks(newTasks);
    setEditState(null);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>To-Do-List</Text>

        {/* If a user adds an empty/blank task, an error will show. Else nothing happens */}
        {errorState && (
          <Text style={styles.errorText}>Error: Can't add an Empty Task</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Add A Task"
          value={item}
          onChangeText={setItem}
          //As this is being changed aka texting, it will set item at the top in the const area. It will constantly rewrite item as setItem is being changed.
        />

        {/* Adding a Task */}
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>

        <FlatList
          style={styles.listContainer}
          data={tasks} //FlatList needs data w/o it won't work.
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.taskItem}>
              {/* Task */}
              {/* <Text style={styles.taskText}>{item}</Text> */}

              {editState === index ? (
                <TextInput
                  style={styles.editInput}
                  value={editText}
                  onChangeText={setEditText}
                  //As this is being changed aka texting, it will set item at the top in the const area. It will constantly rewrite item as setItem is being changed.
                />
              ) : (
                <Text style={styles.taskText}>{item}</Text>
              )}

              <View style={styles.taskButtons}>
                {/* If editState is true */}
                {editState === index ? (
                  <>
                    <View style={styles.editButtons}>
                      <Pressable onPress={() => saveEdit(index)}>
                        <FontAwesome6
                          name="square-check"
                          size={28}
                          color="green"
                        />
                      </Pressable>

                      <Pressable
                        style={styles.exitEditBtn}
                        onPress={() => exitEdit(index)}
                      >
                        <Entypo name="squared-cross" size={30} color="red" />
                      </Pressable>
                    </View>
                  </>
                ) : (
                  // If editState is false
                  <>
                    <Pressable onPress={() => editItem(index)}>
                      <Entypo name="pencil" size={28} color="black" />
                    </Pressable>

                    <Pressable onPress={() => deleteItem(index)}>
                      <Ionicons name="trash" size={28} color="red" />
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //What was the point of this flex:1 ??
    justifyContent: "center",
    flexDirection: "row",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    // gap: Spacing.three,
    // gap: 15,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 0,
  },

  errorText: {
    fontSize: 21,
    color: "red",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 12,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },

  editInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 12,
    width: "50%",
  },

  // Add Item Button
  button: {
    backgroundColor: "lightgray",

    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",

    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },

  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  listContainer: {
    width: "100%",
  },

  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 15,
    width: "100%",
    marginBottom: 20,

    backgroundColor: "aliceblue",

    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",

    borderRadius: 5,
  },

  taskText: {
    fontSize: 16,
  },

  taskButtons: {
    width: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"green",
  },

  editButtons: {
    width: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  exitEditBtn: {
    marginTop: -1,
  },
});
