import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import api from '../../services/api';
import style from './style';
import InputLogin from '../../components/InputLogin';
import Background from '../../components/Background';
import image from '../../assets/imgs/logo_descansado.png';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await api
      .post('/login', {
        usuario: user,
        senha: password,
      })
      .then(response => {
        const data = response.data;
        if (data.user) {
          handleLoginResponse(data.user);
        } else {
          dispatch({type: 'LOADING_MODAL', payload: false});
          dispatch({
            type: 'ERROR_MODAL',
            payload: {show: true, message: 'Usuário ou senha inválidas.'},
          });
        }
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  };

  const handleLoginResponse = ({login, senha, nome, nivel_de_acesso}) => {
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
  };

  return (
    <Background>
      <View style={style.Container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={image} />
          <Text style={{color: '#808080', textAlign: 'center', fontSize: 30}}>
            INVENT
          </Text>
        </View>

        <View style={{padding: 50}}>
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
}
