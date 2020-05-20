import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';


const NoteInput = props => {

    const [inputNote, setInputNote] = useState('');
    
    const NoteInputHandler = enteredText => {
        setInputNote(enteredText);
      };

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="new note"
        style={styles.inputBar}
        onChangeText={NoteInputHandler}
        value={inputNote}
        />
        <Button title="ADD" onPress={props.onAddNote.bind(this, inputNote)} />
        </View>
    );
};

const styles = StyleSheet.create({

   inputContainer: {
     flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
   },
   inputBar: {
     borderColor: 'grey',
     borderWidth: 1,
     borderRadius: 2,
     padding: 10,
     width: '80%'
   }
 });

export default NoteInput;