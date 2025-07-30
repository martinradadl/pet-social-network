import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Footer} from './components/footer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './pages/auth/login';
import {SignUp} from './pages/auth/sign-up';
import {SignUpCompleted} from './pages/auth/sign-up-completed';
import {ForgotPassword} from './pages/auth/forgot-password';
import {useAuth} from './data/auth';
import {useShallow} from 'zustand/react/shallow';

export type RootStackScreensList = {
  Login: undefined;
  SignUp: undefined;
  SignUpCompleted: undefined;
  Footer: undefined;
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
    }
  }, [user?._id]);

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
          <Stack.Navigator initialRouteName="SignUpCompleted">
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
    </React.Fragment>
  );
};

export default App;
