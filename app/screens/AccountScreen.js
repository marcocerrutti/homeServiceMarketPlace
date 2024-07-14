import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';



import colors from '../config/colors';
import ListItemSeparatorComponent from '../components/ListItemSeparator';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryMain, 
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.ssecondary, 
    }
  }
]

function AccountScreen(props){
  return(
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
            title="Uchenna Nwaigwe"
            subTitle="info@hgsol.com"
            subTitle1="www.hgsol.com"
            image={require('../assets/UCHE-PIX.jpg')}
      />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({item}) =>
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>
      <ListItem
       title="Log Out"
       IconComponent={
        <Icon name="logout" backgroundColor={colors.yellowSupport} />
       }
      
      />

</Screen> 
  );
 
}
const styles = StyleSheet.create({
  container:{
    marginVertical: 20,
  },
  screen:{
    backgroundColor:colors.light 
  }
})
export default AccountScreen;