import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccountAction} from '../store/userAction';
import AwesomeAlert from 'react-native-awesome-alerts';
import DrawerSceneWrapper from '../components/DrawerSceneWrappers';

const screen = Dimensions.get('screen');

const Invite= ({navigation})=> {
  const {openDrawer} = navigation;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <DrawerSceneWrapper>

    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={['#833ab4', '#fd1d1d', '#fcb045']}>   
        </LinearGradient>
        <View style={styles.header}>
            <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={{position: 'absolute', left: screen.width*0.3, right: screen.width*0.3, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Help & Support</Text>
            </View>
        </View>
    </View>
    </DrawerSceneWrapper>
  );
}

export default Invite;

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
});
