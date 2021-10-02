import React from 'react'

const Formulario = () => {
    return (
        <div>
            soy el formulario
            <form action="">
                <h2>REGISTRO DE VENTA</h2>
                <div>
                    <div>
                        <label htmlFor="fecha">fecha</label>
                        <input type="date" id="fecha" name="fechaFactura"/>                        
                    </div>
                    <div>
                        <label htmlFor="codigoFactura">Codigo</label>
                        <input type="text" name="codigoFactura" id="codigoFactura" />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="cliente">Cliente</label>
                        <input type="text" id="cliente" name="nombreCliente" />
                    </div>
                    <div>
                        <label htmlFor="documento">Documento</label>
                        <input type="text" id="documento" name="documentoCliente" />
                    </div>
                    <div>
                    <label htmlFor="vendedor">Vendedor</label>
                        <select name="vendedor" id="vendedor" required>
                            <option value="">Elija unvendedor</option>
                            <option value="01">Andres castro</option>
                            <option value="02">Sandra Ocampo</option>
                            <option value="03">Juana castro</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="codigoProducto">Codigo producto</label>
                            <input type="number" id="codigoProducto" name="codigoProducto"/>
                        </div>
                        <div>
                            <label htmlFor="cantidadProducto">Cantidad</label>
                            <input type="number" id="cantidadProducto" name="cantidadProducto"/>
                        </div>
                        <div>
                            <label htmlFor="descripcionProducto">Descripcion</label>
                            <input type="text" id="descripcionProducto" name="descripcionProducto"/>
                        </div>
                        <div>
                            <label htmlFor="precioProducto">Precio Unitario</label>
                            <input type="number" id="precioProducto" name="precioProducto"/>
                        </div>
                        <div>
                            <label htmlFor="subtotal">Subtotal</label>
                            <input type="number" id="subtotal" name="subtotal"/>
                        </div>
                    </div>       
                    <div>
                        <div>
                            <label htmlFor="totalCompra">Total</label>
                            <input type="number" disabled placeholder="000000" id="totalCompra" name="totalCompra" />
                        </div>
                    </div>
                    <div>
                        <button type="reset">Cancelar</button>
                        <button type="submit">Finalizar</button>
                    </div>             
                </div>
            </form>
        </div>
    )
}

export default Formulario
