
let habilidadEl = document.querySelector("#ability");
let nombreEl = document.querySelector("#name");
let movimientoEl = document.querySelector("#movement");
let ordenEl = document.querySelector("#order");
let imgEl = document.querySelector("#pokemon-img");

let buscarRandomEl = document.querySelector("#buscarRandom");
let buscarIdEl = document.querySelector("#buscarId");

async function buscar() {
    let random_id = Math.floor(Math.random() * 150);
    console.log(random_id);
    let url = `https://pokeapi.co/api/v2/pokemon/${random_id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.name);
    console.log(data);
    habilidad = data.abilities[1].ability.name;
    putData(data);
}

function putData(data) {
    habilidadEl.innerHTML = habilidad;
    nombreEl.innerHTML = data.name;
    let random_num = Math.floor(Math.random() * data.moves.length);
    console.log(data.moves[random_num].move.name)
    movimientoEl.innerHTML = data.moves[random_num].move.name;
    ordenEl.innerHTML = data.id;
    imgEl.src = data.sprites.front_default;
}

async function buscarId() {

    const id = document.querySelector("#idpoke").value;

    if (id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        let random_num = Math.floor(Math.random() * data.abilities.length);
        console.log(data.name);
        console.log(data);
        habilidad = data.abilities[random_num].ability.name;
        putData(data);
    }
    console.log(id, "No hay id");
}

buscarRandomEl.addEventListener("click", buscar);
buscarIdEl.addEventListener("click", buscarId);

let pokeContainer = document.querySelector(".poke-container");
let pokeLeftFlip = document.querySelector(".poke-left-flip");

pokeContainer.addEventListener("click", openContainer);

let isZoom = false;

function openContainer() {
    pokeContainer.classList.add("open-pokedex");
    pokeLeftFlip.classList.add("open-left-flip");
}

console.log(habilidadEl.innerHTML);