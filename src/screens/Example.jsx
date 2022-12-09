import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingIndicator } from '@ui/indicator';

const Example = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="#010100" style="light" />
      <View style={styles.container}>
        <LoadingIndicator size={100} />
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
    backgroundColor: '#010100',
  },
});
