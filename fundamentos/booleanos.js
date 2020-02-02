let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('------------------')

console.log('Os verdadeiros:')
console.log('3:', !!3)
console.log('-1:', !!-1)
console.log("' ':", !!' ')
console.log("[]:", !![])
console.log("{}:", !!{})
console.log("Infinity:", !!Infinity)
console.log('isAtivo = true:', !!(isAtivo = true))

console.log('------------------')

console.log("Os falsos:")
console.log('0:', !!0)
console.log("'':", !!'')
console.log("null:", !!null)
console.log("NaN:", !!NaN)
console.log("undefined:", !!undefined)
console.log("isAtivo = false:", !!(isAtivo = false))

console.log('------------------')

console.log("Pra finalizar:")
console.log(('' || null || 0 || 'Bom dia!'))

let nome = "Lucas"
console.log(nome || 'Desconhecido')
