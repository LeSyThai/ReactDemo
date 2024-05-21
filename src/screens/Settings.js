import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccountAction} from '../store/userAction';
import AwesomeAlert from 'react-native-awesome-alerts';
import DrawerSceneWrapper from '../components/DrawerSceneWrappers';

const screen = Dimensions.get('screen');

const Settings = ({navigation}) => {
  const {openDrawer}= navigation;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteAccount = async () => {
    await dispatch(deleteAccountAction(user.user?.[0]?.id));
  };
  // console.log(user)
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
            <View style={{position: 'absolute', left: screen.width*0.3, right: screen.width*0.3, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Setting</Text>
            </View>
        </View>
      <View style={styles.body}>
        <View style={styles.bodypart}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('UserInfor')}>
            <Text style={{color: 'white'}}>User Info</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>My Subscriptions</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>Profile Tags</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.bodypart}>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>Privacy policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.item, {marginTop: 30}]}
            onPress={() => setShowAlert(!showAlert)}>
            <Text style={{color: 'red'}}>Delete account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AwesomeAlert 
        show={showAlert}  
        title='Delete Account' 
        titleStyle={{fontSize: 28, color: 'red'}}
        
        message='Are you want to delete this account ?'
        messageStyle={{color: 'black', fontSize: 22}}
        
        showCancelButton={true}
        cancelText='Cancel'
        cancelButtonColor='blue'
        onCancelPressed={()=>{
          setShowAlert(false)
        }}

        showConfirmButton={true}
        confirmText='Delete'
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          handleDeleteAccount()
        }}
        
        // showProgress ={true}
        // progressColor='red'
        // progressSize={40}
        />

    </View>
    </DrawerSceneWrapper>
  );
}
export default Settings;

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
  body: {
    flex: 1,
    paddingVertical: 35,
    // paddingHorizontal: 35,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bodypart: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#12355c',
    marginVertical: 5,
  },
});
