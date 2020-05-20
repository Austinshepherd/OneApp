import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

export default function App() {
  const [inputNote, setInputNote] = useState('');
  const [newNote, setNewNote] = useState([]);

  const NoteInputHandler = (enteredText) => {
    setInputNote(enteredText);
  };

  const addNoteHandler = () => {
    setNewNote(currentNotes => [
      ...currentNotes,
     { id: Math.random().toString(), value: inputNote }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="new note"style={styles.inputBar}
         onChangeText={NoteInputHandler}
         value={inputNote}/>
        <Button title="ADD" onPress={addNoteHandler} />
      </View>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={newNote} renderItem={noteData => (
      <View style={styles.OutputNote}>
      <Text>{noteData.item.value}</Text>
      </View>
        )} 
      
      />
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