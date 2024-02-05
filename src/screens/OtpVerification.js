import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Background} from '../containers';
import {Fonts, Metrics} from '../assets/theme';
import {Link, OtpVerifyForm} from '../components';
import {useTheme} from 'react-native-paper';
import {ScreensName} from '.';
import {useHistory} from '../hooks';

export function OtpVerification() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();

  const showAlert = () => {
    Alert.alert('', 'OTP Send');
  };

  return (
    <Background>
      <View style={styles.loginContainer}>
        <View style={styles.heroContainer}>
          <Text style={styles.heading}>Verification</Text>
          <Text style={styles.subHeading}>
            Please enter the One Time Password we send to your phone number.
          </Text>
        </View>
        <OtpVerifyForm />
        <View style={styles.formFooter}>
          <Link
            onPress={showAlert}
            linkLabel="Resend OTP"
            linkLabelColor={theme.colors.background}
          />
          <Link
            onPress={() => handleNavigation(ScreensName.Login)}
            linkLabel="Change phone number?"
            linkLabelColor={theme.colors.background}
          />
        </View>
      </View>
    </Background>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    loginContainer: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      paddingHorizontal: 20,
      paddingVertical: 50,
      display: 'flex',
      marginTop: 50,
    },
    heading: {
      color: theme.colors.white,
      fontSize: Fonts.size.font40,
      paddingVertical: 5,
      fontWeight: Fonts.weight.bold,
    },
    subHeading: {
      color: theme.colors.surfaceVariant,
      fontSize: Fonts.size.font16,
      paddingVertical: 5,
    },
    link: {
      fontSize: Fonts.size.font12,
      fontWeight: Fonts.weight.bold,
      paddingVertical: 5,
    },
    heroContainer: {
      marginTop: 70,
      paddingBottom: 20,
    },
    formFooter: {
      alignItems: 'flex-end',
      paddingRight: 10,
      paddingTop: 10,
    },
  });
