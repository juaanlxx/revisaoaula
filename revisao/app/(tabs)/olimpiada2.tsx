import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Olimpiada2 = ({ pais, ouro, prata, bronze, total }) => {

  
    return (
      <div>
        <h2>{pais}</h2>
        <p>Medalhas de Ouro: {ouro}</p>
        <p>Medalhas de Prata: {prata}</p>
        <p>Medalhas de Bronze: {bronze}</p>
        <p>Total de Medalhas: {total}</p>
      </div>
    );
  };

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        color: '#000',
    }
})

export default Olimpiada2