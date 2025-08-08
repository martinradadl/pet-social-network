import {LoginI, RegisterI, UserI} from '../data/auth';

export const fakeNewUser: RegisterI = {
  email: 'fakeEmail',
  username: 'fakeUsername',
  password: 'fakePassword',
  name: 'fakeName',
};

export const fakeLoginCredentials: LoginI = {
  username: 'fakeUsername',
  password: 'fakePassword',
};

export const fakeUser: UserI = {
  _id: 'fakeId',
  email: 'fakeEmail',
  username: 'fakeUsername',
  password: 'fakePassword',
  name: 'fakeName',
  bio: 'fakeBio',
  profilePic: 'fakeProfilePic',
  isPrivate: false,
  isVerified: true,
};
