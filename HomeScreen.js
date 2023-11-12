import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Pressable,
    Dimensions,
    TextInput,
    FlatList,
} from 'react-native';
import React, { useState, useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { storeContext } from './StoreProvider';

const itemsPerInterval = 3;

const width = Dimensions.get('window').width;

function HomeScreen({ navigation }) {
    const [store, dispatch] = useContext(storeContext);

    const [searchText, setSearchText] = useState('');
    const [suggestionsList, setSuggestionsList] = useState([]);

    const getSuggestions = (query) => {
        const filteredSuggestions = store.restaurant.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestionsList(filteredSuggestions);
    };

    const handleAutocompletePress = (restaurant) => {
        navigation.navigate('Details', { restaurant });
    };

    const handleSearch = (text) => {
        setSearchText(text);
        getSuggestions(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardShouldPersistTaps='always'
            >
                <Text style={styles.text}>Guia Rest</Text>
                <Text>{"\n"}</Text>
                <Carousel
                    data={store.show}
                    autoPlay={true}
                    scrollAnimationDuration={1000}
                    renderItem={({ item }) => (
                        <View>
                            <Pressable onPress={() => {
                                navigation.navigate('Details', { restaurant: item });
                            }}>
                                <Image
                                    source={{ uri: item.image }}
                                    width={width}
                                    height={width / 1.2}
                                />
                            </Pressable>
                            <Text>{item.caption}</Text>
                        </View>
                    )}
                    sliderWidth={400}
                    itemWidth={400}
                />
                <Text>{"\n"}</Text>
                <View>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            paddingLeft: 10,
                            borderRadius: 10,
                        }}
                        placeholder="Búsqueda"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    <FlatList
                        data={suggestionsList}
                        keyExtractor={(_, item) => item.toString()}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => handleAutocompletePress(item)}>
                                <Text>{item.name}</Text>
                            </Pressable>
                        )}
                    />
                </View>
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
                                navigation.navigate('Details', { restaurant: item });
                            }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: width / itemsPerInterval, height: 130 }}
                                />
                            </Pressable>
                            <Text>{item.caption}</Text>
                        </View>
                    )}
                />
                <Pressable onPress={() => {
                    navigation.navigate('AllRestaurants');
                }}
                    style={{
                        backgroundColor: 'lightblue',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text>Ver listado de todos los restaurantes</Text>
                </Pressable>

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
