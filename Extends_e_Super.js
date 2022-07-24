class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    
    acelerar() {
       console.log("acelerou ")
    }
}

class Moto extends Veiculo {        
    constructor(rodas, capacete) {
        super(rodas);
        this.capacete = capacete
    }
    superAcelerar(){
        super.acelerar()      //Super refere-se à classe Pai, nesse caso, 'Veiculo' 
        console.log('rapido!') 
    }
    
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas!');
    }
}

const Honda = new Moto(2, true)