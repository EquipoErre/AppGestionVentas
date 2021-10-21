import { nanoid } from 'nanoid'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getUsuarios } from 'utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { crearVenta } from 'utils/api'

const Formulario = ({vendedores, productos}) => {

    //Estados
    const [inputIdProducto, setInputIdProducto] = useState('');
    const [total, setTotal] = useState(0);
    const [inputCantidadProducto, setCantidadProducto] = useState(0);
    const [camposProductoLlenos, setCamposProductoLlenos] = useState(false);
    const [filasTabla, setFilasTabla] = useState([])
    const form = useRef(null);

    //Se validan condiciones para activar el boton de añadir producto a la venta
    useEffect(() => {
        if (inputIdProducto !== '' && inputCantidadProducto > 0 && filasTabla.find((p) => (p._id === inputIdProducto)) === undefined ) {
            setCamposProductoLlenos(true)
        } else {
            setCamposProductoLlenos(false)
        }
    }, [inputIdProducto, inputCantidadProducto, filasTabla])


    //Se comprueba si el producto existe y esta disponible
    const comprobarStock = (productos, idProducto, cantidadProducto) => {
        const producto = productos.find(producto => (producto._id === idProducto && producto.estado === true))
        if (producto != undefined) {
            agregarProducto(producto, cantidadProducto);
            // setInputIdProducto("");
            // setCantidadProducto(0);
            toast.success('Producto añadido')
        } else {
            toast.error('No hay stock');
        }
    }


    const agregarProducto = (producto, cantidadProducto) => {
        const productoFacturado = {
            '_id': producto._id,
            'descripcion': producto.descripcion,
            'valor': producto.valor,
            'cantidad': cantidadProducto,
            'subtotal': (parseInt(producto.valor)) * (parseInt(cantidadProducto))
        }
        setFilasTabla([...filasTabla, productoFacturado])
        setTotal(parseInt(total + productoFacturado.subtotal))
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const formData = {};
        fd.forEach((value, key) => {
            formData[key] = value;
        });

        console.log('form data', formData);

        const listaProductos = Object.keys(formData)
            .map((k) => {
                if (k.includes('producto')) {
                    return filasTabla.filter((p) => p._id === formData[k])[0];
                }
                return null;
            }).filter((p) => p);


        const datosVenta = {
            "fecha": formData.fechaFactura,
            "vendedor": vendedores.filter(v => v._id === formData.vendedor)[0],
            "cliente": formData.nombreCliente,
            "documento": formData.documentoCliente,
            "productos": listaProductos,
            "total": formData.totalCompra,
            "estado": formData.estado

        }

        console.log("DATOS VENTA → ", datosVenta)
        await crearVenta(
            datosVenta,
            (response) => {
                console.log(response);
                toast.success("Venta agragada con éxito")
            },
            (error) => {
                toast.error("Error al agregar venta")
                console.error(error);
            }
        );
    };



    // useEffect(() => {
    //     setTotal(total +1)
    // }, [filasTabla])

    // const calcularTotal = ()=>{
    //     var totalTemp = total;
    //     filasTabla.map(el=>{
    //        totalTemp = totalTemp + parseInt(el.subtotal)
    //      })
    //      return totalTemp
    // }

    return (
        <>
            <div className='contenedor-form-registro-venta'>
                <form ref={form} onSubmit={submitForm} className='form-registro-venta'>
                    <div className='form-registro-venta_section-head'>
                        <div className='form-registro-venta_section-head_head'>
                            <h2>REGISTRO DE VENTA</h2>
                            <div className='contenedor-link-ventas'>
                                <Link to='/ventas/listaVentas'>
                                    <button type='button' class='btn btn-primary button-ventas'> VER VENTAS </button>
                                </Link>
                            </div>
                        </div>
                        <div className='form-registro-venta_section-head_item-uno'>
                            <div className='form-registro-venta_section-head_item-uno_section'>
                                <div>
                                    <label htmlFor='fecha' className='font-color' >Fecha</label>
                                    <input required type='date' id='fecha' name='fechaFactura' />
                                </div>
                                <div>
                                    <label className='labelVendedor' htmlFor='vendedor'>Vendedor</label>
                                    <select required name='vendedor' id='vendedor' defaultValue='' >
                                        <option disabled value=''>Elija unvendedor</option>
                                        {vendedores.map((vendedor) => {
                                            return (
                                                <option value={vendedor._id} key={nanoid()}>{vendedor.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-registro-venta_section-head_item-dos_section'>
                                <div>
                                    <label className='font-color' htmlFor='cliente'>Cliente</label>
                                    <input required type='text' id='cliente' name='nombreCliente' />
                                </div>
                                <div>
                                    <label className='font-color' htmlFor='documento'>Documento</label>
                                    <input required type='text' id='documento' name='documentoCliente' pattern='[0-9]*' />
                                </div>
                                <div>
                                    <label htmlFor="estado">Estado:</label>
                                    <select required name="estado" id='estado' defaultValue=''>
                                        <option disabled value=''>Seleccione un estado</option>
                                        <option value='enProceso'>En proceso</option>
                                        <option value='entregada'>Entregada</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *******************************************************************************************/}
                    <div className='contenedor-registro-venta'>
                        <div className='form-registro-venta_section-body_item-uno'>
                            <div >
                                <label htmlFor='codigoProducto'>Id producto</label>
                                <input required onChange={(e) => { setInputIdProducto(e.target.value) }} type='text' id='codigoProducto' name='codigoProducto ' />
                            </div>
                            <div>
                                <label htmlFor='inputCantidadProducto'>Cantidad</label>
                                <input required onChange={(e) => { setCantidadProducto(e.target.value) }} type='number' id='inputCantidadProducto' name='cantidadProducto'
                                    className='input-small' />
                            </div>
                            <div className='form-registro-venta_section-body_item-dos'>
                                <button disabled={camposProductoLlenos ? (false) : (true)} type='button' className='button-plus' onClick={() => comprobarStock(productos, inputIdProducto, inputCantidadProducto)}>
                                    <svg className='button-plus' xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'>
                                        <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* *******************************************************************************************/}
                    <div className='form-registro-venta_section-body'>
                        <TablaProductos filasTabla={filasTabla} setFilasTabla={setFilasTabla} total={total} setTotal={setTotal} />
                    </div>
                    {/* *******************************************************************************************/}
                    <div className='form-registro-venta_section-footer'>
                        <div className='form-registro-venta-total'>
                            <div className='form-registro-venta_section'>
                                <label htmlFor='totalCompra'>Total</label>
                                <input required type='number' value={total} id='totalCompra' name='totalCompra' />
                            </div>
                        </div>
                        <div className='form-registro-venta-buttons'>
                            <div>
                                <button type='reset' class='btn btn-secondary'>Cancelar</button>
                                <button type='submit' class='btn btn-primary'>Finalizar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer position='bottom-center' autoClose={3000} />
        </>
    )
}


const TablaProductos = ({ filasTabla, setFilasTabla, total, setTotal }) => {

    const eliminarProducto = (productoAEliminar) => {
        setTotal(parseInt(total - productoAEliminar.subtotal))
        setFilasTabla(filasTabla.filter(p => p._id !== productoAEliminar._id))
    }
    return (
        <div>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Valor</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                        <th className='hidden'>Input</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filasTabla.map((el, index) => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{el._id}</td>
                                    <td>{el.descripcion}</td>
                                    <td>{el.valor}</td>
                                    <td>{el.cantidad}</td>
                                    <td>{el.subtotal}</td>
                                    <td className='content-button-delete'>
                                        <button type='button' className='button-delete' onClick={() => eliminarProducto(el)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <input hidden defaultValue={el._id} name={`producto_${index}`} />
                                    <input hidden defaultValue={el.cantidad} name={`cantidad_${index}`} />
                                    <input hidden defaultValue={el.subtotal} name={`subtotal_${index}`} />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}



export default Formulario
