document.addEventListener('DOMContentLoaded', () => {
    cargarPersonajes();
});

function cargarPersonajes() {

    const listaPersonajes = document.getElementById('listaPersonajes');

    fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(datos => {

            listaPersonajes.innerHTML = '';

            datos.results.forEach(personaje => {

                const tarjetaPersonaje = document.createElement('div');
                tarjetaPersonaje.classList.add('card');

                tarjetaPersonaje.innerHTML = `
                    <img src="${personaje.image}" alt="${personaje.name}">

                    <div class="info">
                        <h2>${personaje.name}</h2>

                        <p><strong>Status:</strong> ${personaje.status}</p>

                        <p><strong>Species:</strong> ${personaje.species}</p>

                        <p><strong>Gender:</strong> ${personaje.gender}</p>

                        <p><strong>Origin:</strong> ${personaje.origin.name}</p>
                    </div>
                `;

                listaPersonajes.appendChild(tarjetaPersonaje);

            });

        })
        .catch(error => console.log(error));
}