import React, {useContext, useRef, useState} from 'react';
import {PageWrapper} from '../containers';
import {OrderCard} from '../components';
import {AppContext} from '../contexts';
import {DataTable} from 'react-native-paper';

const numberOfItemsPerPage = 5;

export function OrderList() {
  const {orders} = useContext(AppContext);

  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const [page, setPage] = useState(0);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, orders.list.length);

  if (orders.list.length < 1) {
    return null;
  }

  return (
    <PageWrapper
      scrollRef={scrollRef}
      haveBackButton
      currentPage={'Order List'}>
      {orders.list?.slice(from, to).map(order => (
        <OrderCard order={order} key={order?.t_unid} />
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(orders.list.length / numberOfItemsPerPage)}
        onPageChange={page => {
          onPressTouch();
          setPage(page);
        }}
        label={`${from + 1}-${to} of ${orders.list.length}`}
        showFastPaginationControls
        numberOfItemsPerPage={numberOfItemsPerPage}
      />
    </PageWrapper>
  );
}
