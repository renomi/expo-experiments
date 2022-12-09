import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenDefaultOptions } from './options';

import Example from '@screens/Example';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenDefaultOptions}>
      <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
  );
};
