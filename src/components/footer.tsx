import Icon from '@react-native-vector-icons/material-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';

const Tab = createBottomTabNavigator();
const homeIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <Icon name="home-filled" size={size} color={color} />;

export const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarIconStyle: {color: '#900', fontSize: 20}}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

  // return (
  //   <View>
  //     <View style={styles.options}>
  // <Icon name="home-filled" size={20} color="#900" />;
  //       <Icon name="search" size={20} color="#900" />
  //       <Icon name="add-box" size={20} color="#900" />
  //       <Icon name="video-collection" size={20} color="#900" />
  //       <Icon
  //         name="account-circle"
  //         size={20}
  //         color="#900"
  //         onPress={() => navigation.navigate('Profile')}
  //       />
  //     </View>
  //   </View>
  // );
};
