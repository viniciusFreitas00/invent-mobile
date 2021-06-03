import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

export default Error = () => {
  const success = useSelector(state => state.successModal);
  const dispatch = useDispatch();

  const close = () => {
    dispatch({type: 'SUCCESS_MODAL', payload: {show: false, message: ''}});
  };

  return (
    <Modal transparent={true} visible={success.show} animationType={'slide'}>
      <View style={style.Container}>
        <View style={style.Card}>
          <View style={style.Icon}>
            <Icon name="checkcircleo" color="#fff" size={60}></Icon>
          </View>
          <Text style={{color: '#fff', textAlign: 'center'}}>
            {success.message}
          </Text>
          <TouchableOpacity style={style.Button} onPress={close}>
            <Text style={{color: '#fff'}}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
