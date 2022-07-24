const Carros = ['Gol', 'Parati', 'Ferrari', 'Citroen']
const NovaRemessa = ['Camaro','Opala']

Carros.unshift('Fiesta', 'Siena') //Adiciona novos itens no comeco da array

Carros.pop() //Remove o ultimo item da array e retorna ele 
Carros.push('Maserati', 'Lamborguini') //Adiciona novos itens no final da array
Carros.shift() //Remove o primeiro item da array e retorna ele 
Carros.splice(1, 0, 'Fiat uno','Fusca') // primeiro numero é o endereco que o splice comecara a adicionar itens, segundo numero é 
                                        //para dizer se quer remover itens a partir da posição de inicio
Carros.fill('Voyage', 2,3) // Adiciona o valor no intervalo de posicoes que voce colocar ex.:2 -                                         
const NovaColecao = Carros.concat(NovaRemessa,'Fusion') //Soma duas ou mais arrays

console.log(Carros)
console.log(NovaColecao)
