//const { response } = require("express");

const postPokemon = () => {
    const newPokemon = {
        name: document.getElementById("name").value, //coge el valor que se pone dentro de los elementos
        type: document.getElementById("type").value,
    };

    const urlApi = `http://localhost:1010/api/pokemons`; //si es por query aquideb añadirse ?name=${name}?type

    const options = {
        //se puede especificar el metodo
        method: "POST", // get o put
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPokemon), //
    };

    fetch(urlApi, options) // si hago un fetch sin opciones la llamada sera GET por default
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //responder si ha ido bien o mal
            console.log(data);
            alert(`Pokemon añadido :${data.newPokemon.id}`);
            document.getElementById("name").value = "";
            document.getElementById("type").value = "";
        })
        .catch((err) => {
            console.error(err);
        });
};