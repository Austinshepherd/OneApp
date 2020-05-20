import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const NoteItem = props => {
    return (
      <View style={styles.OutputNote}>
      <Text>{props.title}</Text>
      </View>
    );

};

const styles = StyleSheet.create({

    OutputNote: {
        padding: 20,
        backgroundColor: 'grey',
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1
      }
   }
);

export default NoteItem;