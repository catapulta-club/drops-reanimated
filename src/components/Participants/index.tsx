import React from 'react';
import {Button, Text, StyleSheet} from 'react-native';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';

const Participant = ({
  name,
  onRemove,
}: {
  name: string;
  onRemove: () => void;
}) => {
  return (
    <Animated.View
      entering={LightSpeedInLeft}
      exiting={LightSpeedOutRight}
      layout={Layout.springify()}
      style={[styles.participantView]}>
      <Text style={styles.participantName}>{name}</Text>
      <Button title="Remove" color="red" onPress={onRemove} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  participantView: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffbeb',
  },
  participantName: {
    fontSize: 24,
  }
});

export default Participant;
