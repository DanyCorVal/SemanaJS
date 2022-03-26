const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    console.log(pokeName);
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            div = document.createElement('div');
            document.getElementById('movimientos').appendChild(div);
            var limite = 0;
            data.moves.forEach(function (item) {
                limite++;
                if(limite < 6) {
                    if(limite > 1) div.appendChild(document.createElement('br'));
                    div.innerHTML += item.move.name;
                }
            });

            document.getElementById("tipo").innerHTML = data.types[0].type.name;
            document.getElementById("hp").innerHTML = data.stats[0].base_stat;
            document.getElementById("ataque").innerHTML = data.stats[1].base_stat;
            document.getElementById("defense").innerHTML = data.stats[2].base_stat;
            document.getElementById("special-attack").innerHTML = data.stats[3].base_stat;
            document.getElementById("special-defense").innerHTML = data.stats[4].base_stat;
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}