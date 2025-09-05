import * as React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {MainContent} from './components/main-content';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './pages/auth/login';
import {SignUp} from './pages/auth/sign-up';
import {SignUpCompleted} from './pages/auth/sign-up-completed';
import {ForgotPassword} from './pages/auth/forgot-password';
import ToastManager, {Toast} from 'toastify-react-native';
import {clearStorage, user as userStorageItem} from './helpers/storage';
import {setUser, useAuth} from './data/auth';
import {useShallow} from 'zustand/react/shallow';
import {isExpired} from './helpers/utils';
import {ProfileRouter, ProfileStackScreensList} from './pages/profile/router';

export type RootStackScreensList = {
  Login: undefined;
  SignUp: undefined;
  SignUpCompleted: undefined;
  MainContent: undefined;
  ForgotPassword: undefined;
  ProfileRouter: NavigatorScreenParams<ProfileStackScreensList>;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

const App = () => {
  const {user} = useAuth(
    useShallow(state => ({
      user: state.user,
    })),
  );

  React.useEffect(() => {
    const userStoraged = userStorageItem();
    if (isExpired() && userStoraged) {
      clearStorage();
      Toast.info('Your session has expired');
    } else if (userStoraged) {
      setUser(userStoraged);
    }
  }, []);

  return (
    <React.Fragment>
      <NavigationContainer>
        {user?._id ? (
          <Stack.Navigator>
            <Stack.Screen
              name="MainContent"
              component={MainContent}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfileRouter"
              component={ProfileRouter}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUpCompleted"
              component={SignUpCompleted}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <ToastManager />
    </React.Fragment>
  );
};

export default App;
