import React from 'react';
import { Image, StyleSheet,TouchableHighlight, View } from 'react-native';
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";


import AppText from './AppText/AppText';
import colors from '../config/colors';


function ListItem({title, subTitle, subTitle1, image, IconComponent, onPress, renderRightActions}) {
    
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.light} 
          onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                {subTitle1 &&<AppText>{subTitle1}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer:{
      marginLeft: 10,
      justifyContent: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        
    },
    title:{
        fontweight: "500",
    },
    subTitle:{
      color: colors.medium,
    },
    subTitle1:{
        fontweight: colors.yellowSupport,
    }
})
export default ListItem;