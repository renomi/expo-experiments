import { TabButton } from '@ui/button/tab-button';
import { Ionicons } from '@expo/vector-icons';

export const screenDefaultOptions = {
  headerShown: false,
};

export const TabDefaultOptions = ({ route }) => ({
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#010100',
  tabBarButton: props => <TabButton {...props} />,
  tabBarIcon: ({ color, size, focused }) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'News') {
      iconName = focused ? 'newspaper' : 'newspaper-outline';
    } else if (route.name === 'Notification') {
      iconName = focused ? 'notifications' : 'notifications-outline';
    } else if (route.name === 'Account') {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
