import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import foods from '../../data/food';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/reducers/cartReducer';

interface Props {
  restaurantName: any;
}

const MenuItems = ({ restaurantName }: Props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const selectItem = (item: any, checkboxValue: boolean) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, restaurantName, checkboxValue },
    });
  };

  const IsFoodInCart = (food: any, cartItems: any) =>
    Boolean(cartItems.find((item: any) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            <BouncyCheckbox
              size={20}
              iconStyle={{ borderColor: 'lightgray' }}
              fillColor="green"
              onPress={checkboxValue => selectItem(food, checkboxValue)}
              isChecked={IsFoodInCart(food, cartItems)}
            />
            <FoodInfo
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <FoodImage image={food.image} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({ title, description, price }) => (
  <View style={{ width: 200, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleText}>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const FoodImage = ({ image }) => (
  <View>
    <Image
      source={{ uri: image }}
      style={{ height: 100, width: 100, borderRadius: 8 }}
    />
  </View>
);

export default MenuItems;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '600',
  },
});
