import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../constants/Colors';
import {FontType} from '../../constants/FontType';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

interface SmallButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  outlined?: boolean;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  outlined,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        outlined && {backgroundColor: 'transparent'},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, outlined && {color: colors.primary},textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: responsiveHeight(0.6),
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.7)
    
  },
});

export default SmallButton;
