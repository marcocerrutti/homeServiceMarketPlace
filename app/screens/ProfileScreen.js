import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ListItem from '../components/ListItem';

function ProfileScreen(props) {
    return (
        <View style={styles.profilesContainer}>
            <ListItem
              image={require("../assets/UCHE-PIX.jpg")}
              title="Nwaigwe Steven"
              subTitle="4 ratings"
              subTitle1="Driver"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    profilesContainer:{
        padding: 20,
        marginTop: 50,
    }
})
export default ProfileScreen;