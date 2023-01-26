import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderButton from './HeaderButton';

interface Props {
  activeTab: string;
  setActiveTab: () => void;
}

const HeaderTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
