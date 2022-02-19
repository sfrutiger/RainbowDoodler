import { StyleSheet, View, StatusBar, Pressable, Text} from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import Board from './components/Board';

//android ad id: ca-app-pub-8905729476642330/2863591622
//test ad id: ca-app-pub-3940256099942544/6300978111

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.board}>
      < Board />
      </View>
      <Pressable title='reset' style={styles.button}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-8905729476642330/2863591622"
          servePersonalizedAds="false" />
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
    margin: 10,
    width: 100,
    height: 40,
    borderRadius: 3,
    backgroundColor: 'rgb(128, 128, 128)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'black',
  }
});
