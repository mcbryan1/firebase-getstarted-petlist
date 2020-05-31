import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import PetPage from "../components/PetPage";

export default function PetPageScreen() {
  const pets = [
    {
      name: "Kity Cat",
      animal: "Cat",
      age: "2 Years Old",
      location: "4 Adolf Street",
      image: require('../../assets/images/cat.jpg'),
      id: '1',
    },
    {
        name: "Cutie Fur",
        animal: "Dog",
        age: "7 Years Old",
        location: "8 Davinci Street",
        image: require('../../assets/images/dog.jpg'),
        id: '2',  
    },
    { 
        name: "Kubo Byran",
        animal: "Hamster",
        age: "3 Years Old",
        location: "1 Papaye Street",
        image: require('../../assets/images/hamster.jpg'),
        id: '3',
    },
    {
        name: "Talkie Talkie",
        animal: "Parrot",
        age: "22 Years Old",
        location: "9 Kruegger road",
        image: require('../../assets/images/parrot.jpg'),
        id: '4',
    },
    { 
        name: "McFurry Paw",
        animal: "Rabbit",
        age: "4 Years Old",
        location: "3 Chuckie Street",
        image: require('../../assets/images/rabbit.jpg'),
        id: '5',
    },
    {
        name: "Snouty Nose",
        animal: "Hedgehog",
        age: "9 Years Old",
        location: "7 Solomon Street",
        image: require('../../assets/images/hedgehog.jpg'),
        id: '6',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({item}) => {
          return (
            <PetPage
              name={item.name}
              animal={item.animal}
              age={item.age}
              location={item.location}
              image={item.image}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
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
});
