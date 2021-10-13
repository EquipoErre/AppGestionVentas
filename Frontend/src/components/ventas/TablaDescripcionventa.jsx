import React from 'react'
import { Link } from 'react-router-dom'

const TablaDescripcionventa = ({ datos }) => {
    return (
        <div>
            <div className='contenedor-head-descripcion'>
                <div className="contenedor-head">
                    <div className="item">
                        <label htmlFor="">Estado</label>
                        <label htmlFor="">En proceso</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Codigo venta</label>
                        <label htmlFor="">01</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Fecha</label>
                        <label htmlFor="">01/02/2021</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Documento cliente</label>
                        <label htmlFor="">10025232654</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Nombre Cliente</label>
                        <label htmlFor="">Eduardo Rincon</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Vendedor</label>
                        <label htmlFor="">01</label>
                    </div>
                    <div className="item">
                        <label htmlFor="">Valor total</label>
                        <label htmlFor="">32556456</label>
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
                        datos.map((dato) => {
                            return (
                                <tr>
                                    <td>{dato.codigoProducto}</td>
                                    <td>{dato.precioUnitario}</td>
                                    <td>{dato.descripcion}</td>
                                    <td>{dato.cantidad}</td>
                                    <td>{dato.subtotal}</td>
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
