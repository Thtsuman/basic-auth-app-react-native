import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const rnpTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    customPrimary: '#2E6B98',
    lightCustomPrimary: '#2CA8BA',
    customSecondary: '#321C6E',
    lightCustomSecondary: '#30347B',
    light: '#ffdab9',
    white: '#ffffff',
    offWhite: '#ffffffaa',
    black: '#000000',
    offBlack: '#000000aa',
  },
};
