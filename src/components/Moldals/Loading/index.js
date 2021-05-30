import React from 'react';
import {Modal, View, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import style from './style';

export default Loading = () => {
  const loadingModal = useSelector(state => state.loadingModal);

  return (
    <Modal transparent={true} visible={loadingModal} animationType={'slide'}>
      <View style={style.Container}>
        <View style={style.Card}>
          <ActivityIndicator color="#fff" size="large" />
          <Text style={{color: '#fff'}}>Carregando ...</Text>
        </View>
      </View>
    </Modal>
  );
};
