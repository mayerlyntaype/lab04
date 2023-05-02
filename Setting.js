import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      
      title: "Moli",
      description: "Busco una familia que me quiera mucho",
      imageUrl: "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg",
    },
    
    {
        title: "Pecas",
        description: "Busco una familia que me quiera mucho",
        imageUrl: "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg",
        
      },
    {
      title: "Puca",
      description: "Busco una familia que me quiera mucho",
      imageUrl: "https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg?w=360",
    },
    {
      title: "Luana",
      description: "Busco una familia que me quiera mucho",
      imageUrl: "https://fondosmil.com/fondo/6698.jpg",
    },
    {
        title: "Pemi",
        
        description: "Busco una familia que me quiera mucho",
        imageUrl: "https://uploads-ssl.webflow.com/63634f4a7b868a399577cf37/63e10adfa64a34de9592b9a3_nombres%20para%20perritos%20blancos.jpg",
      },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de adopcion de perritos</Text>
      <ScrollView style={styles.scrollView}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => setSelectedOption(option)}
          >
            <Image
              style={styles.image}
              source={{
                uri: option.imageUrl,
              }}
            />
            
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>{option.title}</Text>
              <Text style={styles.imageDescription}>
                {option.description}
              </Text>
              
            </View>
            <Button title="Mas informacion" />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  optionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  imageTitle: {
    fontWeight: "bold",
  },
  imageDescription: {
    marginTop: 5,
  },
});
