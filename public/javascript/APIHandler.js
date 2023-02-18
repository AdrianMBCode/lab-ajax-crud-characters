class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(`${this.BASE_URL}/characters`)
    .then((response) => {
      console.log("data:", response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  }

   getOneRegister (id) {
    return axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then((response) => {
      console.log("data:", response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  
  }

  createOneRegister ({ name, occupation, cartoon, weapon }) {
    return axios
      .post(`${this.BASE_URL}/characters`, { name, occupation, cartoon, weapon })
      .then((response) => {
        console.log("data:", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));

  }

  updateOneRegister () {
    return axios
      .patch(`${this.BASE_URL}/characters/${id}`, { name, occupation, cartoon, weapon })
      .then((response) => {
        console.log("data:", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));

  }

  deleteOneRegister () {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        console.log("data:", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));

  }
}
