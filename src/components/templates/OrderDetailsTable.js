import React from 'react';
import {Card, DataTable, Text} from 'react-native-paper';
import moment from 'moment';

export function OrderDetailsTable({data}) {
  const checkForDate = date => {
    if (date !== 'NA') {
      return moment(date).format('YYYY-MM-DD');
    } else return <Text>NA</Text>;
  };
  return (
    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Target Date</DataTable.Title>
          <DataTable.Title>Order Status</DataTable.Title>
          <DataTable.Title numeric>Actual Date</DataTable.Title>
        </DataTable.Header>

        {data?.map((item, key) => (
          <DataTable.Row style={{height: 'auto'}} key={key}>
            <DataTable.Cell>
              <Text variant="bodySmall">{checkForDate(item?.target_date)}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text variant="bodySmall" numberOfLines={2}>
                {item.t_mdsca}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text variant="bodySmall">{checkForDate(item?.actual_date)}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
