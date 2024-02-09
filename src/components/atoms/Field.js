import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, useTheme} from 'react-native-paper';

export function Field({label, placeholder, handleChange, id, isError, ...restProps}) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  // const [text, setText] = useState('');
  return (
    <TextInput
      id={id}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      onChangeText={text => handleChange({key: id, value: text})}
      style={styles.textInputContainer}
      error={isError}
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
