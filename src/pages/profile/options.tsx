import Icon from '@react-native-vector-icons/material-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../global-styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {OPTIONS_LIST, OptionsIcon} from './options-list';
import {logout} from '../../data/auth';
import {ChangePasswordModal} from './auth-preferences/change-password';
import {RootStackScreensList} from '../../main-router';
import {ScreenHeader} from '../../components/header';

type NavigationProp = NativeStackNavigationProp<
  RootStackScreensList,
  'ProfileRouter'
>;

type ProfileOptionProps = {
  icon?: OptionsIcon;
  label: string;
  onPress: () => void;
  hasWarningLabel?: boolean;
};

const OPTIONS_ICON_SIZE = 34;

const ProfileOption = (props: ProfileOptionProps) => {
  return (
    <TouchableOpacity style={styles.optionsItem} onPress={props.onPress}>
      {props.icon ? (
        <Icon
          name={props.icon}
          size={OPTIONS_ICON_SIZE}
          color={COLORS.PRIMARY_TEXT}
        />
      ) : null}
      <Text
        style={{
          ...styles.optionsLabel,
          ...(props.hasWarningLabel ? styles.warningLabel : null),
        }}>
        {props.label}
      </Text>
      <Icon
        name="keyboard-arrow-right"
        size={OPTIONS_ICON_SIZE}
        color={COLORS.SECONDARY_BUTTON}
      />
    </TouchableOpacity>
  );
};

export const ProfileOptions = () => {
  const navigation = useNavigation<NavigationProp>();
  const [search, onChangeSearch] = useState('');
  const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] =
    useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader title="Settings and activity" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeSearch}
          value={search}
          placeholder="Search"
          placeholderTextColor={COLORS.LABEL_TEXT}
        />

        {OPTIONS_LIST.map((section, index) => (
          <View key={index} style={styles.sectionWrapper}>
            <View style={styles.fullWidthLine} />
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.options.map(option => (
              <ProfileOption
                key={option.label}
                icon={option.icon}
                label={option.label}
                onPress={() => {
                  return navigation.navigate('ProfileRouter', {
                    screen: option.navigateTo,
                  });
                }}
              />
            ))}
          </View>
        ))}
        <View style={styles.sectionWrapper}>
          <View style={styles.fullWidthLine} />
          <Text style={styles.sectionTitle}>Authentication preferences</Text>
          <ProfileOption label="Change password" onPress={() => {}} />
          <ChangePasswordModal
            modalVisible={isChangePasswordModalVisible}
            setModalVisible={setIsChangePasswordModalVisible}
          />
          <ProfileOption
            label="Delete account"
            onPress={() => {}}
            hasWarningLabel
          />
          <ProfileOption label="Log out" onPress={logout} hasWarningLabel />
        </View>
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
  searchInput: {
    height: 36,
    borderRadius: 6,
    backgroundColor: COLORS.SECONDARY_BUTTON,
    color: COLORS.SECONDARY_TEXT,
    paddingHorizontal: 8,
    paddingVertical: 8,
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
