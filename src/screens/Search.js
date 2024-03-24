import React from 'react';
import {PageWrapper} from '../containers';
import {SearchContextProvider} from '../contexts';
import {SearchTabButton, SearchForm} from '../components';

export function Search() {
  return (
    <SearchContextProvider>
      <PageWrapper currentPage="Search">
        <SearchTabButton />
        <SearchForm />
      </PageWrapper>
    </SearchContextProvider>
  );
}
