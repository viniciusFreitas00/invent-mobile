import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import Background from '../../components/Background';
import CadastrarEntrada from '../../components/CadastrarEntrada';
import api from '../../services/api';
import style from './style';

export default function SingUp() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [modalRegister, setModalRegister] = useState(false);
  const [fila, setFila] = useState([{}]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregandoTela();
  }, []);

  const logout = useCallback(() => {
    dispatch({type: 'LOGOUT', payload: false});
  }, []);

  const handleModalState = useCallback(() => {
    setModalRegister(state => !state);
  }, []);

  const handleSaida = useCallback(({identificador, id_acesso}) => {
    Alert.alert('Saida', `Desaja cadastrar a saida do: ${identificador}`, [
      {text: 'Não'},
      {text: 'Sim', onPress: () => cadastrarSaida(id_acesso)},
    ]);
  }, []);

  const cadastrarSaida = async (id_acesso) => {
    await api
      .post('/adicionaSaida', {
        id_acesso: id_acesso,
      })
      .then(response => {
        carregandoTela();
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  };

  const carregandoTela = () => {
    setCarregando(true);
    dispatch({type: 'LOADING_MODAL', payload: true});
    getDadosFila();
  };

  const getDadosFila = async () => {
    await api
      .get('/retornaPessoas', {})
      .then(response => {
        setFila(response.data.retorno);
        setCarregando(false);
        dispatch({type: 'LOADING_MODAL', payload: false});
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
        dispatch({type: 'LOADING_MODAL', payload: false});
      });
  };

  return (
    <Background>
      <ScrollView>
        <View style={style.Header}>
          <View style={style.User}>
            <MIcon name="face" size={60} color="#363636" />
          </View>
          <View style={{marginLeft: 20, alignSelf: 'center'}}>
            <Text style={style.HeaderDefautText}>{user.login}</Text>
            <Text style={style.HeaderDefautText}>{user.nome}</Text>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 5}}
              onPress={logout}>
              <Icon name="logout" color="#fff" size={25} />
              <Text style={{color: '#fff', marginLeft: 5, fontSize: 15}}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.Body}>
          <TouchableOpacity style={style.Button} onPress={handleModalState}>
            <Text>Cadastrar entrada</Text>
          </TouchableOpacity>
          {!carregando && (
            <View style={{marginVertical: 20}}>
              <View style={{alignItems: 'center', padding: 20}}>
                <Text style={{color: '#fff'}}>
                  Pessoas no mercado: {fila.length}
                </Text>
              </View>
              {fila.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => handleSaida(item)}
                    style={{
                      marginHorizontal: 20,
                      marginHorizontal: 20,
                      backgroundColor: index % 2 == 1 ? '#606060' : '#909090',
                      padding: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{color: '#fff'}}>{item.identificador}</Text>
                      <Text style={{color: '#fff'}}>{item.data_entrada}</Text>
                    </View>
                    <Text style={{color: '#fff', alignSelf: 'center'}}>
                      Cadastra saida
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <CadastrarEntrada
          visible={modalRegister}
          setVisible={handleModalState}
          carregandoTela={carregandoTela}
        />
      </ScrollView>
    </Background>
  );
}
