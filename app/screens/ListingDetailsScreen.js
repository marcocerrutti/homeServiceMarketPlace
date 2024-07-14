import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/cardimg2.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Hire a house cleaner</AppText>
                <AppText style={styles.price}>$100</AppText> 
                <View style={styles.userContainer}>

                <ListItem 
                   image={require("../assets/UCHE-PIX.jpg")}
                   title="Uchenna Steven"
                   subTitle="5 Listings"
                   subTitle1="Driver"
                />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
     padding: 20  
    },
    image:{
        width: '100%',
        height: 300,
    },
    price:{
        color: colors.ssecondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 500,
    },
    userContainer:{
        marginVertical: 40,
    }
})
export default ListingDetailsScreen;