import TablaDescripcionventa from 'components/ventas/TablaDescripcionventa';
import React from 'react'
const datosSimulados = [
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    },
    {

        "codigoVenta":"01",
        "fecha":'01/02/2021',
        "documentoCliente":'10025232654',
        "nombreCliente":'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal":"600253",
        "codigoProducto":"01",
        "precioUnitario":'6100',
        "descripcion":'producto1',
        "cantidad":'6',
        "subtotal": "30500",
        "estado": "En proceso"
    }
];

const VentanaDescrpcionVenta = () => {
    return (
        <>
            <div>

            </div>
            <div>
                <TablaDescripcionventa datos={datosSimulados}/>
            </div>
        </>
    )
}

export default VentanaDescrpcionVenta
