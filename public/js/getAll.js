// const { response } = require("express");
//listado llamando el api
const getAll = () => {
    const URI_Heroku = "https://poke-forms.herokuapp.com";
    const urlApi = `${URI_Heroku}/api/pokemons`; // SE USA EL ENDPOINT DE POSTMAN en este caso el GET general

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // deberemos rellenar el ul con li por cada pokemon
            const ulPokemon = document.querySelector("#ulPokemons");
            ulPokemon.innerHTML = ""; //se limpia todo el contenido previo de li
            data.pokemons.forEach((pokemon) => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(pokemon.name)); // ponemos el name
                li.className = "list-group-item"; // añadimos la clase
                ulPokemon.appendChild(li); // añadimos li con ul
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

getAll();