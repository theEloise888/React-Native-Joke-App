import React from "react";
import { View, Button, Text, ScrollView, Alert } from "react-native";
import { styles } from "../styles/styles";

function JokeFour({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.jokeHeaderTitles}>Joke #4</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.jokeContext}>
          What would you get if you crossed a vampire with a dwarf?
        </Text>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Reveal Punchline!"
            onPress={() =>
              Alert.alert(
                "Joke Punchline!",
                "A creature that sucks blood from your knees.",
                [
                  {
                    text: "Close",
                    onPress: () => console.log("Close Pressed"),
                    style: "Close"
                  }
                ],
                { cancelable: false }
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default JokeFour;
