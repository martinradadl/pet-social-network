import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../global-styles';
import {ProfileTabI} from './tab-bar';

const MY_EMPTY_LIST_WARNINGS: Record<
  ProfileTabI,
  {title: string; description: string}
> = {
  posts: {
    title: 'Create your first post',
    description: 'Make this space your own',
  },
  reposts: {
    title: 'No reposts',
    description: 'There are no reposts to show',
  },
  tags: {
    title: 'Photos and videos of you',
    description:
      "When people tag you in photos and videos, they'll appear here",
  },
};

type MyEmptyListViewProps = {
  type: ProfileTabI;
};

export const MyEmptyListView = (props: MyEmptyListViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {MY_EMPTY_LIST_WARNINGS[props.type].title}
      </Text>

      <Text style={styles.description}>
        {MY_EMPTY_LIST_WARNINGS[props.type].description}
      </Text>

      {props.type === 'posts' ? (
        <TouchableOpacity style={styles.addPostButton} onPress={() => {}}>
          <Text style={styles.addPostButtonText}>Create</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 30,
  },
  title: {fontSize: 28, fontWeight: 'bold'},
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.SECONDARY_BUTTON,
  },
  addPostButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY_BUTTON,
  },
  addPostButtonText: {
    fontSize: 20,
    color: COLORS.SECONDARY_TEXT,
    marginHorizontal: 'auto',
  },
});
