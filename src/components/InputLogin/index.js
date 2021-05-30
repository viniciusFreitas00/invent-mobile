import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import style from './style';

export default InputLogin = ({iconName, password = false, onChangeText}) => {
  return (
    <View style={style.Content}>
      <Icon
        name={iconName}
        size={25}
        color={'#A9A9A9'}
        style={{marginBottom: 2}}></Icon>
      <TextInput
        style={style.Input}
        selectionColor={'#A9A9A9'}
        secureTextEntry={password}
        onChangeText={onChangeText}
      />
    </View>
  );
};
