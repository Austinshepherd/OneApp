import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   FlatList } from 'react-native';

import NoteItem from './components/NoteItem';
import NoteInput from './components/NoteInput';


export default function App() {

  const [newNote, setNewNote] = useState([]);

  const addNoteHandler = enteredText => {
    setNewNote(currentNotes => [
      ...currentNotes,
     { id: Math.random().toString(), value: enteredText }
    ]);
  };

  return (
    <View style={styles.screen}>
      <NoteInput onAddNote={addNoteHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={newNote}
      renderItem={NoteData => <NoteItem title={NoteData.item.value} />} 
      />
    </View>
  );
}


  const styles = StyleSheet.create({
     screen: {
       padding: 50,
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