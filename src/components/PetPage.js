import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function Petpage({ image, name, age, location, animal }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <View style={styles.left__container}>
          <View style={styles.left__left}>
            <Text style={styles.main__text}>{name}</Text>
            <Text style={styles.other__text}>{animal}</Text>
            <Text style={styles.other__text}>{age}</Text>
            <Text style={styles.other__text} numberOfLines={1}>
              <EvilIcons name="location" size={20} color="grey" />
              {location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 10,
  },
  left__container: {
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 25,
    marginVertical: 17,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  left__left: {
    marginHorizontal: 18,
    paddingVertical: 10,
  },
  main__text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  other__text: {
    color: "grey",
    fontSize: 15,
    paddingVertical: 3,
  },
});
