import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

export default Home = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>dajdkajkdjakdj</Text>
      <Button
        title="dskdsjdksjdksds"
        onPress={() => {
          dispatch({type: 'ERROR_MODAL', payload: {show: false, message: ''}});
        }}></Button>
    </View>
  );
};
