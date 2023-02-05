import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

interface Props {
  route: any;
  navigation: any;
}

const RestaurantDetail = ({ route, navigation }: Props) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.0} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
