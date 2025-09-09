import {ScrollView, StyleSheet, Switch, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ProfileOptionsStackScreensList} from '../../router';
import {ScreenHeader} from '../../../../components/header';
import {ProfileOption} from '../../option';
import {NOTIFICATIONS_SETTINGS_LIST} from './options-list';
import {COLORS} from '../../../../global-styles';
import {useState} from 'react';

type NavigationProp = NativeStackNavigationProp<
  ProfileOptionsStackScreensList,
  'NotificationsRouter'
>;

export const NotificationsSettings = () => {
  const navigation = useNavigation<NavigationProp>();
  const [arePaused, setArePaused] = useState(false);
  const toggleSwitch = () => setArePaused(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader title="Notifications" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {NOTIFICATIONS_SETTINGS_LIST.map((section, index) => (
          <View key={index} style={styles.sectionWrapper}>
            <View style={styles.fullWidthLine} />
            <Text style={styles.sectionTitle}>{section.title}</Text>

            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Pause all</Text>
              <Switch
                trackColor={{
                  false: COLORS.SECONDARY_BUTTON,
                  true: COLORS.SECONDARY_BUTTON,
                }}
                thumbColor={COLORS.LABEL_TEXT}
                onValueChange={toggleSwitch}
                value={arePaused}
                style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              />
            </View>
            <Text style={styles.switchContainerDescription}>
              Temporarily pause notifications
            </Text>

            {section.options.map(option => (
              <ProfileOption
                key={option.label}
                label={option.label}
                onPress={() => {
                  return navigation.navigate('NotificationsRouter', {
                    screen: option.navigateTo,
                  });
                }}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    gap: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.SECONDARY_BUTTON,
    textAlign: 'center',
    paddingVertical: 12,
  },
  sectionWrapper: {
    position: 'relative',
  },
  fullWidthLine: {
    position: 'absolute',
    left: -20,
    right: -20,
    top: 0,
    height: 3,
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.SECONDARY_BUTTON,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchContainerDescription: {
    fontSize: 14,
    color: COLORS.SECONDARY_BUTTON,
    paddingTop: 8,
    paddingBottom: 20,
  },
  optionsItem: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionsLabel: {
    flex: 1,
    fontSize: 18,
  },
  warningLabel: {color: COLORS.ERROR},
});
