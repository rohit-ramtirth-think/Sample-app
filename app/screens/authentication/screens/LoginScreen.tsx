import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoginScreenStyles as styles} from '../styles/LoginScreenStyles';
import TextInput from '../../../components/TextInput/TextInput';
import {ImagePath} from '../../../constants/ImagePaths';
import Checkbox from '../../../components/CheckBox/CheckBox';
import Row from '../../../components/Row/Row';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import {signInAction} from '../store/async-actions/signInAction';
import {useAppDispatch, useAppSelector} from '../../../redux/store/hooks';
import {RootState} from '../../../redux/store/storeConfig';
import Loader from '../../../components/Loader/Loader';

const LoginScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state: RootState) => state.auth?.loading);

  const isLoggedIn = useAppSelector((state: RootState) => state.auth?.loggedIn);

  useEffect(() => {
    // isLoggedIn && navigation.replace('Main');
  }, [isLoggedIn]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleBlur = (fieldName: string) => {
    if (fieldName === 'username') {
      if (!username) {
        setErrors({...errors, username: 'Username is required'});
      } else {
        setErrors({...errors, username: ''});
      }
    } else if (fieldName === 'password') {
      if (!password) {
        setErrors({...errors, password: 'Password is required'});
      } else {
        setErrors({...errors, password: ''});
      }
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    if (fieldName === 'username') {
      setUsername(value);
      if (errors.username) {
        setErrors({...errors, username: ''});
      }
    } else if (fieldName === 'password') {
      setPassword(value);
      if (errors.password) {
        setErrors({...errors, password: ''});
      }
    }
  };

  const handleSignIn = () => {
    const errors: {[key: string]: string} = {};

    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      dispatch(signInAction({username, password}));
    } else {
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBgContainer}>
        <ImageBackground
          source={ImagePath.backgroundLoginImage}
          resizeMode="cover"
          style={styles.image1}>
          <View style={styles.greetContainer}>
            <View style={styles.greetTxtContainer}>
              <Text style={styles.welcomeTxt}>Welcome</Text>
            </View>
            <View>
              <ImageBackground
                style={styles.image2}
                source={ImagePath.doctorImage}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.signInFormContainer}>
          <Text style={styles.signInTxt}>Sign In</Text>
          <TextInput
            value={username}
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={value => handleChange('username', value)}
            isValid={errors.username}
            onBlur={() => handleBlur('username')}
          />
          {errors.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}
          <TextInput
            placeholder="Password"
            onChangeText={value => handleChange('password', value)}
            onBlur={() => handleBlur('password')}
            value={password}
            isValid={errors.password}
            secureTextEntry
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <View style={styles.forgotPassRow}>
            <Row>
              <Checkbox />
              <Text style={styles.remMeTxt}>Remember me</Text>
            </Row>
            <TouchableOpacity
              onPress={() => navigation.navigate('forgotpassword')}>
              <Text style={styles.forgPassTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button title="Continue" onPress={handleSignIn} />
        </View>
      </ScrollView>
      {loading && <Loader />}
    </View>
  );
};

export default LoginScreen;
