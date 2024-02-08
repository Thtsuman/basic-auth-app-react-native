import React from 'react';
import {PageWrapper} from '../containers';
import {OrderCard} from '../components';

export function OrderList() {
  return (
    <PageWrapper haveBackButton currentPage={'Order List'}>
      <OrderCard />
      <OrderCard />
    </PageWrapper>
  );
}
