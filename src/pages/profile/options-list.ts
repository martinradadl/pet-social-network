import {ProfileOptionsStackScreensList} from './router';

export type ProfileOptionsIcon =
  | 'bookmark-border'
  | 'lock-outline'
  | 'notifications-none'
  | 'archive'
  | 'star'
  | 'block'
  | 'help-center'
  | 'star-border'
  | 'notifications-off'
  | 'area-chart';

type OptionItem = {
  icon?: ProfileOptionsIcon;
  label: string;
  navigateTo: keyof ProfileOptionsStackScreensList;
};

type OptionsSection = {
  title: string;
  options: OptionItem[];
};

export const PROFILE_OPTIONS_LIST: OptionsSection[] = [
  {
    title: 'Content preferences',
    options: [
      {
        icon: 'bookmark-border',
        label: 'Saved',
        navigateTo: 'Saved',
      },
      {
        icon: 'archive',
        label: 'Archive',
        navigateTo: 'Archive',
      },
    ],
  },
  {
    title: 'Account preferences',
    options: [
      {
        icon: 'area-chart',
        label: 'Your activity',
        navigateTo: 'YourActivity',
      },
      {
        icon: 'notifications-none',
        label: 'Notifications',
        navigateTo: 'Notifications',
      },
      {
        icon: 'lock-outline',
        label: 'Account privacy',
        navigateTo: 'AccountPrivacy',
      },
    ],
  },
  {
    title: 'Who you see',
    options: [
      {
        icon: 'star',
        label: 'Close Friends',
        navigateTo: 'CloseFriends',
      },
      {
        icon: 'star-border',
        label: 'Favorites',
        navigateTo: 'Favorites',
      },
      {
        icon: 'block',
        label: 'Blocked',
        navigateTo: 'Blocked',
      },
      {
        icon: 'notifications-off',
        label: 'Muted',
        navigateTo: 'Muted',
      },
    ],
  },
  {
    title: 'More',
    options: [
      {
        icon: 'help-center',
        label: 'Report a problem',
        navigateTo: 'ReportProblem',
      },
    ],
  },
];
