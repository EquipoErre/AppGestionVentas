import { nanoid } from 'nanoid'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUsuarios } from 'utils/api'

const Formulario = () => {

    //se simulan los productos
    const productosBackend = [
        {
            "_id": "123",
            "descripcion": "pantalon",
            "valor": 30000,
            "estado": true
        },
        {
            "_id": "1234",
            "descripcion": "short",
            "valor": 15000,
            "estado": false
        },
        {
            "_id": "12345",
            "descripcion": "camisa",
            "valor": 25000,
            "estado": true
        },
        {
            "_id": "123456",
            "descripcion": "Blusa",
            "valor": 25000,
            "estado": false
        }
    ]

    const [vendedores, setVendedores] = useState([]);
    //const [productos, setProductos] = useState([]);
    const [inputIdProducto, setInputIdProducto] = useState("");
    const [productoDisponible, setProductoDisponible] = useState(false);

    //Se obtienen vendedores y productos al renderizar la página
    useEffect(() => {
        // obtener vendedores
        getUsuarios(setVendedores);
        // obtener productos
        //getProductos(setProductos);
    }, [])

    // se comprueba si hay stock del producto
    useEffect(() => {
        for (let i = 0; i < productosBackend.length; i++) {
            if (productosBackend[i]._id === inputIdProducto && productosBackend[i].estado === true) {
                setProductoDisponible(true);
                break;
            } else {
                setProductoDisponible(false)

            }
        }
    }, [inputIdProducto])

     const seleccionarUnProducto =  (id) => {
        return productosBackend.find(producto => producto._id === inputIdProducto);
    }

    // const nuevaVenta = ()=>{
    //     if(productoDisponible){
            
    //     }
    // }

    return (
        <>

            <div className='contenedor-form-registro-venta'>
                <form className="form-registro-venta">
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
                                    <input required type="date" id="fecha" name="fechaFactura" />
                                </div>
                                {/* <div >
                                    <label className='font-color' htmlFor="codigoFactura">Codigo</label>
                                    <input type="text" name="codigoFactura" id="codigoFactura" disabled />
                                </div> */}
                            </div>
                            <div className='form-registro-venta_section-head_item-dos_section'>
                                <div>
                                    <label className='font-color' htmlFor="cliente">Cliente</label>
                                    <input required type="text" id="cliente" name="nombreCliente" />
                                </div>
                                <div>
                                    <label className='font-color' htmlFor="documento">Documento</label>
                                    <input required type="text" id="documento" name="documentoCliente" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='labelVendedor' htmlFor="vendedor">Vendedor</label>
                            <select required name="vendedor" id="vendedor" defaultValue='' >
                                <option value="" disabled>Elija unvendedor</option>
                                {vendedores.map((vendedor) => {
                                    return (
                                        <option value={vendedor._id} key={nanoid()}>{vendedor.nombre}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                    </div>



                    <div className="form-registro-venta_section-body">
                        <div className="contenedor-venta-registrada">
                            <div className="form-registro-venta_section-body_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Id producto</label>
                                    <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type="number" id="codigoProducto" name="codigoProducto " className='input-small' />
                                    {productoDisponible || inputIdProducto === "" ? (
                                        <></>
                                    ) : (
                                        <span className='stock'>NO HAY STOCK!</span>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input required type="number" id="cantidadProducto" name="cantidadProducto"
                                        className='input-small' />
                                </div>
                            </div>


                            <div className="form-registro-venta_section-body_item-dos">
                                <div className='form-registro-venta_section-body_item-dos_item'>
                                    <label htmlFor="descripcionProducto">Descripcion</label>
                                    <input type="text" id="descripcionProducto" name="descripcionProducto" value={productoDisponible ? (
                                        seleccionarUnProducto(inputIdProducto).descripcion
                                        // "true"
                                    ) : (
                                        "false"
                                    )} disabled />
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
                                <button disabled type="submit" class="btn btn-primary">Finalizar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario
