import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [inputNote, setInputNote] = useState('');
  const [newNote, setNewNote] = useState([]);

  const NoteInputHandler = (enteredText) => {
    setInputNote(enteredText);
  };

  const addNoteHandler = () => {
    setNewNote(currentNotes => [...currentNotes, inputNote]);
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
        {newNote.map((Note) =>  <View key={Note} style={styles.OutputNote}><Text>{Note}</Text></View>)}
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
      borderRadius: 2,
      padding: 10,
      width: '80%'
    },
    OutputNote: {
      padding: 20,
      backgroundColor: 'grey',
      marginVertical: 10,
      borderColor: 'black',
      borderWidth: 1
    }
  
  });