import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  item: any;
}

const OrderItem = ({ item }: Props) => {
  const { title, price } = item;

  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    opacity: 0.7,
    fontSize: 16,
  },
});
