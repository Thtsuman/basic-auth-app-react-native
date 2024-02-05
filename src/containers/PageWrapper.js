import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {AppBarHeader} from '.';

export function PageWrapper({currentPage, haveBackButton, children}) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppBarHeader haveBackButton={haveBackButton} pageName={currentPage} />
        <View style={styles.viewContainer}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      //   paddingTop: StatusBar.currentHeight,
    },
    viewContainer: {
      paddingHorizontal: 17,
      paddingVertical: 20,
    },
  });
