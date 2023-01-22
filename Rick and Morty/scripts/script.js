const urlEpisode = "https://rickandmortyapi.com/api/episode/";
const url = "https://rickandmortyapi.com/api/episode/";

const clearContent = () => {
  document.querySelector(".ep-content").innerHTML = "";
  document.querySelector(".char-content").innerHTML = "";
  document.querySelector(".loc-content").innerHTML = "";
};

const renderAllEpisodesNav = (data) => {
  //console.log(data);
  data.results.forEach((episode) => {
    let _li = document.createElement("li");
    _li.classList.add(`episode-${episode.id}`, "list-group-item");
    _li.innerHTML = `<button class="btn btn-link">Episode ${episode.id}</button>`;
    document.querySelector(".nav-list").appendChild(_li);

    document.querySelector(`.episode-${episode.id}`).onclick = () => {
      clearContent();
      renderEpisodeContent(episode);
    };
  });
};

const renderCharacter = (data) => {
  console.log(data);
  const _img = document.createElement("div");
  _img.classList.add(`character-${data.id}`, "col-2");
  _img.innerHTML = `<img class="card-img-top" src="${data.image}" alt="${data.name}">`;

  const _data = document.createElement("div");
  _data.classList.add("data-character", "col-10");
  _data.innerHTML = `<h5 class="card-title"><strong>${data.name}</strong></h5> 
       <h5>${data.species} | ${data.status}</h5>`;


  const inf = document.querySelector(".ep-content");
  inf.appendChild(_img);
  inf.appendChild(_data);
  const crt = document.querySelector(`.character-${data.id}`);
    crt.style.width = 15 + "rem";
};

const renderCharacters = (data) => {
  data.forEach(async (elem, i) => {
    const character = await getAPI(elem);

    const card = document.createElement("div");
    card.classList.add(`character-${character.id}`, "card", "col-auto");
    card.innerHTML = `
     <img class="card-img-top" src="${character.image}" alt="${character.name}"> 
     <div class="card-body"> 
       <h5 class="card-title"><strong>${character.name}</strong></h5> 
       <h5>${character.species} | ${character.status}</h5>
     </div>`;

    document.querySelector(".char-content").appendChild(card);
    const crt = document.querySelector(`.character-${character.id}`);
    crt.style.width = 15 + "rem";
    crt.onclick = () => {
      clearContent();
      renderCharacter(character);
    };
  });
};

const renderEpisodeContent = (episode) => {
  const _div = document.createElement("div");
  _div.classList.add("content");
  _div.innerHTML = `<h3><strong>Episode ${episode.id}</strong> ${episode.name}</h3> <h5>${episode.air_date} | ${episode.episode}</h5>`;
  document.querySelector(".ep-content").appendChild(_div);

  renderCharacters(episode.characters);
};

const renderAlert = () => {};

const getAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllEpisodes = async () => {
  const data = await getAPI(urlEpisode);
  renderEpisodeContent(data.results[0]); // metodo por defecto para visualizar
  renderAllEpisodesNav(data);
};

window.onload = () => {
  getAllEpisodes();
};
