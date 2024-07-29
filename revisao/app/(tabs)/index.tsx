import { View, StyleSheet, } from 'react-native';

import Pegar from './info'
import Olimpiada1 from './olimpiada1'
import Olimpiada2 from './olimpiada2'

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <Olimpiada1 pais="Brasil" ouro="0" prata="1" bronze="2" total="A equipe tem 3 medalhas no total" />
    <Olimpiada2 pais="Coreia do Sul" ouro="5" prata="3" bronze="1" total="A equipe tem 9 medalhas no total" />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
