function getInput(input) {
    const inputField = document.getElementById(input + '-money');
    return inputField;
}
function calculate(income,food,rent,clothes){
    const totalExpenseField = document.getElementById('total-expenses');
    const totalExpense = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);

    totalExpenseField.innerText=totalExpense;
    console.log(totalExpense);
}

document.getElementById('calculate-btn').addEventListener('click',function(){
   const incomeMoney= getInput('income');
   const foodMoney= getInput('food');
   const rentMoney= getInput('rent');
   const clothesMoney= getInput('clothes');
   calculate(incomeMoney,foodMoney,rentMoney,clothesMoney);

})


