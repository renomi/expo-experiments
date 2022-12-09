import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from '@navigation/stack-screen';
import { navigationRef } from '@navigation/navigationRef';

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
