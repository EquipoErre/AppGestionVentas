import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
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
      setUser(response.data)
      console.log('response cargado');
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