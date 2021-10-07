import { createContext, useContext } from "react";

export const perfilUsuario = createContext(null);

export const usePerfilUsuario = () => {
  return useContext(perfilUsuario);
};
