import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/reducers/cartReducer';
import OrderItem from './OrderItem';
import AnimatedLottieView from 'lottie-react-native';

interface Props {
  navigation: any;
  restaurantName: any;
}

const ViewCart = ({ navigation, restaurantName }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const items = useSelector(selectCartItems);
  const total = items
    .map((item: any) => Number(item.price.replace('R', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  const totalZar = total.toLocaleString('en', {
    style: 'currency',
    currency: 'ZAR',
  });

  // const addOrderToFireBase = () => {
  //   const db = firebase.firestore();
  //   db.collection('orders').add({
  //     items: items,
  //     restaurantName: restaurantName,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  // };

  console.log(totalZar);

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item: any, index: number) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalZar}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  // addOrderToFireBase();
                  setLoading(true);
                  setModalVisible(false);
                  setTimeout(() => {
                    setLoading(false);
                    navigation.navigate('completed', {
                      restaurantName: restaurantName,
                    });
                  }, 2500);
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalZar : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.container}>
          <View style={styles.secondaryContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.total}>{totalZar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <View style={styles.loaderContainer}>
          <AnimatedLottieView
            style={{ height: 400 }}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
  loaderContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
