import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/authentication/screens/LoginScreen';
import ForgotPassword from '../../screens/authentication/screens/ForgotPassword';
import VerifyOtp from '../../screens/authentication/screens/VerifyOtp';
import SetNewPassword from '../../screens/authentication/screens/SetNewPassword';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="forgotpassword"
          options={{headerShown: false}}
          component={ForgotPassword}
        />
         <Stack.Screen
          name="verifyotp"
          options={{headerShown: false}}
          component={VerifyOtp}
        />
         <Stack.Screen
          name="setpass"
          options={{headerShown: false}}
          component={SetNewPassword}
        />
      </Stack.Navigator>
  );
};

export default AuthNavigator;


