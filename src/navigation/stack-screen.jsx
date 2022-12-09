import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenDefaultOptions } from './options';
import BottomTab from './bottom-tab';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenDefaultOptions}>
      <Stack.Screen name="Main" component={BottomTab} />
    </Stack.Navigator>
  );
};
