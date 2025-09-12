import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ProfileOptionsStackScreensList} from '../../router';
import {ScreenHeader} from '../../../../components/header';
import {ProfileOption} from '../../option';
import {YOUR_ACTIVITY_OPTIONS_LIST} from './options-list';
import {COLORS} from '../../../../global-styles';

type NavigationProp = NativeStackNavigationProp<
  ProfileOptionsStackScreensList,
  'YourActivityRouter'
>;

export const YourActivity = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader title="Your activity" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          View and manage your interactions, content and account activity.
        </Text>

        {YOUR_ACTIVITY_OPTIONS_LIST.map((section, index) => (
          <View key={index} style={styles.sectionWrapper}>
            <View style={styles.fullWidthLine} />
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.options.map(option => (
              <ProfileOption
                key={option.label}
                icon={option.icon}
                label={option.label}
                onPress={() => {
                  return navigation.navigate('YourActivityRouter', {
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
