import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const registerFCM = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
  }

  messaging().onMessage(async remoteMessage => {
    Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
  });
};
