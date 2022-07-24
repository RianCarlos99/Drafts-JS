const carro = {
    acelerar(){
        return this.marca + ' acelerou!'
    },
    buzinar(){
        return this.marca + ' buzinou!'
    },
    init(valor){
        this.marca = valor
        return this;
    }
}

const Honda = Object.create(carro);       //Metodo para adicionar funções ao prototipo do objeto criado --> objeto criado = object.create(Objeto que sera herdado)
Honda.init('Honda');                    

const ferrari = Object.create(carro).init('ferrari')

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

const funcaoAutomovel = {
    acelerar(){
        return 'acelerou!'
    },
    buzinar(){
        return 'buzinou!'
    }
}

const moto = {}

Object.assign(moto, funcaoAutomovel)   //Adiciona as propriedades e metodos de funcaoAutomovel ao objeto 'moto' (no objeto mesmo, nao ao prototipo dela)

//----------------------------------------------------------------------------------------------------------------------------------------------------


Object.defineProperties(carro, {        //Define manualmente as config do objeto, tornando os valores imutaveis
    rodas:{
        value: 4,
        configurable: false,            //configurable: se pode ser deletado, modificado entre outros 
        writable: false,                //writable: se pode ser reescrito o valor definido em 'value'
        enumerable: true                //enumerable: se aparece enumerado quando chamado no prompt com .getownpropertyDescriptors ou object.keys(obj)
    },
    marca:{
        value: 'marca',
        configurable: false,
        writable: true,
        enumerable: true
    }
})
Object.getOwnPropertyDescriptors(carro)    //Verifica todas essas informações acima no console ou em qualquer prompt

Object.defineProperties(moto, {
    rodas: {
        get(){                      //get é quando rodas é chamado --> ex.: moto.rodas
            return this.qtd_rodas;
        },
        set(valor){                 //set é quando rodas esta sendo definido --> ex.: moto.rodas = 3 
            this.qtd_rodas = valor * 4 + ' rodas'
        }
    }
})
const objetoQualquer = {};

Object.seal(objetoQualquer)   //previne a adição ou remoção de propriedades do objeto 
Object.preventExtensions(objetoQualquer)  //previve adição de novas propriedades
Object.freeze(objetoQualquer)  //impede qualquer mudança nas propriedades
