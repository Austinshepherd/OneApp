import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = props => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)} >
        <View style={styles.OutputNote}>
       <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
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