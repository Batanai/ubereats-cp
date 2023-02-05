import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {}

const BottomTabs = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 30,
      }}>
      <Icon icon={'home'} text="Home" />
      <Icon icon={'search'} text="Browse" />
      <Icon icon={'shopping-bag'} text="Groccery" />
      <Icon icon={'receipt'} text="Orders" />
      <Icon icon={'user'} text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={icon}
        size={25}
        style={{ alignSelf: 'center', marginBottom: 3 }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default BottomTabs;

const styles = StyleSheet.create({});
