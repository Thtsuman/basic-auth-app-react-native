import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Searchbar, useTheme} from 'react-native-paper';
import {Button} from '..';
import {useHistory} from '../../hooks';
import {ScreensName} from '../../screens';

export function SearchForm() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View>
      <View style={styles.searchbarFieldWrapper}>
        <Searchbar
          mode="bar"
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <Button
        btnLabel={'Search'}
        theme="secondary"
        onPress={() => handleNavigation(ScreensName.OrderList)}
      />
    </View>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    searchbarFieldWrapper: {
      marginVertical: 20,
    },
  });
