import { StyleSheet, View, StatusBar, Button } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.board}>
      < Board />
      </View>
      <Button title='reset' style={styles.button}></Button>
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
    width: '90%',
    aspectRatio: 0.6,
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {

  }
});
