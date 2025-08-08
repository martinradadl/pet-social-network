import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainContent} from './components/main-content';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './pages/auth/login';
import {SignUp} from './pages/auth/sign-up';
import {SignUpCompleted} from './pages/auth/sign-up-completed';
import {ForgotPassword} from './pages/auth/forgot-password';
import {useAuth} from './data/auth';
import {useShallow} from 'zustand/react/shallow';
import ToastManager from 'toastify-react-native';

export type RootStackScreensList = {
  Login: undefined;
  SignUp: undefined;
  SignUpCompleted: undefined;
  MainContent: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const {user} = useAuth(
    useShallow(state => ({
      user: state.user,
    })),
  );

  React.useEffect(() => {
    if (user?._id) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user?._id]);

  return (
    <React.Fragment>
      <NavigationContainer>
        {isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="MainContent"
              component={MainContent}
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
