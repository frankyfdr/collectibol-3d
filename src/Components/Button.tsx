import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonCTA = ({ onPress, title, variant }: { onPress: () => void; title: string; variant?: 'secondary' }) => {
  return (
    <TouchableOpacity style={[styles.button, variant === 'secondary' && styles.buttonSecondary]} onPress={onPress}>
      <Text style={{ color: '#000' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cae5ca',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#e6e5e5',
  },
});
