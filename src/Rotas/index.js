import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Modals from '../components/Moldals';

export default Rotas = ({children}) => {
  // const login = useSelector(state => state.user);

  // useEffect(() => {
  //   console.log(login);
  // });

  return (
    <>
      {false ? <Home /> : <Login />}
      <Modals />
    </>
  );
};
