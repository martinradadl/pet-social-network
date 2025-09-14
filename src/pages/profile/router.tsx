import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsScreen} from '../posts';

export type ProfileStackScreensList = {
  Posts: undefined;
};
const Stack = createNativeStackNavigator<ProfileStackScreensList>();

export const ProfileRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
