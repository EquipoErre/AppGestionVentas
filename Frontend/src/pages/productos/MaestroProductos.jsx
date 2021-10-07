import React from 'react'
import "styles/productos/Productos.css"
import { Link } from 'react-router-dom';

const MaestroProductos = () => {
    return (
    <div>
        <h2 className="titulo1">MAESTRO DE PRODUCTOS</h2>
        <main>
            <section className="buscador">
                <Link to= '/productoNuevo'>
                <button className="btn btn-primary " type="submit">Nuevo</button>
                </Link>
                <select name="busqueda-producto" id="producto">
                <option value="id">ID</option>
                <option value="nombre">DESCRIPCIÓN</option>
                </select>
            <input type="text" placeholder="Buscar..."/>
            <button class="btn btn-primary col-2" type="submit">Buscar</button>
    
            </section>

            <section className="tabla-productos">
            <table className="table table-striped ">
                <thead className="thead-dark">
                    <th className="col-1">ID PRODUCTO</th>
                    <th className="col-2">DESCRIPCIÓN</th>
                    <th className="col-2">VALOR UNITARIO</th>
                    <th className="col-2">ESTADO</th>
                    <th className="col-1">OPCIONES</th>
                </thead>
    
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Camisa</td>
                    <td>$ 80.000</td>
                    <td>Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/productoNuevo'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>002</td>
                    <td>Camiseta</td>
                    <td>$ 60.000</td>
                    <td>Disponible</td>
                    <td>
                    <div class="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                   
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>003</td>
                    <td>Pantalon</td>
                    <td>$ 100.000</td>
                    <td>No Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                  
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>004</td>
                    <td>Pantaloneta</td>
                    <td>$ 45.000</td>
                    <td>Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>                                    
                    </div>
                    </td>   
                </tr>
                <tr>
                    <td>005</td>
                    <td>Chaqueta</td>
                    <td>$ 160.000</td>
                    <td>Disponible</td>
                    <td>
                    <div className="dropdown text-center">
                    <Link to= '/nuevosProductos'>
                        <button className="btn-primary" type="submit">Actualizar</button> 
                    </Link>
                    </div>
                    </td>   
                    </tr>                        
            </tbody>
            </table>
            </section>
        </main>

        {/* function producto(id, descrip,valor, estado) {
            var product =(
                <> 
                <td>{id}</td>
                <td>{descrip}</td>
                <td>{valor}</td>
                <td>{estado}</td>
                <td>
                    <div class="dropdown text-center">
                        <button className="btn-primary" type="submit">Actualizar</button>                                    
                    </div>
                </td>
                </>);
            return product;            
        } */}

    </div>
    )
}

export default MaestroProductos
