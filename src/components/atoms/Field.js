import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../assets/theme';

export function Field(props) {
  return (
    <TextInput
      {...props}
      style={styles.textInputContainer}
      placeholderTextColor={Colors.offBlack}>
    </TextInput>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    color: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
  },
});
