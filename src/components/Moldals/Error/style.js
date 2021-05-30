import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  Card: {
    backgroundColor: '#363636',
    height: 150,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  Icon: {
    backgroundColor: '#ff0000',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -50,
  },
  Button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FF0000',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 3
  },
});
