import 'react-native-gesture-handler';
import { enableFreeze } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from '@navigation/StackScreen';
import { navigationRef } from '@navigation/navigationRef';

enableFreeze(true);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <StackScreen />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
