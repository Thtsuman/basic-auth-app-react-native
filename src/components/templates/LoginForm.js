import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../assets/theme';
import {Button, Field, Link} from '..';
import {ScreensName} from '../../screens';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {useHistory} from '../../hooks';

export const LoginForm = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();

  return (
    <>
      <View style={styles.formContainer}>
        <Field label="Phone Number" />
        <Field
          label="Password"
          type="password"
          secureTextEntry
          placeholder="Password"
        />
        {/* <View style={styles.forgetPasswordSection}>
          <Link
            onPress={() => alert('Forgot password')}
            linkLabel="Forget password?"
            linkLabelColor={theme.colors.offBlack}
          />
        </View> */}
        <Button
          btnLabel={'Login'}
          onPress={() => handleNavigation(ScreensName.OtpVerification)}
        />
      </View>
      <View style={styles.formFooter}>
        <Link
          onPress={() => handleNavigation(ScreensName.Home)}
          linkLabel="Home"
          linkLabelColor={theme.colors.background}
        />
      </View>
    </>
  );
};

const makeStyles = theme =>
  StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.background,
      padding: 20,
      borderRadius: 10,
    },
    forgetPasswordSection: {
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    formFooter: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingRight: 10,
      paddingTop: 10,
    },
    linkText: {
      color: theme.colors.background,
      fontSize: Fonts.size.font12,
      fontWeight: Fonts.weight.low,
      paddingVertical: 5,
    },
  });
