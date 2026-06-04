import { View } from 'react-native';
import Header from './components/Header';
import LogIn from './components/LogIn';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header/>
      <LogIn/>
    </View>
  );
}