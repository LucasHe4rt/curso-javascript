function tratarErroELancar(erro)
{
    //throw new Error('Azedou aqui em')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj)
{
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('chegou no final aqui.')
    }
    
}

const obj = {name: 'Zézinho'}
imprimirNomeGritado(obj)