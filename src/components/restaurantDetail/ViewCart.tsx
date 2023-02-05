import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/reducers/cartReducer';

interface Props {
  navigation: any;
  restaurantName: any;
}

const ViewCart = ({ navigation, restaurantName }: Props) => {
  const items = useSelector(selectCartItems);
  const total = items
    .map((item: any) => Number(item.price.replace('R', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  const totalZar = total.toLocaleString('en', {
    style: 'currency',
    currency: 'ZAR',
  });

  console.log(totalZar);
  return (
    <>
      {total ? (
        <View style={styles.container}>
          <View style={styles.secondaryContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.total}>{totalZar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 700,
    zIndex: 999,
  },
  secondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
  },
  total: {
    color: 'white',
    fontSize: 20,
  },
});
