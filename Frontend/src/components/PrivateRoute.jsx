import { usePerfilUsuario } from 'context/UsuarioActual';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = usePerfilUsuario();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;
