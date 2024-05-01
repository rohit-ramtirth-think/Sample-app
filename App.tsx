import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './app/navigation/StackNavigators/AppNavigator';
import 'react-native-gesture-handler';
import KeyboardAvoidingViewWrapper from './app/components/KeyboardAvoidingView/KeyboardAvoidingViewWrapper';

const App = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingViewWrapper>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <AppNavigator />
      </KeyboardAvoidingViewWrapper>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
