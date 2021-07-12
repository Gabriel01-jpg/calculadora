const calculatorBtn = document.querySelector('.calculator');
console.log(calculatorBtn)



function btnNumberValue(btn) {
    const input = document.querySelector('.input')
    btn.addEventListener('click', function(){
        input.value += btn.value
        
    })
}

for(itens of calculatorBtn){
    btnNumberValue(itens)
}