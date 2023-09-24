let btnElemento = document.getElementById('cambiar-frace');
let fraceElemto = document.getElementById('frace');
let autorElemento = document.getElementById('autor');

function numRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarFrace (){
    let indiceRandom = numRandom(0 , fraces.length );
    fraceElemto.innerText = `"${fraces[indiceRandom].letra}"`;
    autorElemento.innerText = fraces[indiceRandom].autor;

}

let indiceRandom = numRandom(0 , fraces.length );
cambiarFrace()

btnElemento.addEventListener('click', cambiarFrace)