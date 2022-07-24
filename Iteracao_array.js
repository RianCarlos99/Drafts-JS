const carros =['Ford','Fiat','Honda'];

const newCarros = carros.map((item, index, array)=>{
    console.log(item.toUpperCase(), index, array)       //.map() serve para modificar elementos da array e .forEach serve apenas para lista-los
    return item.toUpperCase()
})

console.log(newCarros)

console.log('\n')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

const numeros = [4,5,10,25,30];

const reduceNumeros = numeros.reduce((acc, item, index, array) =>{      //.reduce recebe um (acumulador, item, endereço, e a propria array) na arrow function e 
    console.log(acc, item)                                              // no final da função determina um valor para o acumulador podendo usa-lo em todas as voltas do laço
    return item + acc;
},0);

console.log("Valor final do acc:", reduceNumeros);

const maiorNumero = numeros.reduce((anterior,atual)=>{
    return anterior < atual? atual : anterior 
})

console.log("Maior numero da array \'numeros\':", maiorNumero);

const Aulas = [
    {
        nome: 'Aula de matematica',
        min: 15
    },
    {
        nome: 'Aula de fisica',
        min: 10
    },
    {
        nome: 'Aula de ciencias',
        min: 30
    },
    {
        nome: 'Aula de historia',
        min: 25
    }
]

const nomesAulas = Aulas.reduce((acc, aula, index)=>{
    acc[index] = aula.nome;
    return acc
},{})

console.log('Objeto com os nomes das aulas:', nomesAulas)

console.log('\n')
//-----------------------------------------------------------------------------------------------------------------------------------

const VerificacaoAula = Aulas.some((item, index) =>{        //checa cada item e verifica se é igual ao return declarado
    return item.nome === 'Aula de fisica'
})

console.log('\n')
//------------------------------------------------------------------------------------------------------------------------------------

const numbers = [34, 44, 55, 30, 12, 23, 101]

const findNumber = numbers.find((item, index)=>{            //.find retorna o valor procurado
    return item > 54
})
console.log("Maior numero da array \'numbers:\'", findNumber)

const findIndexNumber = numbers.findIndex((item) =>{       //.findIndex retorna o index do valor procurado 
    return item > 54
})
console.log("Index que possui o true da funcao:", findIndexNumber)

const Maiorque30 = numbers.filter((item)=>{
    return item >= 30
})
console.log(Maiorque30)
