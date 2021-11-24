import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Modals from '../components/Moldals';

export default function Rotas({children}) {
  const {login} = useSelector(state => state.user);

  return (
    <>
      {login ? <Home /> : <Login />}
      <Modals />
    </>
  );
}
