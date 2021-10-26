import React from 'react'
import "styles/productos/ProductoN.css"

const ProductoNuevo = () => {
    return (
        <div>
            <h2 className="titulo1">PRODUCTO</h2>
            
            <section className="form-ventas">
           
                <form action="#">
                    <h3 className="titulo2">ID: <span>000</span></h3>
                    <label for="descripción">Descripción del producto</label>
                    <input type="text" name="descripción" id="descripción" placeholder="Escriba la descripción del producto" />
                    <label for="valor">Valor Unitario</label>
                    <input type="number" name="valor" id="valor" placeholder="Valor Unitario" />
                    

                    <label for="estados">Estado</label>
                    <select class="seleccionar" name="estados" id="estados">
                        <option value="pendiente">Disponible</option>
                        <option value="autorizado">No Disponible</option>

                    </select>
                    <input class="button" type="submit" value="Enviar" onClick="alert"/>
                </form>
            </section>            
        </div>
    )
}

export default ProductoNuevo
