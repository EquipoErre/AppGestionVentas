import MenuOpcionesTabla from "components/UsuariosYRoles/MenuOpcionesTabla";
import { nanoid } from "nanoid";

export default function RegistrosUsuarios({ id, rol, estado, nombre }) {
  // cada ves que se usa un map hay que poner un key
  return (
    <tr key={nanoid}>
      <td>{id}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>{nombre}</td>
      <td>
        <MenuOpcionesTabla
          rutaEnviar={`/usuarios/${id}`}
          nombreBoton="Editar"
        />
      </td>
    </tr>
  );
}
