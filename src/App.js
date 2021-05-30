import React from 'react';
import Rotas from './Rotas';
import {Provider} from 'react-redux';

import store from './store';

export default App = () => {

  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  );
};
