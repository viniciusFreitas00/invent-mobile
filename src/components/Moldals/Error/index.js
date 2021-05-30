import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

export default Error = () => {
  const error = useSelector(state => state.errorModal);
  const dispatch = useDispatch();

  const close = () => {
    dispatch({type: 'ERROR_MODAL', payload: {show: false, message: ''}});
  };

  return (
    <Modal transparent={true} visible={error.show} animationType={'slide'}>
      <View style={style.Container}>
        <View style={style.Card}>
          <View style={style.Icon}>
            <Icon name="closecircleo" color="#fff" size={60}></Icon>
          </View>
          <Text style={{color: '#fff'}}>{error.message}</Text>
          <TouchableOpacity style={style.Button} onPress={close}>
            <Text style={{color: '#fff'}}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
