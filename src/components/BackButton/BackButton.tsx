import React, { FC } from 'react';

import { Icon } from 'react-native-elements';

import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BackButton: FC = () => {
  const { top } = useSafeAreaInsets();
  const { canGoBack, goBack } = useNavigation();

  if (!canGoBack()) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={goBack}
      style={{
        top,
        left: 20,
        padding: 10,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#000',
      }}
    >
      <Icon name="arrow-back" color="red" size={25} />
    </TouchableOpacity>
  );
};

export default BackButton;
