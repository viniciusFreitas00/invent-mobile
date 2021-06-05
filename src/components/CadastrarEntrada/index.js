import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';
import api from '../../services/api';

export default CadastrarEntrada = ({visible, setVisible, carregandoTela}) => {
  const dispatch = useDispatch();
  const [identificador, setIdentificador] = useState('');

  useEffect(() => setIdentificador(''), [visible]);

  const handleCadastraEntrada = () => {
    console.log(identificador);
    if (identificador.length < 7) {
      dispatch({
        type: 'ERROR_MODAL',
        payload: {
          show: true,
          message: 'O identificador deve conter mais de 7 caracteres',
        },
      });
    } else {
      dispatch({
        type: 'SUCCESS_MODAL',
        payload: {show: true, message: 'Entrada cadastrada com sucesso.'},
      });

      cadastrarEntrada();
    }
  };

  const cadastrarEntrada = async () => {
    dispatch({type: 'LOADING_MODAL', payload: true});

    await api
      .post('/adicionaEntrada', {
        identificador: identificador,
      })
      .then(response => {
        handleResponse(response.data);
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  };

  const handleResponse = ({error}) => {
    dispatch({type: 'LOADING_MODAL', payload: false});

    if (error) {
      dispatch({
        type: 'ERROR_MODAL',
        payload: {show: true, message: 'Ocorreu um erro no cadastro.'},
      });
    } else {
      dispatch({
        type: 'SUCCESS_MODAL',
        payload: {show: true, message: 'Entrada cadastrada com sucesso.'},
      });
      setVisible();
      carregandoTela();
    }
  };

  const validaLImite = () => {};
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={style.Container}>
        <View style={style.Card}>
          <TouchableOpacity style={style.Close} onPress={setVisible}>
            <Icon name="close" color="#fff" size={25} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 17}}>CADASTRAR ENTRADA</Text>
          <View style={{width: '100%', marginTop: 40}}>
            <TextInput
              placeholder="Identificador"
              style={style.CardTitle}
              onChangeText={setIdentificador}
            />
            <TouchableOpacity
              style={style.CardInput}
              onPress={handleCadastraEntrada}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
