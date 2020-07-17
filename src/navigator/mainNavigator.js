import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList79626Navigator from '../features/NotificationList79626/navigator';
import Settings79625Navigator from '../features/Settings79625/navigator';
import Settings79617Navigator from '../features/Settings79617/navigator';
import UserProfile79615Navigator from '../features/UserProfile79615/navigator';
import BlankScreen179593Navigator from '../features/BlankScreen179593/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList79626: { screen: NotificationList79626Navigator },
Settings79625: { screen: Settings79625Navigator },
Settings79617: { screen: Settings79617Navigator },
UserProfile79615: { screen: UserProfile79615Navigator },
BlankScreen179593: { screen: BlankScreen179593Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
