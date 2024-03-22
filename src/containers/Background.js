import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {images} from '../assets';

export const Background = ({children}) => {
  return (
    <View>
      {/* <ImageBackground
        source={images.background}
        style={styles.imageBackground}
      /> */}
      {/* <View style={styles.overlay} /> */}
      <View style={styles.childrenWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
  },
  childrenWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
});
