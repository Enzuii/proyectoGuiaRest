import React from 'react';
import { View, Text, Image } from 'react-native';

function DetailsScreen({ route }) {
  const { restaurant } = route.params || {};
  const restaurantName = restaurant ? restaurant.name : 'Nombre no disponible';

  return (
    <View>
      <Text>{restaurantName}</Text>
      <Image source={{ uri: restaurant.image }} style={{ width: 400, height: 400 }} />
      <Text>jeje</Text>
    </View>
  );
}

export default DetailsScreen;