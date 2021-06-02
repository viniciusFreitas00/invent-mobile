import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
  },
  Card: {
    backgroundColor: '#363636',
    marginHorizontal: 30,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
    borderRadius: 5,
  },
  Close: {position: 'absolute', right: 10, top: 10},
  CardTitle: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  CardInput: {
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
