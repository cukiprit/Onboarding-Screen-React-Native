import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import OnboardingScreen from '../components/Onboard/OnboardingScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFE559',
  },
};

const Routing = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboard" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login />;
  }
};

export default Routing;
