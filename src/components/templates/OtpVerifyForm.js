import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
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
import {otpVerify} from '../../api';
import {AuthContext} from '../../contexts';

export function OtpVerifyForm() {
  const {handleNavigation} = useHistory();
  const {userId} = useContext(AuthContext);
  const theme = useTheme();
  const styles = makeStyles(theme);

  const CELL_COUNT = 4;

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    const response = await otpVerify({
      user_id: userId,
      otp: value,
    });
    if (response.error) {
      setIsError(true);
      setValue('');
    } else {
      handleNavigation(ScreensName.Search);
    }
    setIsLoading(false);
  };

  // if (!userId) {
  //   handleNavigation(ScreensName.Login);
  // }

  return (
    <View style={styles.otpVerifyFormWrapper}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={value => {
          setValue(value);
          setIsError(false);
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              isError && styles.isError,
            ]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={styles.buttonWrapper}>
        <Button
          btnLabel={'Verify'}
          isLoading={isLoading}
          // onPress={() => handleNavigation(ScreensName.Search)}
          onPress={handleVerifyOtp}
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
    isError: {
      borderColor: 'red',
    },
    focusCell: {
      borderColor: 'black',
    },
    buttonWrapper: {
      marginTop: 10,
      marginBottom: 10,
    },
  });
