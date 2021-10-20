import { nanoid } from 'nanoid'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUsuarios } from 'utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formulario = () => {

    //se simulan los productos
    const productosSimulados = [
        {
            "_id": "123",
            "descripcion": "pantalon",
            "valor": 30000,
            "estado": false
        },
        {
            "_id": "124",
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

    //Estados
    const [vendedores, setVendedores] = useState([]);
    //const [productos, setProductos] = useState([]);
    const [inputIdProducto, setInputIdProducto] = useState("");
    const [productoDisponible, setProductoDisponible] = useState(false);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    //Se obtienen vendedores y productos al renderizar la página
    useEffect(() => {
        // obtener vendedores
        getUsuarios(setVendedores);
        // obtener productos
        //getProductos(setProductos);
    }, [])

    const comprobarStock = (productos) => {
        const producto = productos.find(producto => (producto._id === inputIdProducto && producto.estado === true))
        if (producto != undefined) {
            setInputIdProducto("");
            setCantidadProducto(0);
            agregarProducto();
            toast.success("Producto añadido")
        } else {
            toast.error("No hay stock");
        }
    }

    const agregarProducto = () => {
        setProductosSeleccionados([...productosSeleccionados, DropDownProductos])
    }


    // ********
    const [cantidadProducto, setCantidadProducto] = useState(0);
    const [carritoCompras, setCarritoCompras] = useState([]);
    const [camposProductoLlenos, setCamposProductoLlenos] = useState(false);

    useEffect(() => {
        if (cantidadProducto > 0 && inputIdProducto !== "") {
            setCamposProductoLlenos(true)
        } else {
            setCamposProductoLlenos(false)
        }
    }, [inputIdProducto, cantidadProducto])

    // ********

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
                    </div>
                    <div className="form-registro-venta_section-body">
                        {/* CONTENEDOR DE UNA VENTA*/}
                        <div className="contenedor-venta-registrada">
                            <div className="form-registro-venta_section-body_item-uno">
                                <div >
                                    <label htmlFor="codigoProducto">Id producto</label>
                                    <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type="text" id="codigoProducto" name="codigoProducto " className='input-small' />
                                </div>
                                <div>
                                    <label htmlFor="cantidadProducto">Cantidad</label>
                                    <input required onChange={(e) => { setCantidadProducto(e.target.value) }} type="number" id="cantidadProducto" name="cantidadProducto"
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
                                    {
                                        camposProductoLlenos ? (
                                            <button type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
                                                <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <button disabled type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
                                                <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </button>
                                        )
                                    }

                                </div>
                            </div>
                        </div>

                        {
                            productosSeleccionados.map((P) => {
                                return (
                                    // acá no usé nanoId porque me elimina lo que ya ahabía escrito cada que añado un dropDown           
                                    <P setInputIdProducto={setInputIdProducto} comprobarStock={comprobarStock} productosSimulados={productosSimulados} camposProductoLlenos={camposProductoLlenos} setCantidadProducto={setCantidadProducto}/>
                                );

                            })
                        }

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
                                <button type="reset" class="btn btn-secondary">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Finalizar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
            />
        </>
    )
}

const DropDownProductos = ({ setInputIdProducto, comprobarStock, productosSimulados, camposProductoLlenos, setCantidadProducto }) => {
    return (

        <div className="contenedor-venta-registrada">
            <div className="form-registro-venta_section-body_item-uno">
                <div >
                    <label htmlFor="codigoProducto">Id producto</label>
                    <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type="text" id="codigoProducto" name="codigoProducto " className='input-small' />
                </div>
                <div>
                    <label htmlFor="cantidadProducto">Cantidad</label>
                    <input required onChange={(e) => { setCantidadProducto(e.target.value) }} type="number" id="cantidadProducto" name="cantidadProducto"
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
                    {
                        camposProductoLlenos ? (
                            <button type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
                                <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>
                        ) : (
                            <button disabled type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
                                <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}



export default Formulario
