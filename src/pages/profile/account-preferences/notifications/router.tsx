import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityNotifications} from './activity';
import {FollowNotifications} from './follow';
import {MessagesNotifications} from './messages';
import {PetgramNotifications} from './from-petgram';

export type NotificationsSettingsStackScreensList = {
  Activity: undefined;
  Follow: undefined;
  Messages: undefined;
  FromPetgram: undefined;
};
const Stack =
  createNativeStackNavigator<NotificationsSettingsStackScreensList>();

export const NotificationsSettingsRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={ActivityNotifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Follow"
        component={FollowNotifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesNotifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FromPetgram"
        component={PetgramNotifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
