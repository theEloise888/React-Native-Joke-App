import React from "react";
import { View, Button, Text, ScrollView, Alert } from "react-native";
import { styles } from "../styles/styles";

function JokeThree({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.jokeHeaderTitles}>Joke #3</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.jokeContext}>
          Name me five different animals, Johnny.
        </Text>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Reveal Punchline!"
            onPress={() =>
              Alert.alert(
                "Joke Punchline!",
                "The dog, the dog’s brother, the dog’s sister, the dog’s cousin and the dog’s aunt.",
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

export default JokeThree;
