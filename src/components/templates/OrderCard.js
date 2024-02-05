import {View} from 'react-native';
import React from 'react';
import {Card, Divider, Text} from 'react-native-paper';
import {Button} from '..';

export function OrderCard() {
  return (
    <Card style={{marginTop: 10}}>
      <Card.Title titleVariant="headlineSmall" title="DDNA04198" />
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text variant="titleSmall">Line Number</Text>
          <Text variant="bodyMedium">10</Text>
        </View>
        <Divider />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text variant="titleSmall">Sequence Number</Text>
          <Text variant="bodyMedium">0</Text>
        </View>
        <Divider />
        <View
          style={{
            marginTop: 10,
          }}>
          <Text variant="titleSmall">Description</Text>
          <Text variant="bodyMedium">
            Irure elit velit ipsum sunt voluptate aliquip esse dolore sit.
          </Text>
        </View>
        <Divider />
        <Button btnLabel="Expand" />
      </Card.Content>
    </Card>
  );
}
