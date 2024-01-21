import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from '../containers';
import {Colors, Fonts, Metrics} from '../assets/theme';
import {SignupForm} from '../components';

export function SignUp() {
  return (
    <Background>
      <View style={styles.loginContainer}>
        <View style={styles.heroContainer}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Hi, Create new account</Text>
        </View>
        <SignupForm />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingHorizontal: 20,
    paddingVertical: 50,
    display: 'flex',
    marginTop: 50,
  },
  heading: {
    color: Colors.white,
    fontSize: Fonts.size.font40,
    paddingVertical: 5,
    fontWeight: Fonts.weight.bold,
  },
  subHeading: {
    color: Colors.offWhite,
    fontSize: Fonts.size.font16,
    paddingVertical: 5,
  },
  link: {
    color: Colors.offWhite,
    fontSize: Fonts.size.font12,
    fontWeight: Fonts.weight.bold,
    paddingVertical: 5,
  },
  heroContainer: {
    marginTop: 70,
    paddingBottom: 20,
  },
});
