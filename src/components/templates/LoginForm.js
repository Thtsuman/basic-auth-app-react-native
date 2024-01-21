import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../assets/theme';
import {Button, Field, Link} from '..';
import {ScreensName} from '../../screens';
import {useNavigation} from '@react-navigation/native';

export const LoginForm = () => {
  const navigation = useNavigation();

  const handleNavigation = page => {
    navigation.navigate(page);
  };
  return (
    <>
      <View style={styles.formContainer}>
        <Field keyboardType="email-address" placeholder="Email" />
        <Field secureTextEntry placeholder="Password" />
        <View style={styles.forgetPasswordSection}>
          <Link
            onPress={() => alert('Forgot password')}
            linkLabel="Forget password?"
            linkLabelColor={Colors.white}
          />
        </View>
        <Button
          bgColor={Colors.primary}
          btnLabel={'Login'}
          btnLabelColor={Colors.white}
          onPress={() => alert('Logged in')}
        />
      </View>
      <View style={styles.formFooter}>
        <Text style={styles.linkText}>Don't have an account? </Text>
        <Link
          onPress={() => handleNavigation(ScreensName.SignUp)}
          linkLabel="Sign Up"
          linkLabelColor={Colors.secondary}
        />
      </View>
      <View style={styles.formFooter}>
        <Link
          onPress={() => handleNavigation(ScreensName.Home)}
          linkLabel="Home"
          linkLabelColor={Colors.offWhite}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff30',
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
    color: Colors.white,
    fontSize: Fonts.size.font12,
    fontWeight: Fonts.weight.low,
    paddingVertical: 5,
  },
});
