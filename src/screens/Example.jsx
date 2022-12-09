import { useReducer } from 'react';
import { StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from '@ui/switch';

const Example = () => {
  const [isActive, toggleIsActive] = useReducer(state => !state, false);

  return (
    <SafeAreaView style={styles.container}>
      <MotiView flex={1} justifyContent="center" alignItems="center">
        <Switch size={40} isActive={isActive} onPress={toggleIsActive} />
      </MotiView>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
