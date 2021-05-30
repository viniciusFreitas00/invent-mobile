import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';
import style from './style';
import InputLogin from '../../components/InputLogin';
import Background from '../../components/Background';

export default Login = () => {
  const [user, setUser] = useState('vinicius.freitas');
  const [password, setPassword] = useState('123456');
  const dispatch = useDispatch();
  // const logado = useSelector(state => state.user);

  const handleLogin = async () => {
    dispatch({type: 'LOADING_MODAL', payload: true});

    await api
      .post('/login', {
        usuario: user,
        senha: password,
      })
      .then(response => {
        handleLoginResponse(response.data.user);
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });

    // console.log(logado);
  };

  const handleLoginResponse = ({login, senha, nome, nivel_de_acesso}) => {
    if (login) {
      dispatch({type: 'LOADING_MODAL', payload: false});
      dispatch({
        type: 'LOGIN',
        payload: {
          login: login,
          senha: senha,
          nome: nome,
          nivel_de_acesso: nivel_de_acesso,
        },
      });
    } else {
      dispatch({type: 'LOADING_MODAL', payload: false});
      dispatch({
        type: 'ERROR_MODAL',
        payload: {show: true, message: 'Usuário ou senha inválidas.'},
      });
    }
  };

  return (
    <Background>
      <View style={style.Container}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Invent Logo
        </Text>
        <View style style={{padding: 50}}>
          <InputLogin iconName={'user'} onChangeText={setUser} />
          <InputLogin
            iconName={'lock'}
            password={true}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={style.Button} onPress={handleLogin}>
            <Icon
              name="login"
              size={25}
              color="#363636"
              style={{position: 'absolute', left: 20}}
            />
            <Text style={{fontSize: 17, color: '#363636'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};
