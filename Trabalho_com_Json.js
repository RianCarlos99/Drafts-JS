const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 49'
    }
]

let SomaTaxas = 0;
transacoes.forEach((item)=>{
    NumeroLimpo = +item.valor.replace('R$ ','');
    item.descricao.slice(0,4) === 'Taxa'? SomaTaxas += NumeroLimpo:null    
})

console.log(`Total de R$ ${SomaTaxas}`)


