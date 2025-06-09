/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainRouter from './src/main-router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainRouter);
