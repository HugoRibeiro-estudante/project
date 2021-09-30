//*********carrega elementos armazenados no LocalStorage

function carregar(){

        
    //
        for(let i = 0; i <= localStorage.length; ++i){

        //dados localstrg
        let dado = localStorage.getItem('local');
        //tag que recebera dados
        let receber = document.getElementById('receber');
        
        //criando tags
        let ElemTd = document.createElement("td");
        
        let ElemTr = document.createElement("tr");
        
        //separa dados
        let x = dado.split(",", 2);
        
        //inseri dados no Td
        ElemTd.textContent = x[i];

        
        ElemTd.id = i;
        
        
        
        //inseri dados no documento
        receber.appendChild(ElemTr.appendChild(ElemTd));
       

        }
        


    }




//************Limpa LocalStorage (para teste)

function cls(){

localStorage.clear();
console.log(localStorage.getItem(local));
}


//***********Adiciona valores ao LocalStorage

function add(){

//input para equipamento
var equipamento = document.getElementById('equipamento').value;

//input select para predios
var select = document.getElementById('predios');

//conversão do select
var predio = select.options[select.selectedIndex].value;

var array = [];

//adc em array
array.push([predio, equipamento]);

// entrada de dados no localStorage
localStorage.setItem("local", array);



}


//***********Removerá valores do LocalStorage

function remove(id){

//localStorage.predio.removeItem();
//localStorage.equipamento.removeItem();

}