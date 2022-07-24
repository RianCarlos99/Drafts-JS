//ASYNC e AWAIT SO FUNCIONA QUANDO O QUE RETORNA É UMA PROMISE
//LEMBRE-SE: .json() RETORNA UMA PROMISE
//            fetch RETORNA UMA PROMISE


// async function puxarDados(){
//     try {
//     const responseDados = await fetch('./dados.json')
//     const jsondados = await responseDados.json()
//     console.log(jsondados);
//     const documento = document.querySelector('.async');
//     documento.innerText = jsondados.frase

//     } catch(erro) {
//         console.log(erro)
//     }
// }

// puxarDados();

async function puxarDados() {
    const responseDados = fetch('./dados.json');
    const responseClientes = fetch('./clientes.json');

    const jsonDados = await (await responseDados).json()
    const jsonClientes = await (await responseClientes).json()

    console.log(jsonDados, jsonClientes)
}

puxarDados();


async function asyncComTimeout() {
    
    console.log('Vou esperar alguns segundos!')
    await new Promise(resolve => {
        setTimeout(() =>{
            console.log('(Ja se passaram 5 segundos)')
            resolve()
        }, 5000); 
    })
    console.log('Acho que ja vou embora!')  
}

asyncComTimeout();