import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import Background from '../../components/Background';
import CadastrarEntrada from '../../components/CadastrarEntrada';
import style from './style';

const teste = [
  {id: 1, nome: 'tesdmajskd', dataEntrada: '21/05/2020 10:26'},
  {id: 2, nome: 'tesdmajskd asdij', dataEntrada: '21/05/2020 10:26'},
  {id: 3, nome: 'tesdmajskd as', dataEntrada: '21/05/2020 10:26'},
  {id: 3, nome: 'tesdmajskd asd', dataEntrada: '21/05/2020 10:26'},
  {id: 4, nome: 'tesdmajskd kajda', dataEntrada: '21/05/2020 10:26'},
  {id: 5, nome: 'tesdmajskd kajda', dataEntrada: '21/05/2020 10:26'},
  {id: 6, nome: 'tesdmajskd kajda', dataEntrada: '21/05/2020 10:26'},
  {id: 7, nome: 'tesdmajskd kajda', dataEntrada: '21/05/2020 10:26'},
];

export default function SingUp() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [modalRegister, setModalRegister] = useState(false);
  // setModalRegister((state) => !state)

  const logout = useCallback(() => {
    dispatch({type: 'LOGOUT', payload: false});
  }, []);

  const handleModalState = useCallback(() => {
    setModalRegister(state => !state);
  }, []);

  const handleSaida = useCallback(({nome, id}) => {
    Alert.alert('Saida', `Desaja cadastrar a saida do: ${nome}`);
  }, []);

  return (
    <Background>
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
        <FlatList
          style={{marginTop: 10}}
          data={teste}
          ListHeaderComponent={() => (
            <View style={{alignItems: 'center', padding: 20}}>
              <Text style={{color: '#fff'}}>
                Pessoas no mercado: {teste.length}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
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
                  <Text style={{color: '#fff'}}>{item.nome}</Text>
                  <Text style={{color: '#fff'}}>{item.dataEntrada}</Text>
                </View>
                <Text style={{color: '#fff'}}>Cadastra saida</Text>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={() => <View style={{marginBottom: 20}} />}
        />
      </View>
      <CadastrarEntrada visible={modalRegister} setVisible={handleModalState}/>
    </Background>
  );
}
