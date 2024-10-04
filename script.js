function start(){
    var ultimo = 0
    buscarTodos(ultimo)
}

async function buscarTodos(ultimo){
    var urlAPI = `https://pokeapi.co/api/v2/pokemon`;
    var res = await fetch(urlAPI).then(resposta => {return resposta.json()});

    var cards = document.getElementById('cards');

    var card = '';
    cards.innerHTML = '<h1 id="msgLoad">CARREGANDO! AGUARDE!</h1>';
    for(i = 0; i < res.results.length; i++){
        ultimo += 1
        card += `<div class="col-lg-4">
                <div class="card mt-3">
                    <h2>${ultimo}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ultimo}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">${res.results[i].name.toUpperCase()}</h2>
                      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%"></div>
                      </div>`
                    var res1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + ultimo).then(resposta => {return resposta.json()});
                    card += `<h3 class="hp">HP ${res1.stats[0].base_stat}</h3>`
                    for(i2 = 0; i2 < res1.types.length; i2++){
                        var link = res1.types[i2].type.url
                        var res2 = await fetch(link).then(resposta => {return resposta.json()});
                        var id = res2.id
                        card += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png" id="imgType">`
                    }
                    card += `<form>
                                <h5>Attack</h5>
                                <progress value="${res1.stats[1].base_stat}" max="100"></progress>
                                <h6>${res1.stats[1].base_stat}</h6><br>

                                <h5>Defense</h5>
                                <progress value="${res1.stats[2].base_stat}" max="100"></progress>
                                <h6>${res1.stats[2].base_stat}</h6><br>

                                <h5>Speed</h5>
                                <progress value="${res1.stats[5].base_stat}" max="100"></progress>
                                <h6>${res1.stats[5].base_stat}</h6><br>
                            </form>
                    </div>
                  </div>
            </div>`
    }

    cards.innerHTML = card;
    cards.innerHTML += `<a href="#cards"><button id="btn-card" onclick="verMais('${urlAPI}', ${ultimo})">Próximo!</button></a>`;
}

async function verMais(url, ultimo){
    var res = await fetch(url).then(resposta => {return resposta.json()});
    var url2 = res.next
    var res3 = await fetch(url2).then(resposta => {return resposta.json()});

    var cards = document.getElementById('cards');

    var card = '';
    cards.innerHTML = '<h1 id="msgLoad">CARREGANDO! AGUARDE!</h1>';
    for(i = 0; i < res3.results.length; i++){
        ultimo += 1
        card += `<div class="col-lg-4">
                <div class="card mt-3">
                    <h2>${ultimo}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ultimo}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">${res3.results[i].name.toUpperCase()}</h2>
                      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%"></div>
                      </div>`
                    var res1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + ultimo).then(resposta => {return resposta.json()});
                    card += `<h3 class="hp">HP ${res1.stats[0].base_stat}</h3>`
                    for(i2 = 0; i2 < res1.types.length; i2++){
                        var link = res1.types[i2].type.url
                        var res2 = await fetch(link).then(resposta => {return resposta.json()});
                        var id = res2.id
                        card += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png" id="imgType">`
                    }
                    card += `<form>
                                <h5>Attack</h5>
                                <progress value="${res1.stats[1].base_stat}" max="100"></progress>
                                <h6>${res1.stats[1].base_stat}</h6><br>

                                <h5>Defense</h5>
                                <progress value="${res1.stats[2].base_stat}" max="100"></progress>
                                <h6>${res1.stats[2].base_stat}</h6><br>

                                <h5>Speed</h5>
                                <progress value="${res1.stats[5].base_stat}" max="100"></progress>
                                <h6>${res1.stats[5].base_stat}</h6><br>
                            </form>
                    </div>
                  </div>
            </div>`
    }

    cards.innerHTML = card;
    cards.innerHTML += `<a href="#cards">`
                            if(ultimo != 20){
                                cards.innerHTML += `<button id="btn-card" onclick="verAntes('${url2}', ${ultimo})">Antes!</button>`
                            }
                            cards.innerHTML += `<button id="btn-card" onclick="verMais('${url2}', ${ultimo})">Próximo!</button>
                        </a>`;
}

async function verAntes(url, ultimo){
    ultimo = ultimo - 40
    var res = await fetch(url).then(resposta => {return resposta.json()});
    var url2 = res.previous
    var res3 = await fetch(url2).then(resposta => {return resposta.json()});

    var cards = document.getElementById('cards');

    var card = '';
    cards.innerHTML = '<h1 id="msgLoad">CARREGANDO! AGUARDE!</h1>';
    for(i = 0; i < res3.results.length; i++){
        ultimo += 1
        card += `<div class="col-lg-4">
                <div class="card mt-3">
                    <h2>${ultimo}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ultimo}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">${res3.results[i].name.toUpperCase()}</h2>
                      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%"></div>
                      </div>`
                    var res1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + ultimo).then(resposta => {return resposta.json()});
                    card += `<h3 class="hp">HP ${res1.stats[0].base_stat}</h3>`
                    for(i2 = 0; i2 < res1.types.length; i2++){
                        var link = res1.types[i2].type.url
                        var res2 = await fetch(link).then(resposta => {return resposta.json()});
                        var id = res2.id
                        card += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png" id="imgType">`
                    }
                    card += `<form>
                                <h5>Attack</h5>
                                <progress value="${res1.stats[1].base_stat}" max="100"></progress>
                                <h6>${res1.stats[1].base_stat}</h6><br>

                                <h5>Defense</h5>
                                <progress value="${res1.stats[2].base_stat}" max="100"></progress>
                                <h6>${res1.stats[2].base_stat}</h6><br>

                                <h5>Speed</h5>
                                <progress value="${res1.stats[5].base_stat}" max="100"></progress>
                                <h6>${res1.stats[5].base_stat}</h6><br>
                            </form>
                    </div>
                  </div>
            </div>`
    }

    cards.innerHTML = card;
    cards.innerHTML += `<a href="#cards">`
                            if(ultimo != 20){
                                cards.innerHTML += `<button id="btn-card" onclick="verAntes('${url2}', ${ultimo})">Antes!</button>`
                            }
                            cards.innerHTML += `<button id="btn-card" onclick="verMais('${url2}', ${ultimo})">Próximo!</button>
                        </a>`;
}

document.getElementById('pesquisaInput').addEventListener('keydown', function(event) {
    if(event.key == 'Enter'){
        pesquisarPokemon();
    }
    
  });

async function pesquisarPokemon(){

    var input = document.getElementById('pesquisaInput')
    var nomeId = input.value

    if(nomeId == ''){
        buscarTodos(0);
    } else{
        var urlAPI = `https://pokeapi.co/api/v2/pokemon/${nomeId.toLowerCase()}`;
    var res = await fetch(urlAPI).then(resposta => {return resposta.json()});

    var cards = document.getElementById('cards');

    var card = '';
    cards.innerHTML = '<h1 id="msgLoad">CARREGANDO! AGUARDE!</h1>';

    card += `<div class="col-lg-4">
                <div class="card mt-3">
                    <h2>${res.id}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">${res.forms[0].name.toUpperCase()}</h2>
                      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%"></div>
                      </div>
                    <h3 class="hp">HP ${res.stats[0].base_stat}</h3>`
                    for(i2 = 0; i2 < res.types.length; i2++){
                        var link = res.types[i2].type.url
                        var res2 = await fetch(link).then(resposta => {return resposta.json()});
                        var id = res2.id
                        card += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png" id="imgType">`
                    }
                    card += `<form>
                                <h5>Attack</h5>
                                <progress value="${res.stats[1].base_stat}" max="100"></progress>
                                <h6>${res.stats[1].base_stat}</h6><br>

                                <h5>Defense</h5>
                                <progress value="${res.stats[2].base_stat}" max="100"></progress>
                                <h6>${res.stats[2].base_stat}</h6><br>

                                <h5>Speed</h5>
                                <progress value="${res.stats[5].base_stat}" max="100"></progress>
                                <h6>${res.stats[5].base_stat}</h6><br>
                            </form>
                    </div>
                  </div>
            </div>`
        
    cards.innerHTML = card;
    }

    
}