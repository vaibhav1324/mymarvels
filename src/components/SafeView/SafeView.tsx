import React, { memo, useMemo } from 'react';

import { Platform, SafeAreaView, View, ViewProps } from 'react-native';

import { SafeAreaViewProps } from 'react-native-safe-area-context';

type SafeViewProps = ViewProps | SafeAreaViewProps;

const SafeView = memo<SafeViewProps>((props) => {
  const Container = useMemo(
    () => (Platform.OS === 'ios' ? SafeAreaView : View),
    [],
  );

  return (
    <Container {...props} style={{ flex: 1 }}>
      {props.children}
    </Container>
  );
});

export default SafeView;
