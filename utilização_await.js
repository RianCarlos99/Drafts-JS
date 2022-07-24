
function bestRockBand(band){
    return new Promise((resolve,reject)=>{
        if (band == 'Queens'){
            resolve({
                success: true,
                bandName: band,
                msg: band + 'is the best rock band ever!'
            })
        }
        else{
            reject({
                success: false,
                msg:' i\'m not so sure!'
            })
        }
    })
}

function bestRockSong(response){
    return new Promise((resolve, reject)=>{
        if (response.success){
            resolve('Bohemian Rhapsody by ' + response.bandName)
        }
        else{
            reject('Do you know \'Queens\'?')
        }
    });
}

//Uso do Then e do Catch
bestRockBand('Queens')
.then((response)=>{
    console.log("Checking the answer...")
    setTimeout(()=>{'1,2,3'},3000);
    return bestRockSong(response);
})
.then(response=>{
    console.log('Finding the best song...')
    setTimeout(()=>{'1,2,3'},3000);
    console.log(response);
})
.catch(err=>{
    console.log(err.msg)
})