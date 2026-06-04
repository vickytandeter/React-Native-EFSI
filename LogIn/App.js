import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LogIn from './components/LogIn';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.telefono}>
        <Header />
        <LogIn />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
  },

  telefono: {
    width: '100%',
    maxWidth: 400,
    flex: 1,
    backgroundColor: '#ffffff',
  },
});