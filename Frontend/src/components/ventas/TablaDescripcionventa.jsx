import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const datos = [
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
];

const TablaDescripcionventa = ({venta, vendedor, productos}) => {  
    console.log(venta.productos);
    return (
        <div>
            <div className='contenedor-head-descripcion'>
                <div className="contenedor-head">
                    <div className="item">
                        <label htmlFor="">Estado</label>
                        <label htmlFor="">{venta.estado}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Codigo venta</label>
                        <label htmlFor="">{venta._id}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Fecha</label>
                        <label htmlFor="">{venta.fecha}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Documento cliente</label>
                        <label htmlFor="">{venta.documento}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Nombre Cliente</label>
                        <label htmlFor="">{venta.cliente}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Vendedor</label>
                        <label htmlFor="">{vendedor.name}</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Valor total</label>
                        <label htmlFor="">{venta.total}</label>
                    </div>
                </div>
                <div className="contenedor-link-ventas">
                    <Link to='/ventas/listaVentas'>
                        <button type="button" class="btn btn-primary button-ventas"> REGRESAR </button>
                    </Link>
                </div>
            </div>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <td>Codigo</td>
                        <td>Precio unitario</td>
                        <td>Descripcion</td>
                        <td>Cantidad</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((p) => {
                            return (
                                <tr>
                                    <td>{p._id}</td>
                                    <td>{p.valor}</td>
                                    <td>{p.descripcion}</td>
                                    <td>{p.cantidad}</td>
                                    <td>{p.subtotal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='contenedor-padre-botones'>
                <div className='contenedor-botones'>
                <button type="button" class="btn btn-secondary">Cancelar</button>
                <button type="button" class="btn btn-primary"> Editar </button>
                </div>
            </div>
        </div>
    )
}

export default TablaDescripcionventa
