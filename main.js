let habilidadEl = document.querySelector("#ability");
let nombreEl = document.querySelector("#name");
let movimientoEl = document.querySelector("#movement");
let ordenEl = document.querySelector("#order");
let pokeImgEl = document.querySelector("#pokemon-img");
let typeEl = document.querySelector("#type");
let pokeAudioEl = document.querySelector("#pokemon-audio");

let buscarRandomEl = document.querySelector("#buscarRandom");
let buscarIdEl = document.querySelector("#buscarId");

let favIcon = document.querySelector("#fav-icon");

let actualData = [];

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
    actualData = data;
    console.log(actualData, "actual");
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
    pokeAudioEl.src = `./assets/cries/${data.id}.ogg`
    pokeAudioEl.play();
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
        actualData = data;
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


const favContainer = document.getElementById('favorites-container');

favIcon.addEventListener("click", handleAddFavorites);

let favorites = [];


function handleAddFavorites() {
    if (actualData.length !== 0) {
        const isStore = favorites.some(pokemon => pokemon.id === actualData.id);

        if (!isStore) {
            console.log(actualData, "actual")
            console.log("pusheado");
            favorites.push(actualData);
            addFavorite();
        }
        console.log("test");
        console.log(favorites);
    }

}

function addFavorite() {
    const li = document.createElement('li');
    const nameParagraph = document.createElement('div');
    nameParagraph.classList.add('nameParagraph');
    const orderParagraph = document.createElement('div');
    orderParagraph.classList.add('orderParagraph');
    const img = document.createElement('img');

    nameParagraph.innerHTML = `${actualData.name}`;
    orderParagraph.innerHTML = `${actualData.order}`;

    favContainer.appendChild(li);

    img.src = actualData.sprites.front_default;

    li.appendChild(img);
    li.appendChild(nameParagraph);
    li.appendChild(orderParagraph);
    
}


