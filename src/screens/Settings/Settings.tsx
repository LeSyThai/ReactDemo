import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  LayoutAnimation,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccountAction} from '../../store/userAction';
import AwesomeAlert from 'react-native-awesome-alerts';
import DrawerSceneWrapper from '../../components/drawer_navigation/DrawerSceneWrappers';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from 'react-native-gesture-handler';

const screen = Dimensions.get('screen');
const languages = [
  { name: 'english', code: 'en' },
  { name: 'french', code: 'fr' },
  { name: 'vietnamese', code: 'vi' },
  { name: 'chinese', code: 'ch' },
  { name: 'korean', code: 'ko' },
  { name: 'japanese', code: 'ja' },
]

const Settings = ({navigation}) => {
  const {openDrawer}= navigation;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [showAlert, setShowAlert] = useState(false);
  const {t, i18n} = useTranslation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleDeleteAccount = async () => {
    await dispatch(deleteAccountAction(user.user?.[0]?.id));
  };
  // console.log(user)

  const changeLanguage =(lang: any) =>{
    i18n.changeLanguage(lang)
  }

  const translatedLanguages = languages.map(lang => ({
    ...lang,
    name: t(lang.name)
  }));

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
            <View style={styles.headerTitle}>
            <Text style={styles.headerText}>{t('Settings')}</Text>
            </View>
        </View>
      <View style={styles.body}>
        <View style={styles.bodypart}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('UserInfor')}>
            <Text style={{color: 'white'}}>{t('User Info')}</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>{t('My Subscriptions')}</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>{t('Profile Tags')}</Text>
            <FontAwesome6 name="greater-than" size={17} color="red" />
          </TouchableOpacity>
          <View style={styles.item}>
            <View>
              <Text style={{color: 'white'}}>{t('Language')}</Text>
            </View>
            {/* <TouchableNativeFeedback onPress={() =>{
              setOpenLanguagesList(!showLanguagesList)
              LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
            }}>
              <Text style={{color: 'white'}}>Change</Text>
            </TouchableNativeFeedback>
          {showLanguagesList && <>
              {languages.map((item, index) =>(
                <TouchableOpacity key={index} style={{paddingHorizontal: 24}}
                  onPress={() => changeLanguage(item.code)}>
                    <Text style={{color: 'white'}}>{t(item.name)}</Text>
                </TouchableOpacity>
              ))}
          </>} */}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={translatedLanguages}
              maxHeight={300}
              labelField="name"
              valueField="code"
              placeholder={!isFocus ? 'english' : '...'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.code);
                changeLanguage(item.code);
                setIsFocus(false);
              }}
            />
          </View>

        </View>
        <View style={styles.bodypart}>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>{t('Term & Conditions')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={{color: 'white'}}>{t('Privacy policy')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.item, {marginTop: 30}]}
            onPress={() => setShowAlert(!showAlert)}>
            <Text style={{color: 'red'}}>{t('Delete account')}</Text>
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
  dropdown: {
    width: "35%",
    backgroundColor: 'white',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  headerTitle:{
    position: 'absolute', 
    left: screen.width*0.3, 
    right: screen.width*0.3, 
    alignItems: 'center'
  },
  headerText:{
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold'
  }
});

