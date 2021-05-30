import {createStore} from 'redux';

const INITIAL_STATE = {
  user: {
    login: null,
    senha: null,
    nome: null,
    nivel_de_acesso: null,
  },
  errorModal: {
    show: false,
    message: '',
  },
  loadingModal: false,
};

const Store = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user: action.payload};
    case 'LOGOUT':
      return {...state, user: INITIAL_STATE.user};
    case 'ERROR_MODAL':
      return {...state, errorModal: action.payload};
    case 'LOADING_MODAL':
      return {...state, loadingModal: action.payload};
    default:
      return {...state};
  }
};

export default createStore(Store);
