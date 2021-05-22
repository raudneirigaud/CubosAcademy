function solucao(largura, altura) {
if(largura > altura ){
console.log("PAISAGEM")
}
else if(altura > largura) {
console.log("RETRATO")
}else if (altura === largura) {
console.log("QUADRADA")
}else{
console.log("NENHUMA DAS OPÇÕES")
}
}