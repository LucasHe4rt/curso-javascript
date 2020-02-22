function getInteiroAleatorio(min, max){

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)

}

let opcao = 0 

console.log('valor:',opcao)

while(opcao != -1)
{
    opcao = getInteiroAleatorio(-1, 10)
    console.log(opcao)
}

console.log('fim')