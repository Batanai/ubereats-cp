import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  restaurantData: any;
}

const RestaurantItems = ({ restaurantData }: Props) => {
  return (
    <>
      {restaurantData.map((restaurant: any, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.5}
          style={{ marginBottom: 30 }}>
          <View style={{ marginTop: 10, padding: 15, backgroundColor: '#fff' }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={'fff'} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center',
    }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{rating}</Text>
    </View>
  </View>
);

export default RestaurantItems;

const styles = StyleSheet.create({});
