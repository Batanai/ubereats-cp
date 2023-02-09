import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCheckedItem,
  selectRestaurantName,
} from '../redux/reducers/cartReducer';
import AnimatedLottieView from 'lottie-react-native';
import MenuItems, { MenuItem } from '../components/restaurantDetail/MenuItems';

interface Props {
  route: any;
}

const OrderCompleted = ({ route }: Props) => {
  const items = useSelector(selectCartItems);
  const selectedItem = useSelector(selectCheckedItem);
  const restaurantName = useSelector(selectRestaurantName);
  const total = items
    .map((item: any) => Number(item.price.replace('R', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  const totalZar = total.toLocaleString('en', {
    style: 'currency',
    currency: 'ZAR',
  });

  console.log('cart', items);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLottieView
        style={styles.tick}
        source={require('../assets/animations/check-mark.json')}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text style={{ marginHorizontal: 20, fontSize: 15, fontWeight: '600' }}>
        Your order at {restaurantName} has been place for {totalZar}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item: any, index: number) => (
          <MenuItem key={index} food={item} marginLeft={20} />
        ))}
      </ScrollView>
      <AnimatedLottieView
        style={{ height: 200, alignSelf: 'center' }}
        source={require('../assets/animations/cooking.json')}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tick: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
});
