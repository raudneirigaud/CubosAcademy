
os_que_acertaram = [];
f = 0;

function buscar_letras_certas(item, i) {
    if (palavras[i].indexOf(letra) == 0) {
        os_que_acertaram[f] = palavras[i];
        f++;
    }
}


palavras.forEach(buscar_letras_certas);   
    
perdedores = palavras.length - os_que_acertaram.length;
console.log(perdedores);