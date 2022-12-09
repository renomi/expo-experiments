import { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonToggle } from '@ui/button';

const Example = () => {
  const [visible, toggle] = useReducer(s => !s, true);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" style="dark" />
      <View style={styles.container}>
        <ButtonToggle
          onPress={toggle}
          isActive={visible}
          size={50}
          icon={{
            outline: 'heart-outline',
            fill: 'heart',
          }}
          color={{ outline: 'black', fill: 'red' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
