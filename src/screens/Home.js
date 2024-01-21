import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from '../containers';
import {Colors, Fonts, Metrics} from '../assets/theme';
import {Button} from '../components';
import {ScreensName} from '.';

export function HomeScreen(props) {
  const {navigation} = props;

  const handleNavigation = page => {
    navigation.navigate(page);
  };

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
            bgColor={Colors.primary}
            btnLabel={'Login'}
            btnLabelColor={Colors.white}
            onPress={() => handleNavigation(ScreensName.Login)}
          />
          <Button
            bgColor={Colors.white}
            btnLabel={'Sign Up'}
            btnLabelColor={Colors.secondary}
            onPress={() => handleNavigation(ScreensName.SignUp)}
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingHorizontal: 20,
    paddingVertical: 50,
    display: 'flex',
    justifyContent: 'space-between',
  },
  heading: {
    color: Colors.white,
    fontSize: Fonts.size.font40,
    fontWeight: Fonts.weight.bold,
    paddingVertical: 10,
  },
  subHeading: {
    color: Colors.offWhite,
    fontSize: Fonts.size.font16,
    paddingVertical: 10,
  },
  heroContainer: {
    marginTop: 70,
  },
});
