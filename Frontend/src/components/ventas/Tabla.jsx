import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import DescripcionVenta from 'pages/ventas/DescripcionVenta';


const Tabla = ({ventas}) => {


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
                        ventas.map((venta) => {
                            return(
                            <tr>
                                <Link to={`/ventas${venta._id}/descripcionVenta`}>
                                    <td>{venta._id}</td>
                                </Link>
                                <td>{venta.fecha}</td>
                                <td>{venta.documento}</td>
                                <td>{venta.cliente}</td>
                                <td>{venta.vendedor.name}</td>
                                <td>{venta.total}</td>
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
