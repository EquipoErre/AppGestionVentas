import React from 'react'
import { Link } from 'react-router-dom'

const Formulario = () => {
    return (
        <>

            <div className='contenedor-form-registro-venta'>
                <form action="" className="form-registro-venta">
                    <div className="form-registro-venta_section-head">
                        <div className='form-registro-venta_section-head_head'>
                            <h2>REGISTRO DE VENTA</h2>
                            <div className="contenedor-link-ventas">
                                <Link to='/ventas/listaVentas'>
                                    <button type="button" class="btn btn-primary button-ventas"> VER VENTAS </button>
                                </Link>
                            </div>
                        </div>
                        <div className='form-registro-venta_section-head_item-uno'>
                            <div className='form-registro-venta_section-head_item-uno_section'>
                                <div>
                                    <label htmlFor="fecha" className='font-color' >Fecha</label>
                                    <input type="date" id="fecha" name="fechaFactura" />
                                </div>
                                <div >
                                    <label className='font-color' htmlFor="codigoFactura">Codigo</label>
                                    <input type="text" name="codigoFactura" id="codigoFactura" disabled />
                                </div>
                            </div>
                            <div className='form-registro-venta_section-head_item-dos_section'>
                                <div>
                                    <label className='font-color' htmlFor="cliente">Cliente</label>
                                    <input type="text" id="cliente" name="nombreCliente" />
                                </div>
                                <div>
                                    <label className='font-color' htmlFor="documento">Documento</label>
                                    <input type="text" id="documento" name="documentoCliente" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='labelVendedor' htmlFor="vendedor">Vendedor</label>
                            <select name="vendedor" id="vendedor" required>
                                <option value="">Elija unvendedor</option>
                                <option value="01">Andres castro</option>
                                <option value="02">Sandra Ocampo</option>
                                <option value="03">Juana castro</option>
                            </select>
                        </div>
                    </div>



                    <div className="form-registro-venta_section-body">
                        <div className="contenedor-venta-registrada">
                            <div className="form-registro-venta_section-body_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Codigo producto</label>
                                    <input type="number" id="codigoProducto" name="codigoProducto " className='input-small' />
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input type="number" id="cantidadProducto" name="cantidadProducto"
                                        className='input-small' />
                                </div>
                            </div>


                            <div className="form-registro-venta_section-body_item-dos">
                                <div className='form-registro-venta_section-body_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" disabled />
                                </div>
                                <div className='form-registro-venta_section-body_item-dos_item'>
                                    <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                                    <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small' />
                                </div>
                                <div className='form-registro-venta_section-body_item-dos_item'>
                                    <label htmlFor="subtotal">Subtotal</label>
                                    <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small' />
                                </div>
                                <div className='form-registro-venta_section-body_item-dos_item'>
                                    <button className="button-agreagar">agregar</button>
                                    <button className="button-agreagar">agregar</button>
                                    <button className="button-agreagar">agregar</button>
                                    {/* Acá van los iconos de agregar, eliminar... */}
                                </div>
                            </div>
                        </div>

                        {/* *************************************************************************** */}
                        {/* *************************************************************************** */}
                    </div>
                    <div className='form-registro-venta_section-footer'>
                        <div className="form-registro-venta-total">
                            <div className="form-registro-venta_section">
                                <label htmlFor="totalCompra">Total</label>
                                <input type="number" disabled placeholder="000000" id="totalCompra" name="totalCompra" />
                            </div>
                        </div>

                        <div className="form-registro-venta-buttons">
                            <div>
                                <button type="button" class="btn btn-secondary">Cancelar</button>
                                <button type="button" class="btn btn-primary">Finalizar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario
