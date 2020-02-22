const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas)
{
    console.log(i, notas[i])
}

const pesssoa = {
    nome: "Lucas",
    sobrenome: 'Silva',
    idade: 17,
    peso: 75
}

for(let atributo in pesssoa){
    console.log(`${atributo} = ${pesssoa[atributo]}`)
}