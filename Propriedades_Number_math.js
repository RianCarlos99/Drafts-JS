const max = 2000;
const min = 1000;

const aleatorio = Math.floor(Math.random() * (max - min + 1) + min); // SORTEIO DE NUMEROS ALEATORIOS DE 1000 A 2000
console.log("Numero sorteado:",aleatorio);


const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros); // ... PASSA CADA ITEM DA ARRAY NA FUNÇÃO MAX
console.log("Numero Maximo:",numeroMaximo);

//------------------------------------------------------------------------------------------------------------------


const listaPrecos = ['R$ 59,99', 'R$ 100,22',
                     'R$ 230,00', 'R$ 200,00']

function limparPreco(preco){
    preco = preco.replace("R$ ","").replace(",",".") // PASSA TODOS AS STRINGS DE LISTAPRECOS E TRANFORMA EM NUMEROS ARREDONDADOS
    preco = +preco //Tranforma em numero 
    console.log(preco)
    return preco
}

let soma = 0;
listaPrecos.forEach(element => {
    soma += limparPreco(element)
    
});

console.log("Soma de todos os valores:",soma.toLocaleString("pt-BR",{ style: 'currency', currency:'BRL'}))

