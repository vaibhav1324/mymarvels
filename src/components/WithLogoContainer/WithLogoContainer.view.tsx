import React, { FC } from 'react';

import { View, StyleSheet, Image } from 'react-native';

import { height, width } from 'constants/theme';

import { WithLogoContainerProps } from './WithLogoContainer.props';

const WithLogoContainer: FC<WithLogoContainerProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('res/marvel_img.jpg')} style={styles.image} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image: {
    height: height * 0.45,
    width,
  },
});

export default WithLogoContainer;
