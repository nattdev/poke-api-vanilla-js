
let habilidadEl = document.querySelector("#ability");
let nombreEl = document.querySelector("#name");
let movimientoEl = document.querySelector("#movement");
let ordenEl = document.querySelector("#order");
let pokeImgEl = document.querySelector("#pokemon-img");
let typeEl = document.querySelector("#type");


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
    typeEl.innerHTML = data.types[0].type.name;
    ordenEl.innerHTML = data.id;
    pokeImgEl.src = data.sprites.front_default;
}

async function buscarId() {

    const id = (document.querySelector("#idpoke").value).toLowerCase();

    console.log(id);

    if (id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        let random_num = Math.floor(Math.random() * data.abilities.length);
        console.log(data.name);
        console.log(data);
        habilidad = data.abilities[random_num].ability.name;
        putData(data);
    } else {
        console.log(id, "No hay id");
    }
}

buscarRandomEl.addEventListener("click", buscar);
buscarIdEl.addEventListener("click", buscarId);

let pokeContainer = document.querySelector(".poke-container");
let pokeLeftFlip = document.querySelector(".poke-left-flip");
let disabledCard = document.querySelector(".disabled-card");

pokeContainer.addEventListener("click", openContainer);

function openContainer() {
    disabledCard.classList.toggle("showing-card");
    if (pokeContainer.classList.contains('open')) {
        pokeContainer.classList.add('close-pokedex');
        pokeLeftFlip.classList.add('close-left-flip');
        pokeContainer.classList.remove('open');
        pokeImgEl.style.display = "none";
    } else {
        pokeContainer.classList.remove('close-pokedex');
        pokeLeftFlip.classList.remove('close-left-flip');
        pokeContainer.classList.add('open', 'open-pokedex');
        pokeLeftFlip.classList.add('open-left-flip');
        setTimeout(() => {
            pokeImgEl.style.display = "initial";
        }, 1800);
    }
}

