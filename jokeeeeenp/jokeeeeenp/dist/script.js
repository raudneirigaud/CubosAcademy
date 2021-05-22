function solucao(joao, andre) {
    if (joao === 'PEDRA' && andre === 'PEDRA') {
    console.log("EMPATE");
} else if (joao === 'TESOURA' && andre === 'TESOURA') {
    console.log("EMPATE");
} else if (joao === 'PAPEL' && andre === 'PAPEL') {
    console.log("EMPATE");
} else if (joao === 'PEDRA' && andre === 'TESOURA') {
    console.log("JOAO");
} else if (joao === 'PEDRA' && andre === 'PAPEL') {
    console.log("ANDRE");
} else if (joao === 'PAPEL' && andre === 'TESOURA') {
    console.log("ANDRE");
} else if (joao === 'PAPEL' && andre === 'PEDRA') {
    console.log("JOAO");
} else if (joao === 'TESOURA' && andre === 'PAPEL') {
    console.log("JOAO");
} else if (joao === 'TESOURA' && andre === 'PEDRA') {
    console.log("ANDRE"); }
    else if (andre === 'PEDRA' && joao === 'TESOURA') {
        console.log("ANDRE");
    } else if (andre === 'PEDRA' && joao === 'PAPEL') {
        console.log("JOAO");
    } else if (andre === 'PAPEL' && joao === 'TESOURA') {
        console.log("JOAO");
    } else if (andre === 'PAPEL' && joao === 'PEDRA') {
        console.log("ANDRE");
    } else if (andre === 'TESOURA' && joao === 'PAPEL') {
        console.log("ANDRE");
    } else if (andre === 'TESOURA' && joao === 'PEDRA') {
        console.log("JOAO");
    }
                
}