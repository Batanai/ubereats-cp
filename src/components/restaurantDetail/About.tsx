import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  route: any;
}

// const cardDetails = {
//   image:
//     'https://www.thehouseofpop.co.za/wp-content/uploads/2018/07/Texan-Wing-Bar-at-Montecasino-1.jpg',
//   title: 'The Steak House Grill Joint',
//   reviews: 1500,
//   rating: 4.5,
//   categories: [{ title: 'Steak' }, { title: 'Bar' }],
//   price: 'R',
// };

const About = ({ route }: Props) => {
  const { image, name, reviews, rating, categories, price } = route.params;

  const formattedCategories = categories
    .map((cat: any) => cat.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ✡ [${reviews}+ reviews]`;

  return (
    <View>
      <ResaurantImage image={image} />
      <ResaurantTitle name={name} />
      <ResaurantDescription description={description} />
    </View>
  );
};

const ResaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
);

const ResaurantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {name}
  </Text>
);

const ResaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 16,
    }}>
    {description}
  </Text>
);

export default About;

const styles = StyleSheet.create({});
