import React from 'react';
import {Card, DataTable, Text} from 'react-native-paper';
import moment from 'moment';

export function OrderDetailsTable() {
  const [items] = React.useState([
    {
      key: 1,
      orderStatus: 'Customer Order',
      actualDate: 356,
      targetDate: 16,
    },
    {
      key: 2,
      orderStatus: 'Sales Order',
      actualDate: 262,
      targetDate: 16,
    },
    {
      key: 3,
      orderStatus: 'Technical and Comm. Clearance',
      actualDate: 159,
      targetDate: 6,
    },
    {
      key: 4,
      orderStatus: 'Submittal',
      actualDate: 305,
      targetDate: 3.7,
    },
    {
      key: 5,
      orderStatus: 'Final Approve',
      actualDate: 305,
      targetDate: 3.7,
    },
    {
      key: 6,
      orderStatus: 'Release',
      actualDate: 305,
      targetDate: 3.7,
    },
    {
      key: 7,
      orderStatus: 'Purchase Requisition',
      actualDate: 305,
      targetDate: 3.7,
    },
    {
      key: 8,
      orderStatus: 'Purchase Order',
      actualDate: 305,
      targetDate: 3.7,
    },
    {
      key: 9,
      orderStatus: 'MFG Drawing',
      actualDate: 305,
      targetDate: 3.7,
    },
  ]);

  return (
    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Target Date</DataTable.Title>
          <DataTable.Title>Order Status</DataTable.Title>
          <DataTable.Title numeric>Actual Date</DataTable.Title>
        </DataTable.Header>

        {items.map(item => (
          <DataTable.Row style={{height: 'auto'}} key={item.key}>
            <DataTable.Cell>
              {/* {item.targetDate} */}
              <Text variant="bodySmall">
                {moment('20111031').format('YYYY-MM-DD')}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text variant="bodySmall" numberOfLines={2}>
                {item.orderStatus}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text variant="bodySmall">
                {moment('20111031').format('YYYY-MM-DD')}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
