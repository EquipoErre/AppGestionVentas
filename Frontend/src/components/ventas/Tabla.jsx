import React from 'react'
import {Link} from "react-router-dom";


const Tabla = ({datos}) => {
    return (
        <>
            <table class="table">
                <thead class="table-dark table-head-sticky" >
                    <tr>
                        <td>Codigo</td>
                        <td>fecha</td>
                        <td>Documento cliente</td>
                        <td>Nombre cliente</td>
                        <td>Vendedor</td>
                        <td>Valor total</td>
                    </tr>
                </thead>
                <tbody className="datos-centrados">
                    {
                        datos.map((dato) => {
                            return(
                            <tr>
                                <Link to='/ventas:codigo/descripcionVenta'>
                                    <td>{dato.id}</td>
                                </Link>
                                <td>{dato.fecha}</td>
                                <td>{dato.documentoCliente}</td>
                                <td>{dato.nombreCliente}</td>
                                <td>{dato.vendedor}</td>
                                <td>{dato.valorTotal}</td>
                            </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Tabla
