import React from 'react';
import { View, Text, Image } from 'react-native';

function RestaurantDetails({ route }) {
    const { restaurant } = route.params;

    return (
        <View>
            <Text>{restaurant.name}</Text>
            <Image source={{ uri: restaurant.image }} style={{ width: 400, height: 400 }} />
            <Text>{restaurant.caption}</Text>
            <Text>{restaurant.description}</Text>
        </View>
    );
}

export default RestaurantDetails;