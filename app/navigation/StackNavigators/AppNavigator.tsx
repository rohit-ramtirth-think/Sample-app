import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from '../../screens/authentication/screens/SplashScreen';
import {useAppSelector} from '../../redux/store/hooks';
import {RootState} from '../../redux/store/storeConfig';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const AppNavigator = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const isLoggedIn = useAppSelector((state: RootState) => state.auth.loggedIn);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 1000);
  }, []);

  if (!isAppReady) {
    return  (
      <View style={{flex:1}}>
         <SplashScreen />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName={!isLoggedIn ? 'Auth' : 'Main'}
      >
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
