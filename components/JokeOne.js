import React from "react";
import { View, Button, Text, ScrollView, Alert } from "react-native";
import { styles } from "../styles/styles";

function JokeOne({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.jokeHeaderTitles}>Joke #1</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.jokeContext}>
          Why did the donut visit the dentist?
        </Text>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Reveal Punchline!"
            onPress={() =>
              Alert.alert(
                "Joke Punchline!",
                "To get a new filling.",
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

export default JokeOne;
