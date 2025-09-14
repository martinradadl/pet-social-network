import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileOptions} from './options';
import {SavedPosts} from './content-preferences/saved';
import {Archive} from './content-preferences/archive';
import {YourActivity} from './account-preferences/your-activity';
import {AccountPrivacy} from './account-preferences/account-privacy';
import {Blocked} from './who-you-see/blocked';
import {Muted} from './who-you-see/muted';
import {Favorites} from './who-you-see/favorites';
import {CloseFriends} from './who-you-see/close-friends';
import {ReportProblem} from './more/report-problem';
import {NavigatorScreenParams} from '@react-navigation/native';
import {
  YourActivityRouter,
  YourActivityStackScreensList,
} from './account-preferences/your-activity/router';
import {
  NotificationsSettingsRouter,
  NotificationsSettingsStackScreensList,
} from './account-preferences/notifications/router';
import {NotificationsSettings} from './account-preferences/notifications/index';

export type ProfileOptionsStackScreensList = {
  Options: undefined;

  Saved: undefined;
  Archive: undefined;

  YourActivity: undefined;
  YourActivityRouter: NavigatorScreenParams<YourActivityStackScreensList>;
  AccountPrivacy: undefined;
  Notifications: undefined;
  NotificationsRouter: NavigatorScreenParams<NotificationsSettingsStackScreensList>;

  Blocked: undefined;
  CloseFriends: undefined;
  Favorites: undefined;
  Muted: undefined;

  ReportProblem: undefined;
};

const Stack = createNativeStackNavigator<ProfileOptionsStackScreensList>();

export const ProfileOptionsRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Options"
        component={ProfileOptions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Saved"
        component={SavedPosts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Archive"
        component={Archive}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="YourActivity"
        component={YourActivity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="YourActivityRouter"
        component={YourActivityRouter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountPrivacy"
        component={AccountPrivacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationsRouter"
        component={NotificationsSettingsRouter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Blocked"
        component={Blocked}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CloseFriends"
        component={CloseFriends}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Muted"
        component={Muted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
