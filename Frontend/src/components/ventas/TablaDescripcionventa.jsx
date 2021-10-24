import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { patchVentas } from 'utils/api';
import { getUsuarios } from 'utils/api';

const datos = [
    {

        "codigoVenta": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "600253",
        "codigoProducto": "01",
        "precioUnitario": '6100',
        "descripcion": 'producto1',
        "cantidad": '6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "600253",
        "codigoProducto": "01",
        "precioUnitario": '6100',
        "descripcion": 'producto1',
        "cantidad": '6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "600253",
        "codigoProducto": "01",
        "precioUnitario": '6100',
        "descripcion": 'producto1',
        "cantidad": '6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "600253",
        "codigoProducto": "01",
        "precioUnitario": '6100',
        "descripcion": 'producto1',
        "cantidad": '6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "600253",
        "codigoProducto": "01",
        "precioUnitario": '6100',
        "descripcion": 'producto1',
        "cantidad": '6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
];

const TablaDescripcionventa = ({ venta, vendedor, productos }) => {
    // console.log(venta.productos);

    const [editarCampos, setEditarCampos] = useState(false);
    const [ventaEditada, setVentaEditada] = useState(venta)
    const [vendedores, setVendedores] = useState([]);
    const [usuarios, setUsuarios] = useState([]);



    useEffect(() => {
       console.log("Venta Editada → ", ventaEditada);
    }, [ventaEditada])



    useEffect(() => {
        getUsuarios(setUsuarios);    
    }, [])
    
    useEffect(() => {
        setVendedores(usuarios.filter((u) => u.rol === "vendedor"))
    }, [usuarios])

    const editarVendedor = (id)=> {
        // console.log("idVendedor → ", id);
        setVentaEditada({...ventaEditada, vendedor: vendedores.filter((v) => v._id === id)[0] })
    }

    const enviarEdicionAlBackend = ()=> {
        console.log("Venta Editada" , ventaEditada);
        console.log("Venta Editada id" , ventaEditada._id);
        const id = ventaEditada._id;
        delete ventaEditada["_id"];
        patchVentas(id, ventaEditada)
        setEditarCampos(false)
    }

    return (
        <div>
            <div className='contenedor-head-descripcion'>

                {
                    editarCampos ? (
                        <div className="contenedor-head">
                            <div className="item">
                            <label htmlFor="estado">Estado</label>
                                <select onChange={(e) => setVentaEditada({...ventaEditada, estado: e.target.value})} name="estado" id="estado" defaultValue={venta.estado} placeholder={venta.estado}>                                                                            
                                    <option value="entregada">Entregada</option>                                       
                                    <option value="enProceso">En Proceso</option>                                       
                                    <option value="cancelada">Cancelada</option>                                       
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="">Codigo venta</label>
                                <label htmlFor="">{venta._id}</label>
                            </div>
                            <div className="item">
                                <label htmlFor='fecha' className='font-color' >Fecha</label>
                                <input required  onChange={(e) => setVentaEditada({...ventaEditada, fecha: e.target.value})} type='date' id='fecha' name='fechaFactura' defaultValue={venta.fecha}/>
                            </div>
                            <div className="item">
                                <label className='font-color' htmlFor='documento'>Documento</label>
                                <input required onChange={(e) => setVentaEditada({...ventaEditada, documento: e.target.value})} type='text' id='documento' name='documentoCliente' pattern='[0-9]*' defaultValue={venta.documento}/>
                            </div>
                            <div className="item">
                                <label className='font-color' htmlFor='cliente'>Cliente</label>
                                <input required onChange={(e) => setVentaEditada({...ventaEditada, cliente: e.target.value})} type='text' id='cliente' name='nombreCliente' defaultValue={venta.cliente}/>
                            </div>
                            <div className="item">
                            <label className='labelVendedor' htmlFor='vendedor'>Vendedor</label>
                                    <select onChange= {(e) => editarVendedor(e.target.value)} required name='vendedor' id='vendedor' >
                                        {/* <option disabled value={vendedor._id}>{vendedor.name}</option> */}
                                        {vendedores.map((v) => {
                                            return (
                                                <option value={v._id} key={nanoid()}>{v.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                            </div>
                            <div className="item">
                                <label htmlFor="">Valor total</label>
                                <label htmlFor="">{venta.total}</label>
                            </div>
                        </div>
                    ) : (
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
                    )
                }


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
                    {
                        editarCampos ? (
                            <button onClick={()=> enviarEdicionAlBackend()} type="button" class="btn btn-primary"> Guardar </button>
                        ) : (
                            <button type="button" class="btn btn-primary" onClick={() => setEditarCampos(true)}> Editar </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TablaDescripcionventa
