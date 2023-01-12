import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";

const width = Dimensions.get("window").width / 360;
const height = Dimensions.get("window").height / 640;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 0.5,

            justifyContent: "center",
            alignContent: "center",
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
            <Pressable style={styles.items}>
              <Text>item1</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item2</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item3</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item4</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item5</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item6</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item7</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item8</Text>
            </Pressable>
            <Pressable style={styles.items}>
              <Text>item9</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  items: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 100,
    height: width * 100,
    backgroundColor: "pink",
    margin: 10,
  },
});
