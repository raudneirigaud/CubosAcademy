if (precos.length >= 5) {



    let menorvalor = Math.min(...precos);


    let total_compras = 0;

    function somar_produtos(item) {
        total_compras += item;
    }
    precos.forEach(somar_produtos);


    let total_pos_desconto = total_compras - menorvalor;

    console.log(total_pos_desconto);

} else {

    let total = 0;

    function somar_produtos(item) {
        total += item;
    }
    precos.forEach(somar_produtos);
    console.log(total);
}