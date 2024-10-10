async function start(){
    var header = document.getElementById('header')

    for(i = 1; i <= 18; i++){
        header.innerHTML += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${i}.png"
                             id="imgHeaderType" onclick="buscarTipo(${i})">`
    }

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
    inserirLog('Mudando de Página', 'Próxima')
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
    inserirLog('Mudando de Página', 'Anterior')
}

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
        inserirLog('Buscar Pokemon', res.forms[0].name.toUpperCase())
    }  
}

async function buscarTipo(tipo){
    var urlAPI = `https://pokeapi.co/api/v2/type/${tipo}`;
    var res = await fetch(urlAPI).then(resposta => {return resposta.json()});

    var cards = document.getElementById('cards');

    var card = '';
    cards.innerHTML = '<h1 id="msgLoad">CARREGANDO! AGUARDE!</h1>';
    for(i = 0; i < res.pokemon.length; i++){
        var res1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + res.pokemon[i].pokemon.name).then(resposta => {return resposta.json()});
        card += `<div class="col-lg-4">
                <div class="card mt-3">
                    <h2>${res1.id}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res1.id}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">${res.pokemon[i].pokemon.name.toUpperCase()}</h2>
                      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%"></div>
                      </div>`
                    
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
    inserirLog('Buscar por Tipo', res.pokemon.length)
}

async function inserirLog(metodo, resultado){
    await fetch(`https://www.piway.com.br/unoesc/api/inserir/log/328401/PokeAPI/${metodo}/${resultado}`).then(resposta => {return resposta.json()});
}

async function ExcluirLog(id){
    await fetch(`https://www.piway.com.br/unoesc/api/excluir/log/${id}/aluno/328401`).then(resposta => {return resposta.json()});
    exibirLogs()
}

async function exibirLogs(){
    var res = await fetch(`https://www.piway.com.br/unoesc/api/logs/328401`).then(resposta => {return resposta.json()});
    var modal = document.getElementById('tabela')

    modal.innerHTML = ''
    for(i = 0; i < res.length; i++){
        modal.innerHTML += `<tr class="tr-table">
                          <td>${res[i].idlog}</td>
                          <td>${res[i].log}</td>
                          <td>${res[i].api}</td>
                          <td>${res[i].metodo}</td>
                          <td>${res[i].resultado}</td>
                          <td><button id="btn-table" onclick="ExcluirLog(${res[i].idlog})">Excluir</button></td>
                      </tr>`
    }
}