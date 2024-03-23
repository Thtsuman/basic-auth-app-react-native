import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Searchbar, useTheme} from 'react-native-paper';
import {Button} from '..';
import {useHistory} from '../../hooks';
import {ScreensName} from '../../screens';
import {searchByOrderName, searchByOrderNo} from '../../api';
import {AppContext, AuthContext, SearchContext} from '../../contexts';
import {ORDER_NOT_FOUND_MSG} from '../../api';
import {SearchButtonValue} from '../../constants';
import {useFocusEffect} from '@react-navigation/native';

export function SearchForm() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();
  const {userId} = useContext(AuthContext);
  const {
    searchTabValue,
    methods: {resetSearchContextState},
  } = useContext(SearchContext);
  const {
    methods: {showAlert, setOrderList},
  } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      return () => resetSearchContextState();
    }, []),
  );

  useEffect(() => {
    setSearchQuery('');
  }, [searchTabValue]);

  const callSearchOrderByNo = async () => {
    const response = await searchByOrderNo({
      user_id: userId,
      order_no: searchQuery,
    });

    return response;
  };

  const callSearchOrderByName = async () => {
    const response = await searchByOrderName({
      user_id: userId,
      name: searchQuery,
    });

    return response;
  };

  const handleSearch = async () => {
    setIsLoading(true);
    let responseFromApi;
    if (searchTabValue === SearchButtonValue.orderNo) {
      responseFromApi = await callSearchOrderByNo();
    } else if (searchTabValue === SearchButtonValue.customer) {
      responseFromApi = await callSearchOrderByName();
    }

    if (responseFromApi.error) {
      if (responseFromApi.message === ORDER_NOT_FOUND_MSG) {
        showAlert({
          message: ORDER_NOT_FOUND_MSG,
        });
      }
      setIsError(true);
    } else {
      setOrderList(responseFromApi.data);
      handleNavigation(ScreensName.OrderList);
    }
    setIsLoading(false);
  };

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
        isMuted={!searchQuery.length}
        btnLabel={'Search'}
        theme="secondary"
        isLoading={isLoading}
        onPress={handleSearch}
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
