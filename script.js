//carrega elementos armazenados no LocalStorage
function carregar(){

    for(i=0; i <= localStorage.length; i++){

    if(localStorage.getItem(i)){
        

        let dado = localStorage.getItem(i);
        let recebe = document.getElementById('receber');

        let ElemTd1 = document.createElement("td");
        let ElemTd2 = document.createElement("td");
        let ElemTr = document.createElement("tr");
        let x = dado.split(",", 2);
        
        
        ElemTd1.textContent = x[0];
        ElemTd2.textContent = x[1];

        
        recebe.appendChild(ElemTr.appendChild(ElemTd1));
        recebe.appendChild(ElemTr.appendChild(ElemTd2));

       
        }


    }
}

//Limpa LocalStorage
function cls(){

localStorage.clear();
console.log(localStorage.getItem(local));
}


//Adiciona valores ao LocalStorage
function add(){

var equipamento = document.getElementById('equipamento').value;
var select = document.getElementById('predios');
var predio = select.options[select.selectedIndex].value;
var array = [];



array.push([predio, equipamento]);


var Json = JSON.stringify(array);
var local = localStorage.length;

localStorage.setItem(local, array);



}


//Removerá valores do LocalStorage
function remove(id){
localStorage.predio.removeItem();
localStorage.equipamento.removeItem();

}