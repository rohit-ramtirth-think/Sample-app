import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ForgotPasswordStyles as styles} from '../styles/ForgotPasswordStyles';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/ButtonComponent/ButtonComponent';

const SetNewPassword = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.screenWrapper}>
        <CustomText
          fontSize={responsiveFontSize(3.5)}
          fontFamily={FontType.Roboto_Bold}>
          Set New Password
        </CustomText>
        <TextInput
          placeholder="New Password"
          style={[styles.textInput, {marginBottom: responsiveHeight(0)}]}
        />
        <TextInput placeholder="Confirm Password" style={styles.textInput} />
        <Button
          title="Set Password"
          buttonStyle={{width: '100%'}}
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </View>
  );
};

export default SetNewPassword;
