import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserLikesList} from './likes';
import {UserCommentsList} from './comments';
import {UserRepostsList} from './reposts';
import {UserTagsList} from './tags';
import {UserPostsList} from './posts';
import {UserReelsList} from './reels';
import {RecentlyDeletedPostsList} from './recently-deleted';

export type YourActivityStackScreensList = {
  Likes: undefined;
  Comments: undefined;
  Reposts: undefined;
  Tags: undefined;
  Posts: undefined;
  Reels: undefined;
  RecentlyDeleted: undefined;
};
const Stack = createNativeStackNavigator<YourActivityStackScreensList>();

export const YourActivityRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Likes"
        component={UserLikesList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Comments"
        component={UserCommentsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reposts"
        component={UserRepostsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tags"
        component={UserTagsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Posts"
        component={UserPostsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reels"
        component={UserReelsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecentlyDeleted"
        component={RecentlyDeletedPostsList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
