import React from 'react';
import {PageWrapper} from '../containers';
import {OrderDetailsTable} from '../components';

export function OrderDetails() {
  return (
    <PageWrapper haveBackButton currentPage={'Order: DDNA04198'}>
      <OrderDetailsTable />
    </PageWrapper>
  );
}
