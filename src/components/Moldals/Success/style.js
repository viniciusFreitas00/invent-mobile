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
    height: 180,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 2,
  },
  Icon: {
    backgroundColor: '#00FF00',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -50,
    justifyContent: "center",
    alignItems: "center"
  },
  Button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#00FF00',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 3
  },
});
