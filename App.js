import { createStackNavigator, createAppContainer } from "react-navigation";

//components
import ScreenOne from './comp/ScreenOne';
import ScreenTwo from './comp/ScreenTwo';

const AppNavigator = createStackNavigator({
  ScreenOne,
  ScreenTwo});

export default createAppContainer(AppNavigator);