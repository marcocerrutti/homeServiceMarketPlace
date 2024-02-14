import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import InboxScreen from "./app/screens/InboxScreen";
import OrderScreen from "./app/screens/OrderScreen";
import OrderDetailsScreen from "./app/screens/OrderDetailsScreen";
import OrderListScreen from "./app/screens/OrderListScreen";
import SigninScreen from "./app/screens/SigninScreen";
import SignupScreen from "./app/screens/SignupScreen";



const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    orderListFlow: createStackNavigator({
      OrderList: OrderListScreen,
      OrderDetails: OrderDetailsScreen
    }),
    Home: HomeScreen,
    OrderCreate: OrderScreen,
    Account: AccountScreen,
    Inbox: InboxScreen,
  })
});

export default createAppContainer(switchNavigator);