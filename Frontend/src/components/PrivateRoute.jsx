
import { useUser } from 'context/UserContext';
import React from 'react';

const PrivateRoute = ({ roleList,stateList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol) && stateList.includes(userData.estado) ) {
    return children;
  }
  return <div className='h3'>No estás autorizado o tu rol no es válido  para ver este sitio.</div>;
};

export default PrivateRoute;
