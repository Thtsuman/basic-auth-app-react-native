import {StyleSheet} from 'react-native';
import React from 'react';
import {PageWrapper} from '../containers';
import {useTheme} from 'react-native-paper';
import {SearchContextProvider} from '../contexts';
import {SearchTabButton, SearchForm} from '../components';

export function Search() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <SearchContextProvider>
      <PageWrapper currentPage="Search">
        <SearchTabButton />
        <SearchForm />
      </PageWrapper>
    </SearchContextProvider>
  );
}

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
