import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  setCity: (city: string) => void;
};

const Searchbar = ({ setCity }: Props) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyBUjTnR_6caRGh3gckvRco148ZBzUCN-YM' }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          setCity(city);
        }}
        enablePoweredByContainer={false}
        placeholder="Search"
        styles={autoComplete}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={28} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={17}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

const autoComplete = {
  textInput: {
    backgroundColor: '#eee',
    borderRadius: 20,
    fontWeight: '700',
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: '#eee',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
});
