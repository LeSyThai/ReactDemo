import React, { useEffect } from "react";
import AppNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store/store";
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {name as appName} from './app.json'
import { AppRegistry } from "react-native";


// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

//KillState

messaging().getInitialNotification(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);

function App() {
  async function requestUserPermission() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
      const token = await messaging().getToken()
      console.log('FCM Token:', token)
    }
  }
  
  useEffect(()=>{
    requestUserPermission()
  }, [])
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}

export default App;