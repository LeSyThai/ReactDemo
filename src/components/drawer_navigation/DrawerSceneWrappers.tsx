import{
  StyleSheet,
  Platform,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const screen = Dimensions.get('screen');

const DrawerSceneWrapper = ({children}) => {


  const progress= useDrawerProgress();
  const {width} = useWindowDimensions();
  //console.log(progress.value);

  const animatedStyle= useAnimatedStyle(() =>({
      transform: [
          {perspective: 1000},
          {
            scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
          },
          // {
          //   rotateY: `${interpolate(progress.value, [0, 1], [0, 0], 'clamp')}deg`,
          // },
          {
            translateX: interpolate(
              progress.value,
              [0, 1],
              [0, Platform.OS === 'android' ? width - 120 : -60],
              'clamp',
            ),
          },
        ],
        borderRadius: interpolate(progress.value, [0, 1], [0, 26], 'clamp'),
        overflow: 'hidden',
        shadowColor: "#000000",
      //   shadowOpacity: 0.6,
        shadowRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
        //elevation: 5,

  }));

  return (
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
  )
}

export default DrawerSceneWrapper;

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: screen.height,
    },
    
})