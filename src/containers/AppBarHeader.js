import React, {useContext} from 'react';
import {Appbar, PaperProvider, useTheme} from 'react-native-paper';
import {useHistory} from '../hooks';
import {ScreensName} from '../screens';
import {AppContext, AuthContext, SearchContext} from '../contexts';

export function AppBarHeader({pageName, haveBackButton}) {
  const theme = useTheme();
  const {handleGoBack} = useHistory();
  const {handleNavigation} = useHistory();
  const {
    methods: {handleLogoutUser},
  } = useContext(AuthContext);
  const {
    methods: {resetAppContextState},
  } = useContext(AppContext);
  const {
    methods: {resetSearchContextState},
  } = useContext(SearchContext);

  const handleUserLogout = async () => {
    resetSearchContextState();
    resetAppContextState();
    handleLogoutUser();
    handleNavigation(ScreensName.Login);
  };

  return (
    <PaperProvider>
      <Appbar.Header>
        {haveBackButton && <Appbar.BackAction onPress={handleGoBack} />}
        <Appbar.Content title={pageName} />
        <Appbar.Action
          iconColor={theme.colors.error}
          icon={'logout'}
          onPress={handleUserLogout}
        />
      </Appbar.Header>
    </PaperProvider>
  );
}
