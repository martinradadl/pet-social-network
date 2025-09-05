import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileOptions} from './options';
import {Profile} from '.';
import {SavedPosts} from './content-preferences/saved';
import {Archive} from './content-preferences/archive';
import {YourActivity} from './account-preferences/your-activity';
import {AccountPrivacy} from './account-preferences/account-privacy';
import {Notifications} from './account-preferences/notifications';
import {Blocked} from './who-you-see/blocked';
import {Muted} from './who-you-see/muted';
import {Favorites} from './who-you-see/favorites';
import {CloseFriends} from './who-you-see/close-friends';
import {ReportProblem} from './more/report-problem';

export type ProfileStackScreensList = {
  Profile: undefined;
  Options: undefined;

  Saved: undefined;
  Archive: undefined;

  YourActivity: undefined;
  AccountPrivacy: undefined;
  Notifications: undefined;

  Blocked: undefined;
  CloseFriends: undefined;
  Favorites: undefined;
  Muted: undefined;

  ReportProblem: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackScreensList>();

export const ProfileRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
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
        name="AccountPrivacy"
        component={AccountPrivacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
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
