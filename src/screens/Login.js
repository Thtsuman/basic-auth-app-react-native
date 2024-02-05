import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from '../containers';
import {Fonts, Metrics} from '../assets/theme';
import {LoginForm} from '../components';
import {useTheme} from 'react-native-paper';

export function Login() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <Background>
      <View style={styles.loginContainer}>
        <View style={styles.heroContainer}>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subHeading}>
            Welcome Back, Login with your phone number
          </Text>
        </View>
        <LoginForm />
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
  });
