import {View} from 'react-native';
import React from 'react';
import {ForgotPasswordStyles as styles} from '../styles/ForgotPasswordStyles';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/ButtonComponent/ButtonComponent';

const ForgotPassword = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.screenWrapper}>
        <CustomText
          fontSize={responsiveFontSize(3.5)}
          fontFamily={FontType.Roboto_Bold}>
          Forgot Password?
        </CustomText>
        <CustomText style={styles.weWillSend}>
          We will send you an otp on your email
        </CustomText>
        <TextInput placeholder="E-mail" style={styles.textInput} />
        <Button
          title="Send OTP"
          buttonStyle={{width: '100%'}}
          onPress={() => navigation.navigate('verifyotp')}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
