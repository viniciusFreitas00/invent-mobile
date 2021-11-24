import React from 'react';

import Erro from './Erro';
import Loading from './Loading';
import Success from './Success';

export default function Modal() {
  return (
    <>
      <Erro />
      <Loading />
      <Success />
    </>
  );
}
