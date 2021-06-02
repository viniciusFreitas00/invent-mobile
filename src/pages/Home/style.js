import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Header: {marginTop: 50, paddingHorizontal: 30, flexDirection: 'row'},
  User: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderDefautText: {color: '#fff', marginBottom: 2, fontSize: 12},
  Body: {flex: 1, marginTop: 50},
  Button: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
  },
});
