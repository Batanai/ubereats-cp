import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import RestaurantDetail from './src/screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './src/redux/store';
import OrderCompleted from './src/screens/OrderCompleted';

interface Props {}

const store = configureStore();

const RootNavigator = (props: Props) => {
  const screenOptions = {
    headerShown: false,
  };

  const Stack = createNativeStackNavigator();
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={screenOptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detail" component={RestaurantDetail} />
          <Stack.Screen name="completed" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
