import MenuOpcionesTabla  from "components/MenuOpcionesTabla";


export default function RegistrosUsuarios(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.rol}</td>
      <td>{props.estado}</td>
      <td>{props.nombre}</td>
      <td>
        <MenuOpcionesTabla rutaEnviar={`/usuarios/${props.id}`} nombreBoton='Editar'/>
      </td>
    </tr>
  );
}
