import React, {useEffect, useState, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Select, Tooltip } from '@material-ui/core';
import { obtenerProductos, crearProducto, editarProducto} from 'utils/api';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import "styles/productos/Product.css"
import { Link } from 'react-router-dom';

const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Producto');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchProductos = async () => {
        setLoading(true);
        await obtenerProductos(
          (response) => {
            console.log('la respuesta fue', response);
            setProductos(response.data);
            setEjecutarConsulta(false);
            setLoading(false);
          },
          (error) => {
            console.error('Salio un error:', error);
            setLoading(false);
          }
        );
      };
      console.log('Consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
        fetchProductos();
      }
    }, [ejecutarConsulta]);
  
  useEffect(() => {
        //obtener lista de productos desde el backend
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
      }, [mostrarTabla]);
    
  useEffect(() => {
        if (mostrarTabla) {
           setTextoBoton('Crear Nuevo Producto');
                  
        } else {
          setTextoBoton('Mostrar Productos');
        }
  }, [mostrarTabla]);

  return (
      <div>
      <h2 className="titulo1">MAESTRO DE PRODUCTOS</h2>
          <button onClick={() => {
              setMostrarTabla(!mostrarTabla);
              }} 
              className="contenedor-buscador btn btn-primary boton-crear" type="submit"> {textoBoton}
              </button>
              {mostrarTabla ? (
        <TablaProductos
          loading={loading}
          listaProductos={productos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
      </div>
  );
};

const TablaProductos = ({ loading, listaProductos, setEjecutarConsulta}) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div>
    <section className="buscador-producto buscador ">
          <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
           type="text" placeholder="Buscar..."/>
    </section>
  
          <div>
            <section className="contenedor-maestro-productos tabla-productos">
            <table className="table table-striped ">
                <thead className="thead-dark">
                    <th className="col-1">Id Producto</th>
                    <th className="col-3">Descripción</th>
                    <th className="col-2">Valor Unitario</th>
                    <th className="col-2">Estado</th>
                    <th className="col-1">Opciones</th>
                </thead>
                <tbody>
                {productosFiltrados.map((producto) => {
                return (
                    <FilaProducto
                    key={nanoid()}
                    producto={producto}
                    setEjecutarConsulta={setEjecutarConsulta}
                    />
                  );
                  })}
                </tbody>
            </table>
            </section>
  )
  </div> </div>
);
};

const FilaProducto = ({producto, setEjecutarConsulta}) => {
  const [edita, setEdita] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    descripcion: producto.descripcion,
    valor: producto.valor,
    estado: producto.estado,
  });

 
  const actualizarProducto = async () => {
    //enviar la info al backend
    await editarProducto(
      producto._id,
      {
        descripcion: infoNuevoProducto.descripcion,
        valor: infoNuevoProducto.valor,
        estado: infoNuevoProducto.estado,        
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdita(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error al modificar');
        console.error(error);
      }
    );
  };

  
  return (
    <tr>
      {edita? (
        <>
          <td>{infoNuevoProducto._id.slice(20)}</td>
          <td>
          <input className="btn btn-outline-primary btn-sm" type='text'
              value={infoNuevoProducto.descripcion}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion: e.target.value})}
            />
          </td>
          <td>
            <input className="btn btn-outline-primary btn-sm" type='number'
              value={infoNuevoProducto.valor}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, valor: e.target.value})
              }
            />
          </td>
        
        <td>
        <input className="btn btn-outline-primary btn-sm" type='text'
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value})
              }
            />
      </td>
          <td>
            <button className="btn btn-success btn-sm" type="button"
              onClick={() => actualizarProducto()}>Aceptar</button>
            <button className="btn btn-danger btn-sm" type="button"
              onClick={(e) => {setEdita(!edita)}}>x</button>
          </td>
        </>

        ) : (
          <>
            <td>{producto._id.slice(20)}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valor}</td>
            <td>{producto.estado==="true" ? (
              <span> Disponible </span>
              ):(
              <span>No disponible</span>
              ) }</td>
            
            <td>
            <div>                
                <button className="btn btn-success btn-sm" type="button"
                onClick={(e) => {setEdita(!edita)}}>Editar</button> 
                
              </div> 
            </td>            
          </>
        )}        
    </tr>
  );
}

const FormularioCreacionProductos = ({setMostrarTabla, listaProductos, setProductos}) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    await crearProducto(
      {
        descripcion: nuevoProducto.descripcion,
        valor: nuevoProducto.valor,
        estado: nuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );
    setMostrarTabla(true);
  };

  return (
    <div>
      <h2 className="titulo2"></h2>
      <section className="form-productoNuevo">
      <form ref={form} onSubmit={submitForm}>
      <h4 className="titulo2">PRODUCTO</h4>
        <label htmlFor='descripcion'>
          Descripcion Producto
          <input name='descripcion'
            type='text'
            placeholder='Camisa'
            required/>
          </label>

          <label htmlFor='valor'>
          Valor Unitario
          <input name='valor'
            type='number'
            placeholder='10000'
            required >
          </input>
        </label>

        <label htmlFor="estado">
          Estado
        </label>
        <select className="seleccion" name="estado" required>
            <option value="true">Disponible</option>
            <option value="false">No Disponible</option>
        </select>

         <button type='submit' className="btn btn-primary btnguardar">
          Guardar Producto
        </button>
      </form>
      </section> 
    </div>
  );
};
export default Productos