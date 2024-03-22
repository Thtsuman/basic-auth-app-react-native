import DeviceInfo from 'react-native-device-info';
import {base_url} from './constants';

export const loginUser = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/main_login/`, {
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
    data: content.Payload[0],
  };
};

export const otpVerify = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/verify_otp/`, {
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
    data: content.Payload[0],
  };
};

export const resendOtp = async formState => {
  const deviceId = DeviceInfo.getSystemName();

  const rawResponse = await fetch(`${base_url}/api/resend_otp/`, {
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
    success: true,
  };
};
