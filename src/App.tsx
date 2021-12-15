import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Participant from './components/Participants';

interface EventParticipant {
  name: string;
  id: string;
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [participantList, setParticipantList] = useState<EventParticipant[]>(
    [],
  );

  const addParticipant = () => {
    setParticipantList(
      [
        {
          name: inputValue,
          id: Date.now().toString(),
        },
      ].concat(participantList),
    );
  };

  const removeParticipant = (id: string) => {
    setParticipantList(
      participantList.filter(participant => participant.id !== id),
    );
  };

  return (
    <SafeAreaView>
      <View style={[styles.listView]}>
        <ScrollView style={[{width: '100%'}]}>
          {participantList.map(participant => (
            <Participant
              key={participant.id}
              name={participant.name}
              onRemove={() => removeParticipant(participant.id)}
            />
          ))}
        </ScrollView>

        <View style={[styles.bottomRow]}>
          <View style={[styles.textInput]}>
            <Text>Add participant: </Text>
            <TextInput
              placeholder="Name"
              value={inputValue}
              onChangeText={setInputValue}
            />
          </View>

          <Button
            title="Add"
            disabled={inputValue === ''}
            onPress={addParticipant}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 30,
  },
  bottomRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
