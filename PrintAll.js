import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet, View, Pressable, Image } from 'react-native';
import { storeContext } from './StoreProvider';

function PrintAll({ navigation }) {
  const [store, dispatch] = useContext(storeContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={store.showRestaurant}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', { restaurant: item });
            }}
            style={styles.item}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default PrintAll;