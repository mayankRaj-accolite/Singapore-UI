/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import payment from './payment';
import Query from './Query';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => payment);
