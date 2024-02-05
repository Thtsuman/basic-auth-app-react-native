import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as ButtonComp, useTheme} from 'react-native-paper';

export function Button({btnLabel, theme = 'primary', onPress}) {
  const rnTheme = useTheme();
  const styles = makeStyles(rnTheme);
  return (
    <ButtonComp
      onPress={onPress}
      style={[
        styles.buttonWrapper,
        theme === 'primary' && styles.primaryButton,
        theme === 'secondary' && styles.secondaryButton,
      ]}
      mode="contained">
      {btnLabel}
    </ButtonComp>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    buttonWrapper: {
      marginVertical: 10,
      borderRadius: 10,
    },
    primaryButton: {
      backgroundColor: theme.colors.customPrimary,
      textColor: theme.colors.onCustomPrimary,
    },
    secondaryButton: {
      backgroundColor: theme.colors.customSecondary,
      textColor: theme.colors.onCustomSecondary,
    },
  });
