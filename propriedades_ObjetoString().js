const ListaFrutas = 'banana, melancia, laranja'
const mercado = 'mercado de ';
const fruta = 'banana';
const frase = 'Depósito de cliente'
const ListaPrecos = ['$99', '$150','$300'];
let cont = 10;

console.log("0 -",mercado.concat(fruta)); //Soma a variavel 'fruta' com 'mercado'
console.log("1 -",fruta.startsWith('Ba')); //Verifica se 'fruta' inicia com 'Ba'
console.log("2 -",ListaFrutas.includes(fruta)); //Verifica se a variavel 'fruta' esta contida em 'ListaFrutas'
console.log("3 -",ListaFrutas.charAt(5)); //Retorna o caractere que estiver na posição 5
console.log("4 -",fruta[fruta.length - 1]); //Retorna o ultimo caractere
console.log("5 -",frase.slice(0,8)); //Retorna uma string do caractere 0 até o 7 
console.log("6 -",frase.slice(8)); //Corta os primeiros 8 caracteres
console.log("7 -",frase.slice(-8)); //Corta os ultimos 8 caracteres
console.log("8 -",fruta.lastIndexOf('na')); //Retorna o último endereço que achar a string
console.log("9 -",fruta.indexOf('na'));//Retorna o primeiro endereço que achar a string
ListaPrecos.forEach((item)=>{
   console.log(`${cont} - ${item}`);  //Retorna cada elemento que o callback 'item' receberá da variavel vinculada
   cont++
})

let NovaFruta = fruta.replace('banana','13 - maçãs'); //Substitui um pelo segundo
console.log(NovaFruta); 

let ArrayLista = ListaFrutas.split(','); //Retorna um array quebrado aonde voce especificar --> ',' por exemplo
console.log(ArrayLista);



