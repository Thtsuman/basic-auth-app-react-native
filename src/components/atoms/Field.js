import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, useTheme} from 'react-native-paper';

export function Field({label, placeholder, ...restProps}) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [text, setText] = useState('');
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={text}
      onChangeText={text => setText(text)}
      style={styles.textInputContainer}
      {...restProps}
    />
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    textInputContainer: {
      borderRadius: 10,
      marginVertical: 5,
      borderColor: theme.colors.customPrimary,
    },
  });
