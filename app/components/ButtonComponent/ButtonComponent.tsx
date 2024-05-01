import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ButtonComponentStyles as styles} from './ButtonComponentStyles';

const Button = ({title, onPress, buttonStyle, textStyle, disabled}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyle,
        disabled && {backgroundColor: '#ACB4BD'},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

interface Props {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}
