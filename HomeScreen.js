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
    TouchableWithoutFeedback
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

    const dismissSuggestions = () => {
        // Limpiar la lista de sugerencias cuando el usuario toca fuera del input
        setSuggestionsList([]);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissSuggestions}>
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                    keyboardShouldPersistTaps='always'
                >
                    <Text style={styles.headerText}>Guía Rest</Text>
                    <Carousel
                        loop={true}
                        autoplay={true}
                        data={store.show}
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View style={styles.carouselItem}>
                                <Pressable onPress={() => {
                                    navigation.navigate('Details', { restaurant: item });
                                }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.carouselImage}
                                    />
                                </Pressable>
                                <Text style={styles.carouselCaption}>{item.caption}</Text>
                            </View>
                        )}
                        sliderWidth={width}
                        itemWidth={width}
                    />
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Búsqueda"
                            value={searchText}
                            onChangeText={handleSearch}
                        />
                        <FlatList
                            data={suggestionsList}
                            keyExtractor={(_, item) => item.toString()}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => handleAutocompletePress(item)} style={styles.autocompleteItem}>
                                    <Text>{item.name}</Text>
                                </Pressable>
                            )}
                        />
                    </View>
                    <Carousel
                        sliderWidth={width}
                        itemWidth={width / itemsPerInterval}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        data={store.restaurant}
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View style={styles.carouselItem}>
                                <Pressable onPress={() => {
                                    navigation.navigate('Details', { restaurant: item });
                                }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: width / itemsPerInterval, height: 130 }}
                                    />
                                </Pressable>
                            </View>
                        )}
                    />
                    <Pressable onPress={() => {
                        navigation.navigate('AllRestaurants');
                    }}
                        style={styles.viewAllButton}
                    >
                        <Text style={{ textAlign: 'center' }}>Ver listado de todos los restaurantes</Text>
                    </Pressable>
                </KeyboardAwareScrollView>

            </SafeAreaView >
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',

    },
    carouselItem: {
        marginBottom: 10,
    },
    carouselImage: {
        width: width,
        height: width / 1.2,
        borderRadius: 10,
    },
    carouselCaption: {
        marginTop: 5,
        fontSize: 16,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    autocompleteItem: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
    },
    viewAllButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
});

export default HomeScreen;