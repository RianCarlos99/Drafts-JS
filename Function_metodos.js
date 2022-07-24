function somar(n1, n2){
    return n1 + n2
}

console.log(somar.length) // retorna o numero de parametros
console.log(somar.name) // retorna o nome da funcao como uma STRING 



function descricaoCarro(velocidade){
    console.log(this.marca + ' ' + this.ano + " /faz", velocidade)
}

descricaoCarro.call({marca: 'Honda', ano: 2019}, '180 Km/h')    //Permite mudar o escopo do this no primeiro parametro
                                                                //fazendo referencia ao objeto listado 

const frutas = ['Maçã', 'Uva', 'Banana']                        
Array.prototype.pop.call(frutas);                               //Array.prototype.pop.call(frutas) === frutas.pop()
console.log("Foi apagado o elemento \'Banana\': ", frutas)

const numeros = [3,45,656,5352,23141,789]

Math.max(numeros);  //retorna NaN 
Math.max.call(null, numeros); //retorna NaN
MaximoNumber = Math.max.apply(null, numeros); //retorna 23141
console.log(MaximoNumber)

//.APPLY recebe o objeto que sera referenciado (this) depois uma array que servira de parametros como parametros
//.CALL recebe o objeto que sera referenciado (this) depois os parametros individuais assim como em uma função
//.BIND é exatamente igual ao metodo .call porem ela nao se executa sozinha, tendo que chama-la como por exemplo : carro(), abrirPorta(), math.max() ... 


