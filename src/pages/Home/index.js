import React, {useRef, useCallback} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import Background from '../../components/Background';

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
  const handleSaida = useCallback(({nome, id}) => {
    Alert.alert('Saida', `Desaja cadastrar a saida do: ${nome}`);
  }, []);
  return (
    <Background>
      <View
        style={{marginTop: 50, paddingHorizontal: 30, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />
        <View style={{marginLeft: 20, alignSelf: 'center'}}>
          <Text style={{color: '#fff', marginBottom: 2}}>vinicius.freitas</Text>
          <Text style={{color: '#fff', marginBottom: 5}}>Vincius Freire de Freitas</Text>
          <TouchableOpacity><Text>Log out</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 50}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#dadada',
            alignSelf: 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 5,
          }}>
          <Text>Cadastrar entrada</Text>
        </TouchableOpacity>
        <FlatList
          style={{marginTop: 40}}
          data={teste}
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
        />
      </View>
    </Background>
  );
}
