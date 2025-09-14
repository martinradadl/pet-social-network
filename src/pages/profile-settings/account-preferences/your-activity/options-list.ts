import {YourActivityStackScreensList} from './router';

export type YourActivityOptionsIcon =
  | 'favorite-border'
  | 'apps'
  | 'autorenew'
  | 'portrait'
  | 'list-alt'
  | 'ondemand-video'
  | 'delete-outline';

type OptionItem = {
  icon?: YourActivityOptionsIcon;
  label: string;
  navigateTo: keyof YourActivityStackScreensList;
};

type OptionsSection = {
  title: string;
  options: OptionItem[];
};

export const YOUR_ACTIVITY_OPTIONS_LIST: OptionsSection[] = [
  {
    title: 'Interactions',
    options: [
      {
        icon: 'favorite-border',
        label: 'Likes',
        navigateTo: 'Likes',
      },
      {
        icon: 'list-alt',
        label: 'Comments',
        navigateTo: 'Comments',
      },
      {
        icon: 'autorenew',
        label: 'Reposts',
        navigateTo: 'Reposts',
      },
      {
        icon: 'portrait',
        label: 'Tags',
        navigateTo: 'Tags',
      },
    ],
  },
  {
    title: 'Content you shared',
    options: [
      {
        icon: 'apps',
        label: 'Posts',
        navigateTo: 'Posts',
      },
      {
        icon: 'ondemand-video',
        label: 'Reels',
        navigateTo: 'Reels',
      },
      {
        icon: 'delete-outline',
        label: 'Recently deleted',
        navigateTo: 'RecentlyDeleted',
      },
    ],
  },
];
