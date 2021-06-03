import React from 'react';

import Error from './Error';
import Loading from './Loading';
import Success from './Success';

export default Modal = () => {
  return (
    <>
      <Error />
      <Loading />
      <Success />
    </>
  );
};
