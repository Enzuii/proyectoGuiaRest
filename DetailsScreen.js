import React from 'react';
import { View, Text, Image } from 'react-native';

function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name}</Text>
      <Image source={{ uri: item.image }} style={{ width: 400, height: 400 }} />
      <Text>{item.caption}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default DetailsScreen;