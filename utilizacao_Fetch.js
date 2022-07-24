const cep = fetch('https://viacep.com.br/ws/09732340/json/');

cep.then(resolve =>{
    return resolve.json()
})
.then((body) =>{
    console.log(body)
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = `${body.cep}, ${body.logradouro}`
})
.catch((error)=>{
    console.log('Erro ao fazer a requisição: ',error)
})

console.log('Enquanto esse texto é exposto, o fetch esta sendo processado no fundo.\nIsso é async!')
