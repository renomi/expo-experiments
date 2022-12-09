import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mockup from '@screens/mockup';
import { TabDefaultOptions } from './options';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={TabDefaultOptions}>
      <Tab.Screen name="Home" component={Mockup} />
      <Tab.Screen name="News" component={Mockup} />
      <Tab.Screen
        name="Notification"
        component={Mockup}
        options={{ tabBarBadge: 5 }}
      />
      <Tab.Screen name="Account" component={Mockup} />
    </Tab.Navigator>
  );
};

export default BottomTab;
