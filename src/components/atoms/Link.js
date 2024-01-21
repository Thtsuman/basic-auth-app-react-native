import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../assets/theme';

export function Link({linkLabel, linkLabelColor, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.linkWrapper}>
      <Text style={styles.linkLabelWrapper(linkLabelColor)}>{linkLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkWrapper: {},
  linkLabelWrapper: linkLabelColor => ({
    color: linkLabelColor,
    fontSize: Fonts.size.font12,
    fontWeight: Fonts.weight.bold,
    paddingVertical: 5,
  }),
});
