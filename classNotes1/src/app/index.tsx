// import * as Device from 'expo-device';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [item, setItem] = useState("");

  const [groceries, setGroceries] = useState<string[]>([]);

  function addItem() {
    //Ensures no one adds an empty item.
    if (item.trim() === "") {
      return;
    }

    //The ... adds the item at the end of the array.
    setGroceries([...groceries, item.trim()]); //What the heck is this?
    setItem("");
  }

  function deleteItem(index: number) {
    //Removes the selected item from the grocery list via filtering it out from the array.
    const newGroceries = groceries.filter(
      (item, itemIndex) => itemIndex !== index,
    );

    setGroceries(newGroceries);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Grocery List</Text>

        <TextInput
          style={styles.input}
          placeholder="Add An Item"
          value={item}
          onChangeText={setItem} //As this is being changed aka texting, it will set item at the top in the const area. It will constantly rewrite item as setItem is being changed.
        />

        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>

        <FlatList
          style={styles.listContainer}
          data={groceries} //FlatList needs data w/o it won't work.
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.groceryItem}>
              <Text style={styles.groceryText}>{item}</Text>

              <Pressable onPress={() => deleteItem(index)}>
                <Ionicons name="trash" size={24} color="red" />
              </Pressable>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 12,
    width: "100%",
  },

  button: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
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

  groceryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 15,
    width: "100%",

    backgroundColor: "gray",
    borderRadius: 5,
  },

  groceryText: {
    fontSize: 16,
  },

  deleteText: {
    color: "red",
    fontWeight: "bold",
    paddingLeft: 15,
  },
});
