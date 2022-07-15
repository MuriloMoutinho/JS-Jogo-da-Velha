var quadro = window.document.querySelectorAll('.child');
var posicao = ['a','b','c','d','e','f','g','h','i'];
var cont = 0;
NodeList.prototype.indexOf = Array.prototype.indexOf;

function clicar(e){
    if(e.target.innerHTML == ''){
        cont++
        if(cont%2 == 0){
            posicao[quadro.indexOf(e.target)] = 1;
            e.target.innerHTML = 'X';
        } else {
            posicao[quadro.indexOf(e.target)] = 2;
            e.target.innerHTML = 'O';
        }
        verificar(posicao)
    } else {
        return false
    }
}

function verificar(element){
    if(element[0] == element[1] && element[1] ==  element[2]){
        window.alert(`Lado ${quadro[0].innerHTML} venceu`)
        location.reload();
    }
    else if(element[3] ==element[4] && element[4] ==  element[5]){
        window.alert(`Lado ${quadro[3].innerHTML} venceu`)
        location.reload();
    }
    else if(element[6] ==element[7] && element[7] ==  element[8]){
        window.alert(`Lado ${quadro[6].innerHTML} venceu`)
        location.reload();
    }
    else if(element[0] ==element[3] && element[3] ==  element[6]){
        window.alert(`Lado ${quadro[0].innerHTML} venceu`)
        location.reload();
    }
    else if(element[1] ==element[4] && element[4] ==  element[7]){
        window.alert(`Lado ${quadro[1].innerHTML} venceu`)
        location.reload();
    }
    else if(element[2] ==element[5] && element[5] == element[8]){
        window.alert(`Lado ${quadro[2].innerHTML} venceu`)
        location.reload();
    }
    else if(element[0] ==element[4] && element[4] ==  element[8]){
        window.alert(`Lado ${quadro[0].innerHTML} venceu`)
        location.reload();
    }
    else if(element[6] ==element[4] && element[4] ==  element[2]){
        window.alert(`Lado ${quadro[6].innerHTML} venceu`)
        location.reload();
    }
    else if(cont==9){
        window.alert('Empate')
        location.reload();
    } 
    else {return false}
}

for (let i = 0; i < quadro.length; i++) {
    quadro[i].addEventListener('click',clicar);
 }