import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import PublisherScreen from '../screens/PublisherScreen'


  
  const Tabnavigations = createBottomTabNavigator({
      Home: HomeScreen,
      Search: SearchScreen,
      Publisher : PublisherScreen
    });
  
  export default createAppContainer(Tabnavigations);