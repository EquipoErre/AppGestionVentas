import React from 'react'

const Tabla = ({datos}) => {
    return (
        <>
            <table class="table">
                <thead class="table-dark table-edit" >
                    <tr>
                        <td>Codigo</td>
                        <td>fecha</td>
                        <td>Documento cliente</td>
                        <td>Nombre cliente</td>
                        <td>Vendedor</td>
                        <td>Valor total</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((dato) => {
                            return(
                            <tr>
                                <td>{dato.id}</td>
                                <td>{dato.id}</td>
                                <td>{dato.id}</td>
                                <td>{dato.id}</td>
                                <td>{dato.id}</td>
                                <td>{dato.id}</td>
                            </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Tabla
