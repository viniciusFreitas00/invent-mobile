import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style';
import InputLogin from '../../components/InputLogin';
import Background from '../../components/Background';

export default Login = () => {
  return (
    <Background>
      <View style={style.Container}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Invent Logo
        </Text>
        <View style style={{padding: 50}}>
          <InputLogin iconName={'user'} />
          <InputLogin iconName={'lock'} password={true} />
          <TouchableOpacity
            style={style.Button}>
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
