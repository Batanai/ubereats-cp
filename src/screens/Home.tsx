import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import Searchbar from '../components/home/Searchbar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import localRestaurants from '../data/localRestaurants';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

interface Props {
  navigation: any;
}

const YELP_API_KEY =
  'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

const Home = ({ navigation }: Props) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Sandton');
  const [activeTab, setActiveTab] = useState('Delivery');

  useEffect(() => {
    setRestaurantData(
      localRestaurants.filter(restaurant =>
        restaurant.transaction.includes(activeTab.toLowerCase()),
      ),
    );
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar setCity={setCity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
