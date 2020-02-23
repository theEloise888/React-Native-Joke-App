import React from "react";
import { View, Button, Text, ScrollView, Alert } from "react-native";
import { styles } from "../styles/styles";

function JokeTwo({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.jokeHeaderTitles}>Joke #2</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.jokeContext}>Why did the bee marry?</Text>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Reveal Punchline!"
            onPress={() =>
              Alert.alert(
                "Joke Punchline!",
                "He’s finally found his honey.",
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

export default JokeTwo;
