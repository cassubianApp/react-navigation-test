import { createStackNavigator, createAppContainer } from "react-navigation";

//components
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';

const AppNavigator = createStackNavigator({
  ScreenOne,
  ScreenTwo});

export default createAppContainer(AppNavigator);