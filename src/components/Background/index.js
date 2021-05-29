import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

export default Background = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#363636', flex: 1}}>
      <StatusBar backgroundColor="#808080" barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};
