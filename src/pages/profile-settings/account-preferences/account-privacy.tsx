import {ScrollView, StyleSheet, Switch, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenHeader} from '../../../components/header';
import {COLORS} from '../../../global-styles';
import {useState} from 'react';

export const AccountPrivacy = () => {
  const [isPrivate, setIsPrivated] = useState(false);
  const toggleSwitch = () => setIsPrivated(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Account privacy" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Private account</Text>
          <Switch
            trackColor={{
              false: COLORS.SECONDARY_BUTTON,
              true: COLORS.SECONDARY_BUTTON,
            }}
            thumbColor={COLORS.LABEL_TEXT}
            onValueChange={toggleSwitch}
            value={isPrivate}
            style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
          />
        </View>
        <Text>
          When your account is public, your profile and posts can be seen by
          anyone, on or off Petgram, even if they don't have a Petgram account
        </Text>
        <Text>
          When your account is private, only the followers you approve can see
          what you share, incluiding posts, followers and following lists.
          Certain info on your profile, like your profile picture and username,
          is visible to everyone on and off Petgram
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: COLORS.SECONDARY_BUTTON,
  },
});
