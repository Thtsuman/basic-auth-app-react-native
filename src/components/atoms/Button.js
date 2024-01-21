import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../assets/theme';

export function Button({bgColor, btnLabel, btnLabelColor, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper(bgColor)}>
      <Text style={styles.btnLabelWrapper(btnLabelColor)}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: bgColor => ({
    backgroundColor: bgColor,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  }),
  btnLabelWrapper: btnLabelColor => ({
    color: btnLabelColor,
    fontSize: Fonts.size.font16,
    fontWeight: Fonts.weight.bold,
  }),
});
