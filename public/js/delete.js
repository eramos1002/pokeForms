const getAllPokemons = () => {
    const urlApi = `http://localhost:1010/api/pokemons`; // SE USA EL ENDPOINT DE POSTMAN en este caso el GET general

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const ulPokemon = document.querySelector("#ulPokemons");
            ulPokemon.innerHTML = "";
            data.pokemons.forEach((pokemon) => {
                const li = document.createElement("li"); //creamos el li

                li.innerText = pokemon.name; //ponemos el name
                li.className = "list-group-item"; // añadimos la clase

                //creamos el boton de borrado
                const button = document.createElement("button");
                button.type = "button";
                button.innerText = "Borrar";
                button.className = "btn btn-danger float-right";
                button.id = pokemon.id;
                //Añado el evento click del boton
                button.addEventListener("click", (event) => {
                    deletePokemon(event.currentTarget.id);
                });
                li.appendChild(button); // añadimos el boton a cada li
                ulPokemon.appendChild(li); // añadimos li con ul
            });
        })
        .catch((err) => {
            console.error(err);
        });
};

const deletePokemon = (id) => {
    const urlApi = `http://localhost:1010/api/pokemons`;
    let obj = { id: id };
    const options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    };

    fetch(urlApi, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            alert(`Pokemon eliminado:${obj.id}`);
            getAllPokemons(); // llama nuevamente a la funcion para actualizarlo
        })
        .catch((err) => console.error(err));
};
getAllPokemons();