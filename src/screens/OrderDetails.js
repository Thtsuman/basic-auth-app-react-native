import React, {useContext, useEffect, useState} from 'react';
import {PageWrapper} from '../containers';
import {OrderDetailsTable} from '../components';
import {useHistory} from '../hooks';
import {ScreensName} from '.';
import {findFinalListingById} from '../api';
import {AuthContext} from '../contexts';
import {ActivityIndicator} from 'react-native-paper';

export function OrderDetails() {
  const {getCurrentRouteState} = useHistory();
  const {orderDetails} = getCurrentRouteState({
    currentRoute: ScreensName.OrderDetails,
  });
  const {userId} = useContext(AuthContext);

  const [currentOrderList, setCurrentOrderList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFinalListingOfOrder = async () => {
    setIsLoading(true);
    const response = await findFinalListingById({
      user_id: userId,
      order_id: orderDetails?.t_unid,
    });

    if (response.error) {
      showAlert({
        message: response.message || 'Something went wrong',
      });
    } else {
      setCurrentOrderList(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFinalListingOfOrder();
  }, []);

  if (!orderDetails) return null;

  return (
    <PageWrapper haveBackButton currentPage={`Order: ${orderDetails?.t_orno}`}>
      {isLoading ? (
        <ActivityIndicator
          style={{
            marginVertical: 20,
          }}
          size={'small'}
          animating={true}
        />
      ) : (
        <OrderDetailsTable data={currentOrderList} />
      )}
    </PageWrapper>
  );
}
