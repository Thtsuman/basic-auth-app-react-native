import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Button} from '..';
import {useHistory} from '../../hooks';
import {ScreensName} from '../../screens';
import {useTheme} from 'react-native-paper';

export function OtpVerifyForm() {
  const {handleNavigation} = useHistory();
  const theme = useTheme();
  const styles = makeStyles(theme);

  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.otpVerifyFormWrapper}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={styles.buttonWrapper}>
        <Button
          btnLabel={'Verify'}
          onPress={() => handleNavigation(ScreensName.OtpVerification)}
        />
      </View>
    </View>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    otpVerifyFormWrapper: {
      backgroundColor: 'white',
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      // lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: 'black',
      textAlign: 'center',
      color: 'black',
    },
    focusCell: {
      borderColor: 'black',
    },
    buttonWrapper: {
      marginTop: 10,
      marginBottom: 10,
    },
  });
