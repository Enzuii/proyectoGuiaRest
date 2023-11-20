import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function DetailsScreen({ route }) {
  const { restaurant } = route.params;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>
        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.text}>{restaurant.adress}</Text>
        <Text style={styles.label}>Horario:</Text>
        <Text style={styles.text}>{restaurant.schedule}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default DetailsScreen;
