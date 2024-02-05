import React, {useState} from 'react';
import {View} from 'react-native';
import {Appbar, PaperProvider, useTheme} from 'react-native-paper';
import { useHistory } from '../hooks';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export function AppBarHeader({pageName, haveBackButton}) {
  const theme = useTheme();
  const [visible, setIsVisible] = useState(true);
  const {handleGoBack} = useHistory()

  return (
    <PaperProvider>
      <Appbar.Header>
        {haveBackButton && <Appbar.BackAction onPress={handleGoBack} />}
        <Appbar.Content title={pageName} />
        <Appbar.Action
          iconColor={theme.colors.error}
          icon={'logout'}
          onPress={() => setIsVisible(true)}
        />
        {/* <View>
          <Menu
            visible={visible}
            onDismiss={() => setIsVisible(false)}
            anchor={
              <Appbar.Action
                icon={MORE_ICON}
                onPress={() => setIsVisible(true)}
              />
            }>
            <View
              style={{
                zIndex: 1,

              }}>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </View>
          </Menu>
        </View> */}
      </Appbar.Header>
    </PaperProvider>
  );
}
