import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {SegmentedButtons} from 'react-native-paper';
import {SearchTabButtons} from '../../constants';
import {SearchContext} from '../../contexts';

export function SearchTabButton() {
  const {
    searchTabValue,
    methods: {setSearchTab},
  } = useContext(SearchContext);

  return (
    <View>
      <SegmentedButtons
        value={searchTabValue}
        onValueChange={setSearchTab}
        buttons={SearchTabButtons}
      />
    </View>
  );
}
