import * as React from "react";
import { View, Button, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import * as SMS from "expo-sms";
import * as MailComposer from "expo-mail-composer";
import { styles } from "./styles/styles";

import JokeOne from "./components/JokeOne";
import JokeTwo from "./components/JokeTwo";
import JokeThree from "./components/JokeThree";
import JokeFour from "./components/JokeFour";

enableScreens();

var message = "My jokes messages.";

onPress = async () => {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    const { result } = await SMS.sendSMSAsync(
      ["00123456789", "00123456785"],
      "Joke Message"
    );
  } else {
    console.log(`${result} has failed to send`);
  }
};

sendMessageWithEmail = () => {
  var options = {
    recipients: ["matthewtanner91@gmail.com"],

    subject: "My Subject Line",

    body: message
  };

  MailComposer.composeAsync(options).then(result => {
    console.log(result.status);
  });
};

function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ padding: 10, fontSize: 20 }}>e_lin67330</Text>
        <Text style={{ padding: 10, fontSize: 25 }}>Lab 5 - Joke App</Text>
        <Text
          style={styles.jokeTextBox}
          onPress={() => navigation.navigate("JokeOne")}
        >
          Joke #1
        </Text>

        <Text
          style={styles.jokeTextBox}
          onPress={() => navigation.navigate("JokeTwo")}
        >
          Joke #2
        </Text>

        <Text
          style={styles.jokeTextBox}
          onPress={() => navigation.navigate("JokeThree")}
        >
          Joke #3
        </Text>

        <Text
          style={styles.jokeTextBox}
          onPress={() => navigation.navigate("JokeFour")}
        >
          Joke #4
        </Text>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Send Jokes Via SMS"
            onPress={() => onPress()}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Send Jokes Via Email"
            onPress={sendMessageWithEmail}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JokeOne" component={JokeOne} />
      <Stack.Screen name="JokeTwo" component={JokeTwo} />
      <Stack.Screen name="JokeThree" component={JokeThree} />
      <Stack.Screen name="JokeFour" component={JokeFour} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
