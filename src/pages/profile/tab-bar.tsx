import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../global-styles';
import Icon from '@react-native-vector-icons/material-icons';
import {useEffect} from 'react';

export const TABS = ['posts', 'reposts', 'tags'];
export type ProfileTabI = (typeof TABS)[number];
type IconNames = 'apps' | 'autorenew' | 'portrait';

const TABS_ICONS: Record<ProfileTabI, IconNames> = {
  posts: 'apps',
  reposts: 'autorenew',
  tags: 'portrait',
};

type ProfileTabBarProps = {
  activeTab: ProfileTabI;
  setActiveTab: (tab: ProfileTabI) => void;
  indicator: Animated.Value;
};

const tabWidth = Dimensions.get('window').width / TABS.length;
const indicatorWidth = Dimensions.get('window').width / (TABS.length * 2);

export const ProfileTabBar = ({
  activeTab,
  setActiveTab,
  indicator,
}: ProfileTabBarProps) => {
  useEffect(() => {
    const index = TABS.indexOf(activeTab);
    const position = index * tabWidth + (tabWidth - indicatorWidth) / 2;

    Animated.spring(indicator, {
      toValue: position,
      useNativeDriver: true,
    }).start();
  }, [activeTab, indicator]);

  return (
    <View>
      <View style={styles.tabs}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}>
            <Icon
              name={TABS_ICONS[tab]}
              size={32}
              color={
                activeTab === tab ? COLORS.PRIMARY_BUTTON : COLORS.PRIMARY_TEXT
              }
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.indicatorWrapper}>
        <Animated.View
          style={[styles.indicator, {transform: [{translateX: indicator}]}]}
        />
      </View>
      <View style={styles.contentSeparator} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  tab: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  contentSeparator: {
    backgroundColor: COLORS.SECONDARY_BUTTON,
    height: 2,
    width: '100%',
  },
  indicatorWrapper: {
    height: 4,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  indicator: {
    height: 4,
    backgroundColor: COLORS.PRIMARY_BUTTON,
    borderRadius: 1,
    position: 'absolute',
    width: indicatorWidth,
  },
});
