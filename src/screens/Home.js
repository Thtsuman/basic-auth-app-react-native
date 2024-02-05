import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from '../containers';
import {Fonts, Metrics} from '../assets/theme';
import {Button} from '../components';
import {ScreensName} from '.';
import {useTheme} from 'react-native-paper';
import {useHistory} from '../hooks';

export function HomeScreen() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();

  return (
    <Background>
      <View style={styles.homeContainer}>
        <View style={styles.heroContainer}>
          <Text style={styles.heading}>Hello 👋</Text>
          <Text style={styles.subHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s!!
          </Text>
        </View>
        <View>
          <Button
            theme="primary"
            btnLabel={'Login'}
            onPress={() => handleNavigation(ScreensName.Login)}
          />
        </View>
      </View>
    </Background>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    homeContainer: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      paddingHorizontal: 20,
      paddingVertical: 50,
      display: 'flex',
      justifyContent: 'space-between',
    },
    heading: {
      color: theme.colors.white,
      fontSize: Fonts.size.font40,
      fontWeight: Fonts.weight.bold,
      paddingVertical: 10,
    },
    subHeading: {
      color: theme.colors.surfaceVariant,
      fontSize: Fonts.size.font16,
      paddingVertical: 10,
    },
    heroContainer: {
      marginTop: 70,
    },
  });
