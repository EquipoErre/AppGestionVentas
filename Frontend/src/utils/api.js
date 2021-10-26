import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  // obtener el dato del usuario actual
  const options = {
    method: "GET",
    url: "http://localhost:5000/usuarios/self",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUsuarios = async (setUsuarios) => {
  const options = { method: "GET", url: "http://localhost:5000/usuarios/",
  headers: {
    Authorization: getToken(),
  }, };

  await axios
    .request(options)
    .then(function (response) {
      // console.log(response.data)
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const patchUsuarios = (id, data) => {
  var options = {
    method: "PATCH",
    url: `http://localhost:5000/usuarios/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken()  },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {})
    .catch(function (error) {
      console.error(error);
    });
};

export const getOneUser = async (id, setUser) => {
  const options = {
    method: "GET",
    url: `http://localhost:5000/usuarios/${id}`, 
    headers: {
      Authorization: getToken(),
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      setUser(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteUser = (id, onChange) => {
  var options = {
    method: "DELETE",
    url: `http://localhost:5000/usuarios/${id}`,  
    headers: {
      Authorization: getToken(),
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      onChange(true);
    })
    .catch(function (error) {
      console.error(error);
    });
    
};


export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas/nuevo',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (setVentas) => {
  const options = {
    method: "GET", url: "http://localhost:5000/ventas/", headers: {
    Authorization: getToken(),
  },
 };

  await axios
    .request(options)
    .then(function (response) {
      // console.log(response.data)
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};


export const getOneSale = async (id, setSale) => {
  const options = {
    method: "GET",
    url: `http://localhost:5000/ventas/${id}`, 
    headers: {
      Authorization: getToken(),
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      setSale(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const patchVentas = (id, data) => {
  var options = {
    method: "PATCH",
    url: `http://localhost:5000/ventas/${id}`,
    headers: { "Content-Type": "application/json", Authorization: getToken()  },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {})
    .catch(function (error) {
      console.error(error);
    });
};

// export const obtenerVentas = async (successCallback, errorCallback) => {
//   const options = {
//     method: 'GET',
//     url: 'http://localhost:5000/ventas/',
//     headers: {
//       Authorization: getToken(),
//     },
//   };
//   await axios.request(options).then(successCallback).catch(errorCallback);
//   };


export const obtenerProductos = async (setProductos) => {
  const options = {
    method: "GET", url: "http://localhost:5000/productos/", headers: {
    Authorization: getToken(),
  },
 };

  await axios
    .request(options)
    .then(function (response) {
      // console.log(response.data)
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};



export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productos/nuevo/',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/productos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
