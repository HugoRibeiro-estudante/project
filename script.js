//*********carrega elementos armazenados no LocalStorage

function carregar(){
    //dados localstrg
    let dadoLocal = localStorage.getItem('local');

    let arrayLocal = [];

    if(dadoLocal !== undefined && dadoLocal !== null) {
        arrayLocal = JSON.parse(dadoLocal);
    } 
    

    
        //tag que recebera dados
        
    //
        for(let i = 0; i < arrayLocal.length; ++i){
            let receber = document.getElementById('receber');
            let ElemTd1 = document.createElement("td");
            let ElemTd2 = document.createElement("td");
            let ElemTr = document.createElement("tr"); 
            
            for(let j=0; j < 2; j++) {
            
                    
        

        
        //inseri dados no Td
        ElemTd1.textContent = arrayLocal[i][0];
        ElemTd2.textContent = arrayLocal[i][1];

        
        ElemTr.id = i;
        
        console.log(arrayLocal[j]);    
        
        //inseri dados no documento
        receber.appendChild(ElemTr);
        ElemTr.appendChild(ElemTd1);
        ElemTr.appendChild(ElemTd2);
        
        
    }
    

        }
        


    }




//************Limpa LocalStorage (para teste)

function cls(){

localStorage.clear();
console.log(localStorage.getItem(local));
}


//***********Adiciona valores ao LocalStorage

function add(){

let dado = localStorage.getItem('local');

let arrayTeste = [];

if(dado !== undefined && dado !== null) {
    arrayTeste = JSON.parse(dado);
}  

//input para equipamento
var equipamento = document.getElementById('equipamento').value;

//input select para predios
var select = document.getElementById('predios');

//conversão do select
var predio = select.options[select.selectedIndex].value;

var array = [];

//adc em array
arrayTeste.push([predio, equipamento]);  

// entrada de dados no localStorage
localStorage.setItem("local", JSON.stringify(arrayTeste));



}


//***********Removerá valores do LocalStorage

function remove(id){

//localStorage.predio.removeItem();
//localStorage.equipamento.removeItem();

}