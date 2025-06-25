import Icon from '@react-native-vector-icons/material-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';

const Tab = createBottomTabNavigator();

type iconNames =
  | 'home-filled'
  | 'search'
  | 'add-box'
  | 'video-collection'
  | 'account-circle';

const generateIcon = (name: iconNames) => {
  return ({color, size}: {focused: boolean; size: number; color: string}) => (
    <Icon name={name} size={size} color={color} />
  );
};

export const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {color: '#900', fontSize: 20},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: generateIcon('home-filled'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: generateIcon('account-circle'),
        }}
      />
    </Tab.Navigator>
  );
};
