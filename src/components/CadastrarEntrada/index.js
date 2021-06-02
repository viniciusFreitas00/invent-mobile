import React from 'react';
import {Modal, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style';

export default CadastrarEntrada = ({visible, setVisible}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={style.Container}>
        <View style={style.Card}>
          <TouchableOpacity style={style.Close} onPress={setVisible}>
            <Icon name="close" color="#fff" size={25} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 17}}>CADASTRAR ENTRADA</Text>
          <View style={{width: '100%', marginTop: 40}}>
            <TextInput placeholder="Identificador" style={style.CardTitle} />
            <TouchableOpacity style={style.CardInput}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
