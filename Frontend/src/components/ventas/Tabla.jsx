import React from 'react'
import { useState } from 'react';
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
                                    <td>{dato._id}</td>
                                </Link>
                                <td>{dato.fecha}</td>
                                <td>{dato.documento}</td>
                                <td>{dato.cliente}</td>
                                <td>{dato.vendedor.nombre}</td>
                                <td>{dato.total}</td>
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
