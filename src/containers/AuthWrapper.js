import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {images} from '../assets';
import {Background} from '../containers';
import {Fonts, Metrics} from '../assets/theme';
import {useTheme} from 'react-native-paper';

export const AuthWrapper = ({title, subTitle, children}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <Background>
      <View style={styles.loginContainer}>
        <View style={styles.heroContainer}>
          <View style={styles.logoWrapper}>
            <Image style={{width: 100, height: 100}} source={images.logo} />
          </View>
          <Text style={styles.heading}>{title}</Text>
          {subTitle && <Text style={styles.subHeading}>{subTitle}</Text>}
        </View>
        {children}
      </View>
    </Background>
  );
};

const makeStyles = theme =>
  StyleSheet.create({
    loginContainer: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      paddingHorizontal: 20,
      paddingVertical: 50,
      display: 'flex',
      marginTop: 30,
    },
    heroContainer: {
      marginTop: 30,
      paddingBottom: 20,
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    heading: {
      color: theme.colors.black,
      fontSize: Fonts.size.font30,
      paddingVertical: 5,
      fontWeight: Fonts.weight.bold,
    },
    subHeading: {
      color: theme.colors.offBlack,
      fontSize: Fonts.size.font16,
      paddingVertical: 5,
    },
  });
