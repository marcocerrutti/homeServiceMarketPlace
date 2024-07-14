import React from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Handle your catering services',
    price: 100,
    image: require('../assets/cardimg4.jpg')
  },
  {
    id: 2,
    title: 'Have a Spa with happy hour',
    price: 700,
    image: require('../assets/spa.jpg')
  },


];


function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
              data={listings} 
              keyExtractor={listing =>listing.id.toString()}
              renderItem={({ item }) =>
               <Card 
                 title={item.title}
                 subTitle={"$" + item.price}
                 image={item.image} />
            }
              />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: colors.light,
    }
})
export default ListingScreen;