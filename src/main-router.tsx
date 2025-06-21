import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './pages/home';
import {Profile} from './pages/profile';
import {Footer} from './components/footer';

export type RootStackScreensList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
