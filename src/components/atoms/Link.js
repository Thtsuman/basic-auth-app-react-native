import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../assets/theme';
import {useTheme} from 'react-native-paper';

export function Link({
  linkLabel,
  linkLabelColor = 'white',
  onPress,
  preText,
  isLoading = true,
}) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <TouchableOpacity onPress={onPress} style={styles.linkWrapper}>
      {preText && <Text style={styles.preText}>{preText}</Text>}
      <Text style={styles.linkLabelWrapper(linkLabelColor)}>{linkLabel}</Text>
    </TouchableOpacity>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    linkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    linkLabelWrapper: linkLabelColor => ({
      marginHorizontal: 5,
      color: linkLabelColor,
      fontSize: Fonts.size.font12,
      fontWeight: Fonts.weight.bold,
      paddingVertical: 5,
      marginRight: 0,
      paddingHorizontal: 0,
    }),
    preText: {
      color: theme.colors.background,
      fontSize: Fonts.size.font12,
      fontWeight: Fonts.weight.low,
      paddingVertical: 5,
    },
  });
