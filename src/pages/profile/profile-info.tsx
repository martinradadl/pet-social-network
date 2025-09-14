import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../global-styles';
import {StoriesCarousel} from '../../components/stories/stories-carousel';

export const ProfileInfo = () => {
  const postsCount = 8;
  const followersCount = 88;
  const followingCount = 102;
  const name = 'Name';
  const bio = 'this is a bio';
  const storiesList = Array.from({length: 6}, (_, i) => ({id: i.toString()}));

  return (
    <View style={styles.profileInfoContainer}>
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

      <StoriesCarousel storiesList={storiesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfoContainer: {flexGrow: 0},
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
  options: {flexDirection: 'row', gap: 8, paddingTop: 12},
  optionsButton: {
    borderRadius: 6,
    backgroundColor: COLORS.SECONDARY_BUTTON,
    paddingVertical: 4,
    flex: 1,
    alignItems: 'center',
  },
  optionsButtonText: {color: COLORS.SECONDARY_TEXT, fontSize: 16},
});
