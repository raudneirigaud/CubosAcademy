function solucao(produtos) {

    
/* Filtrar produtos topdelinha */   
    
topdelinha = [];
f = 0;

function buscar_produtos_topdeLinha(item, i) {
    if (produtos[i].preco > 10000) {
        topdelinha[f] = produtos[i].preco;
        f++;
    }
}

produtos.forEach(buscar_produtos_topdeLinha); 

/* Calcular total de produtos topdelinha */   

let total_topdelinha = 0;

    function somar_produtos_topdelinha(item) {
        total_topdelinha += item;
    }
    topdelinha.forEach(somar_produtos_topdelinha);


/* Filtrar todas as vendas da loja */   
    
todasvendas = [];
h = 0;

function buscar_produtos_total(item, j) {
    if (produtos[j].preco > 0) {
        todasvendas[h] = produtos[j].preco;
        h++;
    }
}
produtos.forEach(buscar_produtos_total);
    
 /* Calcular total de vendas da loja */   
 
let total_vendas_loja = 0;

    function somar_produtos_total_loja(item) {
        total_vendas_loja += item;
    }
    todasvendas.forEach(somar_produtos_total_loja);

    
let percentual_topdelinha_sobre_total_da_loja;
    
percentual_topdelinha_sobre_total_da_loja = (total_topdelinha * 100 / total_vendas_loja) / 100;
    
console.log({ totalTop: total_topdelinha, percentual: percentual_topdelinha_sobre_total_da_loja })


    
}