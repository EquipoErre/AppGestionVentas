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
            "_id": "1234",
            "descripcion": "short",
            "valor": 15000,
            "estado": true
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
            "valor": 27850,
            "estado": true
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

    const comprobarStock = (productos, idProducto, cantidadProducto) => {
        const producto = productos.find(producto => (producto._id === inputIdProducto && producto.estado === true))
        if (producto != undefined) {
            agregarProducto(producto, cantidadProducto);
            setInputIdProducto("");
            // setCantidadProducto(0);
            toast.success("Producto añadido")
        } else {
            toast.error("No hay stock");
        }
    }



    // *****************************************************

    const [productoFacturado, setProductoFacturado] = useState(null);

    const agregarProducto = (producto, cantidadProducto) => {
        const productoFacturado = {
            "_id": producto._id,
            "descripcion": producto.descripcion,
            "valor": producto.valor,
            "cantidad": cantidadProducto,
            "subtotal": (parseInt(producto.valor)) * (parseInt(cantidadProducto))
        }
        setTotal(total + parseInt(productoFacturado.subtotal))
        setProductoFacturado(productoFacturado);
        setProductosSeleccionados([...productosSeleccionados, DropDownProductos])
    }


    // ********
    const [inputCantidadProducto, setCantidadProducto] = useState(0);
    const [camposProductoLlenos, setCamposProductoLlenos] = useState(false);

    useEffect(() => {
        if (inputCantidadProducto > 0 && inputIdProducto !== "") {
            setCamposProductoLlenos(true)
        } else {
            setCamposProductoLlenos(false)
        }
    }, [inputIdProducto, inputCantidadProducto])


    // *******************************
    const [total, setTotal] = useState(0);


    // *******************************


    // ********
    // const [carritoCompras, setCarritoCompras] = useState([]);

    // const anadirAlcarrito = (id, cantidad, descripcion, precio, subtotal) => {
    //     setCarritoCompras([...carritoCompras,
    //     { "_id": id },
    //     { "cantidad": cantidad },
    //     { "descripcion": descripcion },
    //     { "precio": precio },
    //     { "subtotal": subtotal }
    //     ])
    // }
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
                    {/* *************************** */}
                    <div className="contenedor-venta-registrada">
                        <div className="form-registro-venta_section-body_item-uno">
                            <div >
                                <label htmlFor="codigoProducto">Id producto</label>
                                <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type="text" id="codigoProducto" name="codigoProducto " />
                            </div>
                            <div>
                                <label htmlFor="inputCantidadProducto">Cantidad</label>
                                <input required onChange={(e) => { setCantidadProducto(e.target.value) }} type="number" id="inputCantidadProducto" name="inputCantidadProducto"
                                    className='input-small' />
                            </div>


                            <div className="form-registro-venta_section-body_item-dos">
                                {
                                    camposProductoLlenos ? (
                                        <button type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados, inputIdProducto, inputCantidadProducto)}>
                                            <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <button disabled type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados, inputIdProducto, inputCantidadProducto)}>
                                            <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    {/* *************************** */}
                    <div className="form-registro-venta_section-body">
                        {/* CONTENEDOR DE UNA VENTA*/}

                        {
                            productosSeleccionados.map((P) => {
                                return (
                                    // acá no usé nanoId porque me repite lo que ya ahabía escrito cada que añado un dropDown           
                                    <P productoFacturado={productoFacturado} />
                                );

                            })
                        }

                    </div>


                    <div className='form-registro-venta_section-footer'>
                        <div className="form-registro-venta-total">
                            <div className="form-registro-venta_section">
                                <label htmlFor="totalCompra">Total</label>
                                <input type="number" disabled value={total} placeholder="000000" id="totalCompra" name="totalCompra" />
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

const DropDownProductos = ({ productoFacturado }) => {
    return (
        <tr className="contenedor-dos-venta-registrada">
            <td >
                <label htmlFor="codigoProducto">Id producto</label>
                <input disabled type="text" defaultValue={productoFacturado._id} />
            </td>
            <td className='form-registro-venta_section-body_item-dos_item'>
                <label htmlFor="descripcionProducto">Descripcion</label>
                <input disabled type="text" defaultValue={productoFacturado.descripcion} />
            </td>
            <td className='form-registro-venta_section-body_item-dos_item'>
                <label htmlFor="precioProducto" disabled>Precio Unitario</label>
                <input disabled className='input-small' type="text" defaultValue={productoFacturado.valor} />
            </td>
            <td>
                <label htmlFor="inputCantidadProducto">Cantidad</label>
                <input disabled className='input-small' type="text" defaultValue={productoFacturado.cantidad} />
            </td>
            <td className='form-registro-venta_section-body_item-dos_item'>
                <label htmlFor="subtotal">Subtotal</label>
                <input disabled type="text" defaultValue={productoFacturado.subtotal} />
            </td>
            <td className='butons-delete-edit'>
                <button type='button' className="button-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <button type='button' className="button-edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </button>
            </td>
        </tr>


        // <div className="contenedor-venta-registrada">
        //     <div className="form-registro-venta_section-body_item-uno">
        //         <div >
        //             <label htmlFor="codigoProducto">Id producto</label>
        //             <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type="text" id="codigoProducto" name="codigoProducto " className='input-small' />
        //         </div>
        //         <div>
        //             <label htmlFor="inputCantidadProducto">Cantidad</label>
        //             <input required onChange={(e) => { setCantidadProducto(e.target.value) }} type="number" id="inputCantidadProducto" name="inputCantidadProducto"
        //                 className='input-small' />
        //         </div>
        //     </div>


        //     <div className="form-registro-venta_section-body_item-dos">
        //         <div className='form-registro-venta_section-body_item-dos_item'>
        //             <label htmlFor="descripcionProducto">Descripcion</label>
        //             <input type="text" id="descripcionProducto" name="descripcionProducto" disabled />
        //         </div>
        //         <div className='form-registro-venta_section-body_item-dos_item'>
        //             <label htmlFor="precioProducto" disabled>Precio Unitario</label>
        //             <input type="number" id="precioProducto" name="precioProducto" disabled placeholder='000000' className='input-small' />
        //         </div>
        //         <div className='form-registro-venta_section-body_item-dos_item'>
        //             <label htmlFor="subtotal">Subtotal</label>
        //             <input type="number" id="subtotal" name="subtotal" disabled placeholder='000000' className='input-small' />
        //         </div>
        //         <div className='form-registro-venta_section-body_item-dos_item'>
        //             {
        //                 camposProductoLlenos ? (
        //                     <button type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
        //                         <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        //                             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        //                         </svg>
        //                     </button>
        //                 ) : (
        //                     <button disabled type='button' className="button-plus" onClick={() => comprobarStock(productosSimulados)}>
        //                         <svg className='button-plus' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        //                             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        //                         </svg>
        //                     </button>
        //                 )
        //             }

        //         </div>
        //     </div>
        // </div>
    )
}



export default Formulario
