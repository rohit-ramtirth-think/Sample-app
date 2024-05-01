import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/Colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.orgName}>Splash Screen</Text>

      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(222, 238, 242)',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: '100%',
  },
  orgName: {
    fontSize: responsiveFontSize(5),
    fontFamily: FontType.Roboto_Medium,
    color: colors.primary,
  },
  desc: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FontType.Roboto_Medium,
    color: '#DC6803',
  },
});
