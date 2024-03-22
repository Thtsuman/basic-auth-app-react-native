import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {AuthWrapper, Background} from '../containers';
import {Fonts, Metrics} from '../assets/theme';
import {Link, OtpVerifyForm} from '../components';
import {useTheme} from 'react-native-paper';
import {ScreensName} from '.';
import {useHistory} from '../hooks';
import {resendOtp} from '../api';
import {AuthContext} from '../contexts';

export function OtpVerification() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();
  const {userId, userMobileNo} = useContext(AuthContext);

  const showAlert = msg => {
    Alert.alert('', msg);
  };

  const handleResendOtp = async () => {
    const response = await resendOtp({
      user_id: userId,
      user_mobile: userMobileNo,
    });
    if (response.error) {
      showAlert('Something went wrong');
    } else {
      showAlert('OTP Send');
    }
  };

  return (
    <AuthWrapper
      subTitle={
        'Please enter the One Time Password we send to your phone number.'
      }
      title={'Verification'}>
      <OtpVerifyForm />
      <View style={styles.formFooter}>
        <Link
          onPress={handleResendOtp}
          linkLabel="Resend OTP"
          linkLabelColor={theme.colors.black}
        />
        <Link
          onPress={() => handleNavigation(ScreensName.Login)}
          linkLabel="Change User ID?"
          linkLabelColor={theme.colors.black}
        />
      </View>
    </AuthWrapper>
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
