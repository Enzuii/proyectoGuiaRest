  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import DetailsScreen from './DetailsScreen';
  import HomeScreen from './HomeScreen';
  import StoreProvider from './StoreProvider';




  const Stack = createStackNavigator();

  function App() {
    return (
      <StoreProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    );
  }

  export default App;

