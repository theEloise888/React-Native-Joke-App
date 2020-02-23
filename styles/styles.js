import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  title: {
    fontSize: 19,
    fontWeight: "bold"
  },
  jokeContext: {
    margin: 50,
    width: 100 * 3,
    height: 100 * 3,
    borderColor: "gray",
    borderWidth: 0.5,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#dcdcdc",
    paddingTop: 100,
    color: "#dc143c"
  },
  button: {
    width: 300,
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    color: "#ff1493"
  },
  jokeTextBox: {
    paddingTop: 5,
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 0.5,
    margin: 20,
    fontSize: 18,
    textAlign: "center"
  },
  jokeHeaderTitles: {
    padding: 5,
    fontSize: 25,
    textAlign: "center"
  }
});
