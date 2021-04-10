const getPokemonpage = (page = 1) => {
    const urlApi = `http://localhost:1010/api/pokemons/page/${page}`;

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            //Rellenamos el ul de listado de pokemon
            const ulPokemons = document.getElementById("ulPokemons");
            ulPokemons.innerHTML = "";
            data.pokemons.forEach((pokemon) => {
                //data.pokemons como esta llamado el valor en mi objeto
                const li = document.createElement("li");
                li.innerText = pokemon.name; //ponemos el name
                li.className = "list-group-item"; // añadimos la clase
                ulPokemons.appendChild(li);
            });

            //Rellenar el navegador de paginado
            const ulPaginado = document.getElementById("ulPagination");
            ulPaginado.innerHTML = "";

            for (i = 1; i <= data.numPages; i++) {
                //sale del api se debe declarar numPages
                //creamos el li del nav
                const li = document.createElement("li");
                li.className = "page-item";
                if (parseInt(page) === i) li.classList.add("active");

                //creamos a  del li
                const a = document.createElement("a");

                a.id = i;
                a.innerText = i;
                a.className = "page-link";

                a.addEventListener("click", (event) => {
                    getPokemonpage(event.target.id);
                });

                //añadimos elementos a sus correspondientes padres
                li.appendChild(a);
                ulPaginado.appendChild(li);
            }
        })
        .catch((err) => {
            console.error(err);
        });
};

getPokemonpage();