import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Mockup = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" style="dark" />
      <View style={styles.container}>
        <Text style={styles.label}>Mockup Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Mockup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'semibold',
  },
});
