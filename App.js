import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputNote, setInputNote] = useState('');

  const NoteInputHandler = (enteredText) => {
    setInputNote(enteredText);
  };

  const addNoteHandler = () => {
    console.log(inputNote);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="new note"style={styles.inputBar}
         onChangeText={NoteInputHandler}
         value={inputNote}/>
        <Button title="ADD" onPress={addNoteHandler} />
      </View>
      <View>
      </View>
    </View>
  );
}


  const styles = StyleSheet.create({
     screen: {
       padding: 50
     },

    inputContainer: {
      flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputBar: {
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      width: '80%'
    }
  
  });