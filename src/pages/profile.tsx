import {useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {StoriesCarousel} from '../components/stories/stories-carousel';
import {logout} from '../data/auth';
import {COLORS} from '../global-styles';

const HEADER_HEIGHT = 86;

export const Profile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerTranslateAnim = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const username = 'username';
  const postsCount = 8;
  const followersCount = 88;
  const followingCount = 102;
  const name = 'Name';
  const bio = 'this is a bio';

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateAnim}]},
        ]}>
        <Icon name="lock-outline" size={20} color={COLORS.PRIMARY_TEXT} />
        <Text style={styles.username}>{username}</Text>
        <Icon name="add-box" size={36} color={COLORS.PRIMARY_TEXT} />
        {/*TODO move logout to user settings page*/}
        <Icon
          name="menu"
          size={36}
          color={COLORS.PRIMARY_TEXT}
          onPress={logout}
        />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={styles.details}>
          <View style={styles.overview}>
            <View style={styles.userPhoto} />
            <View style={styles.counter}>
              <Text style={styles.counterValue}>{postsCount}</Text>
              <Text style={styles.counterLabel}>posts</Text>
            </View>
            <View style={styles.counter}>
              <Text style={styles.counterValue}>{followersCount}</Text>
              <Text style={styles.counterLabel}>followers</Text>
            </View>
            <View style={styles.counter}>
              <Text style={styles.counterValue}>{followingCount}</Text>
              <Text style={styles.counterLabel}>following</Text>
            </View>
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>

          <View style={styles.options}>
            <TouchableOpacity style={styles.optionsButton}>
              <Text style={styles.optionsButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <Text style={styles.optionsButtonText}>Share profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StoriesCarousel />

        <View style={styles.tabs}>
          <Icon name="apps" size={32} color={COLORS.PRIMARY_TEXT} />
          <Icon name="autorenew" size={32} color={COLORS.PRIMARY_TEXT} />
          <Icon name="portrait" size={32} color={COLORS.PRIMARY_TEXT} />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 28,
    backgroundColor: COLORS.BACKGROUND,
    zIndex: 1000,
    elevation: 4,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
  },
  username: {fontSize: 24, flex: 1, fontWeight: 'bold'},
  details: {
    paddingHorizontal: 10,
  },
  overview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  userPhoto: {
    height: 80,
    width: 80,
    borderRadius: '50%',
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  counter: {gap: 3, alignItems: 'center'},
  counterValue: {fontSize: 24, fontWeight: 'bold'},
  counterLabel: {fontSize: 16},
  name: {fontSize: 20, fontWeight: 'bold'},
  bio: {fontSize: 20},
  options: {flexDirection: 'row', gap: 8, paddingTop: 12, paddingBottom: 20},
  optionsButton: {
    borderRadius: 6,
    backgroundColor: COLORS.SECONDARY_BUTTON,
    paddingVertical: 4,
    flex: 1,
    alignItems: 'center',
  },
  optionsButtonText: {color: COLORS.SECONDARY_TEXT, fontSize: 16},
  tabs: {flexDirection: 'row', justifyContent: 'space-around'},
});
