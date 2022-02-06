import { StyleSheet, View, StatusBar } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.board}>
      < Board />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'rgb(54, 54, 54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: 300,
    height: 600,
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
