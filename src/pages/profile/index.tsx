import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {COLORS} from '../../global-styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreensList} from '../../main-router';
import {useRef, useState} from 'react';
import {PostsGrid} from '../../components/posts/posts-grid';
import {MyEmptyListView} from './my-empty-list-view';
import {ProfileInfo} from './profile-info';
import {ProfileTabBar, ProfileTabI} from './tab-bar';

const HEADER_HEIGHT = 86;

type NavigationProp = NativeStackNavigationProp<
  RootStackScreensList,
  'ProfileOptionsRouter'
>;

const profileLists: Record<ProfileTabI, {id: string}[]> = {
  posts: Array.from({length: 19}, (_, i) => ({id: i.toString()})),
  reposts: Array.from({length: 0}, (_, i) => ({id: i.toString()})),
  tags: Array.from({length: 0}, (_, i) => ({id: i.toString()})),
};

export const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  const username = 'username';

  const [activeTab, setActiveTab] = useState<ProfileTabI>('posts');
  const indicator = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="lock-outline" size={20} color={COLORS.PRIMARY_TEXT} />
        <Text style={styles.username}>{username}</Text>
        <Icon name="add-box" size={36} color={COLORS.PRIMARY_TEXT} />
        <Icon
          name="menu"
          size={36}
          color={COLORS.PRIMARY_TEXT}
          onPress={() =>
            navigation.navigate('ProfileOptionsRouter', {screen: 'Options'})
          }
        />
      </View>

      <View style={styles.profileContentContainer}>
        <PostsGrid
          numColumns={3}
          profileInfo={<ProfileInfo />}
          tabsInfo={
            <ProfileTabBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              indicator={indicator}
            />
          }
          postsList={profileLists[activeTab]}
          emptyListView={<MyEmptyListView type={activeTab} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },

  header: {
    paddingTop: 28,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
  },
  username: {fontSize: 24, flex: 1, fontWeight: 'bold'},

  profileContentContainer: {flex: 1},
});
