import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import DrawerSceneWrapper from '../../components/drawer_navigation/DrawerSceneWrappers';
import { useTranslation } from 'react-i18next';

const screen = Dimensions.get('screen');

const Rewards= ({navigation}) => {
  const {t} = useTranslation()
  const {openDrawer} = navigation;
  return (
    <DrawerSceneWrapper>

    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={['#833ab4', '#fd1d1d', '#fcb045']}></LinearGradient>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <LinearGradient
            colors={['#ff608b', '#fe7591', '#ff9199']}
            style={styles.pointView}>
            <Image
              style={styles.image}
              source={require('../../assets/images/reward.png')}
              />
            <Text style={styles.point}>9 {t('Points')}</Text>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <FontAwesome6 name="trophy" size={100} color="white" />
          <Text style={styles.screenTitle}>
          {t('Rewards')}
          </Text>
          <Text style={styles.screenDescrip}>
            {t('Collect points')}
          </Text>
        </View>
        <View style={styles.menuList}>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>{t('Listen-1 day')}</Text>
              <Text style={{color: '#777899'}}>
                {t('Achieved')} <AntDesign name="check" size={17} color="grey" />
              </Text>
            </View>
            <View style={styles.rowLine}>
              <Image
                style={styles.rowImage}
                source={require('../../assets/images/reward.png')}
                />
              <Text style={{color: 'red'}}> 1</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>
                {t('Listen for the first 7 consecutive days')}
              </Text>
              <Text style={{color: '#777899'}}>
                {t('Achieved')} <AntDesign name="check" size={17} color="grey" />
              </Text>
            </View>
            <View style={styles.rowLine}>
              <Image
                style={styles.rowImage}
                source={require('../../assets/images/reward.png')}
                />
              <Text style={{color: 'red'}}> 7</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>
                {t('Listen for the first 28 consecutive days')}
              </Text>
              <View style={styles.rowLine}>
                <Text style={{color: '#777899', marginRight: 10}}>14/28</Text>
                <Progress.Bar
                  progress={0.5}
                  width={125}
                  height={screen.height * 0.002}
                  color="#ff4f9e"
                />
              </View>
            </View>
            <View style={styles.rowLine}>
              <Image
                style={styles.rowImage}
                source={require('../../assets/images/reward.png')}
                />
              <Text style={{color: 'red'}}> 28</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>{t('Write one review')}</Text>
            </View>
            <View style={styles.rowLine}>
              <Image
                style={styles.rowImage}
                source={require('../../assets/images/reward.png')}
                />
              <Text style={{color: 'red'}}> 50</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>
                {t('Refer a friend or accept a referral')}
              </Text>
            </View>
            <View style={styles.rowLine}>
              <Image
                style={styles.rowImage}
                source={require('../../assets/images/reward.png')}
                />
              <Text style={{color: 'red'}}> 10</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={['#ff608b', '#fe7591', '#ff9199']}
          style={styles.btn}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {t('100 points - 5% off| 150 points - 10% off')}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
</DrawerSceneWrapper>
  );
}
export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: 'Arial',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#15345c',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
    opacity: 0.2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: screen.height * 0.07,
  },
  header_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 25,
  },
  body: {
    paddingVertical: 35,
    paddingHorizontal: 35,
  },
  profile_image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#9e9595',
    borderWidth: 3,
  },
  title: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuList: {
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#0f2c4f',
    marginVertical: 5,
  },
  point:{
    color: 'white', 
    fontWeight: 'bold'
  },
  image:{
    width: 20, 
    height: 20
  },
  pointView:{
    flexDirection: 'row',
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#ff4f9e',
    alignItems: 'center',
  },
  screenTitle:{
    fontSize: 25, 
    fontWeight: 'bold', 
    color: 'white'
  },
  screenDescrip:{
    fontSize: 15, 
    color: 'white'
  },
  rowLine:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  rowImage:{
    width: 20, 
    height: 20
  },
  btn:{
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#ff4f9e',
    alignItems: 'center',
  }
});
