import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Footer} from './components/footer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './pages/auth/login';
import {SignUp} from './pages/auth/sign-up';

export type RootStackScreensList = {
  Login: undefined;
  SignUp: undefined;
  Footer: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

const App = () => {
  const isAuthenticated = true;

  return (
    <React.Fragment>
      <NavigationContainer>
        {isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Footer"
              component={Footer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
