import {
  Text,
  TextInput as RnTextInput,
  View,
  ViewStyle,
  TouchableOpacity,
  KeyboardType,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {TextInputStyles as styles} from './TextInputStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const TextInput = ({
  label,
  placeholder,
  onChangeText,
  secureTextEntry,
  rightIcon,
  leftIcon,
  style,
  value,
  editable,
  keyboardType,
  isValid,
  errorText,
  onBlur,
}: TextInputProps) => {
  const [showPass, setShowPass] = useState(true);
  const [text, setText] = useState('');

  const onChangeTxt = (val: string) => {
    onChangeText && onChangeText(val);
    setText(val);
  };
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.labelStyles}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          isValid && {
            borderColor: colors.error70,
            borderWidth: 0.5,
            marginBottom: 0,
          },
        ]}>
        <RnTextInput
          cursorColor={'grey'}
          style={[styles.inputBox, leftIcon ? {marginLeft: responsiveWidth(8)} : null]}
          editable={editable}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#1A1A1A66'}
          onChangeText={onChangeTxt}
          secureTextEntry={secureTextEntry ? showPass : false}
          keyboardType={keyboardType}
          onBlur={onBlur}
        />
        <View style={{position: 'absolute', right: 7}}>
          {rightIcon && rightIcon}
        </View>
        <View style={{position: 'absolute', left: 7}}>
          {leftIcon && leftIcon}
        </View>
      </View>
      {isValid && errorText && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}
      {secureTextEntry === true && text.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setShowPass(!showPass);
          }}
          style={styles.eye}>
          <Icon
            name={showPass ? 'eye-off' : 'eye'}
            color={"#0097F0"}
            size={24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;

export interface TextInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  editable?: boolean;
  keyboardType?: KeyboardType;
  isValid?: boolean | any;
  errorText?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
