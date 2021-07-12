const calculatorBtn = document.querySelector('.calculator');


function btnNumberValue(btn) {
    const input = document.querySelector('.input')
    btn.addEventListener('click', function(){
        if(btn.value === 'c'){
            input.value = ''
        } else {
            input.value += btn.value
        }

    })
}

for(itens of calculatorBtn){
    btnNumberValue(itens)
}

function calcular(){
    const input = document.querySelector('.input')
    if(input.value != '' ){
        console.log(input.value)
    } else {
        input.value = 'Digite um valor'
    }
    
}