import { Text, FlatList, StyleSheet, View, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { storeContext } from './StoreProvider';

function AllRestaurants({ navigation }) {
    const [store, dispatch] = useContext(storeContext);

    return (
        <View style={styles.container}>

            <Text>Esto es una prueba</Text>

            <FlatList
                data={store.restaurant}
                keyExtractor={(_, item) => item.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {

                        navigation.navigate('Details', { restaurant: item });
                    }}
                        style={styles.item}

                    >
                        <Text>{item.name}</Text>
                    </Pressable>
                )
                }

            />

        </View >
    );
}

export default AllRestaurants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
});
