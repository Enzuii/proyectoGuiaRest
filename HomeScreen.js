import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Pressable,
    Dimensions,
} from 'react-native';
import React, { useState, useContext } from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import Carousel from 'react-native-snap-carousel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { storeContext } from './StoreProvider';

const restaurantData = ['McDonalds', 'Burger King', 'Mi Sushi'];

const itemsPerInterval = 5;

const width = Dimensions.get('window').width;

function HomeScreen({ navigation }) {

    const [selected, setSelected] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const [store, dispatch] = useContext(storeContext);

    const handleAutocomplete = (text) => {
        setSelected(text);
        const filteredSuggestions = store.autoComplete.filter((item) =>
            item.toLowerCase().includes(text.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                    <Text style={styles.text}>Guia Rest</Text>
                    <Text>{"\n"}</Text>
                    <Carousel
                        data={store.show}
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View>
                                <Pressable onPress={() => {
                                    navigation.navigate('ShowDetails', { item });
                                }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        width={width}
                                        height={width}
                                    />
                                </Pressable>
                                <Text>{item.caption}</Text>
                            </View>
                        )}
                        sliderWidth={400}
                        itemWidth={400}
                    />
                    <Text>{"\n"}</Text>
                    <Autocomplete
                        data={suggestions}
                        value={selected}
                        flatListProps={{
                            keyExtractor: (_, idx) => idx.toString(),
                            renderItem: ({ item }) => <Text>{item}</Text>,
                        }}
                        onPress={() => {
                            navigation.navigate('RestaurantDetails', { item: { name: selected } });
                        }}
                        onChangeText={handleAutocomplete}
                        placeholder="Search for a restaurant"
                    />

                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Carousel
                        sliderWidth={width}
                        itemWidth={width / itemsPerInterval}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        data={store.restaurant}
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View>
                                <Pressable onPress={() => {
                                    navigation.navigate('ShowDetails', { item });
                                }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: width / itemsPerInterval, height: 150 }} // Ajusta la altura según tus necesidades
                                    />
                                </Pressable>
                                <Text>{item.caption}</Text>
                            </View>
                        )}
                    />
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text><Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text><Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
            </KeyboardAwareScrollView>

        </SafeAreaView >

    );
};

export default HomeScreen;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
