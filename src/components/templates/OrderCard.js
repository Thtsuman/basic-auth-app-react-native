import {View} from 'react-native';
import React from 'react';
import {Card, Divider, Text} from 'react-native-paper';
import {Button} from '..';
import {useHistory} from '../../hooks';
import {ScreensName} from '../../screens';

export function OrderCard({order}) {
  const {handleNavigation} = useHistory();
  return (
    <Card style={{marginTop: 10}}>
      <Card.Title titleVariant="headlineSmall" title={order?.t_orno} />
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text variant="titleSmall">Line Number</Text>
          <Text variant="bodyMedium">{order?.t_pono}</Text>
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
          <Text variant="bodyMedium">{order?.t_sqnb}</Text>
        </View>
        <Divider />
        <View
          style={{
            marginTop: 10,
          }}>
          <Text style={{paddingBottom: 6}} variant="titleSmall">Description</Text>
          <Text variant="bodyMedium">{order?.t_idsca}</Text>
        </View>
        <Divider />
        <Button
          onPress={() => handleNavigation(ScreensName.OrderDetails)}
          btnLabel="Expand"
        />
      </Card.Content>
    </Card>
  );
}
