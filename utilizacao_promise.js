let p = new Promise((resolve, reject) => {
    let a = 1 + 1 
    
    if(a == 2){
        resolve('Sucess!')
    }
    else{
        reject('Failed!')
    }
})

p.then((message)=>{
    console.log('Isso é o que tem dentro do Resolve/then ' + message)
})
.catch((err)=>{
    console.log('Isso é o que tem dentro do Reject/catch ' + err)
})
console.log("Hello!")
