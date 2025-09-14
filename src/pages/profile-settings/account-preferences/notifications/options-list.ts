import {NotificationsSettingsStackScreensList} from './router';

type OptionItem = {
  label: string;
  navigateTo: keyof NotificationsSettingsStackScreensList;
};

type OptionsSection = {
  title: string;
  options: OptionItem[];
};

export const NOTIFICATIONS_SETTINGS_LIST: OptionsSection[] = [
  {
    title: 'Push notifications',
    options: [
      {
        label: 'Posts, stories and comments',
        navigateTo: 'Activity',
      },
      {
        label: 'Following and followers',
        navigateTo: 'Follow',
      },
      {
        label: 'Messages',
        navigateTo: 'Messages',
      },
      {
        label: 'From Petgram',
        navigateTo: 'FromPetgram',
      },
    ],
  },
];
