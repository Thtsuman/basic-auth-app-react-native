import DeviceInfo from 'react-native-device-info';
import {ORDER_NOT_FOUND_MSG, base_url} from './constants';

export const searchByOrderNo = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/search_by_orderno/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...formState, device_id: deviceId}),
  });

  const content = await rawResponse.json();
  if (content.Error) {
    return {
      error: true,
      message: content.Message,
    };
  } else if (content.Payload?.length < 1) {
    return {
      error: true,
      message: ORDER_NOT_FOUND_MSG,
    };
  }
  return {
    error: false,
    data: content.Payload,
  };
};

export const searchByOrderName = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/search_by_name/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...formState, device_id: deviceId}),
  });
  const content = await rawResponse.json();
  if (content.Error) {
    return {
      error: true,
      message: content.Message,
    };
  } else if (content.Payload?.length < 1) {
    return {
      error: true,
      message: ORDER_NOT_FOUND_MSG,
    };
  }
  return {
    error: false,
    data: content.Payload,
  };
};

export const findFinalListingById = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/final_listing/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...formState, device_id: deviceId}),
  });

  const content = await rawResponse.json();

  if (content.Error) {
    return {
      error: true,
      message: content.Message,
    };
  }
  return {
    error: false,
    data: content.Payload,
  };
};
