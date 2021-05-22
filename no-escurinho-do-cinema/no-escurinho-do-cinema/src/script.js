function solucao(obj) {
    if (obj.temIngresso === true && obj.estaComPais === true || obj.temIngresso === true && obj.idade >= obj.censura) {
        if (obj.temCarteirinha === true || obj.idade < 18) {
            console.log("MEIA")
        } else {
            console.log("INTEIRA")
        }
        } else {
        console.log("ACESSO NEGADO")
        }
}

const obj = {
    "temIngresso": true,
    "idade": 23,
    "temCarteirinha": true,
    "censura": 16,
    "estaComPais": true
  }

solucao(obj)