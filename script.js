let amount =  document.getElementById('Bill');
let Tip_percentage =  document.getElementById('Tip');
let btn = document.querySelector('.btn');
let Tip_amount =  document.querySelector('.amount');

btn.addEventListener('click', tip_calculate);


function tip_calculate(){
    let value = amount.value * Tip_percentage.value / 100;
    Tip_amount.innerHTML = value
}