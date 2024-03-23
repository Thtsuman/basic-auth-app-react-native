import React, {useContext} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {AppContext} from '../../contexts';

export function Alert() {
  const {
    alert,
    methods: {hideAlert},
  } = useContext(AppContext);

  return (
    <Portal>
      <Dialog visible={alert.isVisible} onDismiss={hideAlert}>
        {alert.title && <Dialog.Title>{alert.title}</Dialog.Title>}
        {alert.message && (
          <Dialog.Content>
            <Text variant="bodyMedium">{alert.message}</Text>
          </Dialog.Content>
        )}
        <Dialog.Actions>
          <Button onPress={hideAlert}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
