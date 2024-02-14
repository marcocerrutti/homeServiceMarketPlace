import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const OrderListScreen = ({navigation}) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>OrderListScreen</Text>
      <Button
                title="Go to Order Details"
                onPress={() => navigation.navigate('OrderDetails')}
      />
      </>
      );
}
 
const styles = StyleSheet.create({
    
});
export default OrderListScreen;