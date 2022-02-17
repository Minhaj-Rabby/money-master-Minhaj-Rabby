//getting input function

function getInput(input) {
    const inputField = document.getElementById(input + '-money');
    return inputField;
}

//calculation function

function calculate(income,food,rent,clothes){

    //getting expense field
    const totalExpenseField = document.getElementById('total-expenses');

    //calculating expense
    const totalExpense = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);

    //setting expense value
    totalExpenseField.innerText=totalExpense;

    //getting balance field
    const balanceField = document.getElementById('balance');

    //setting balance
    const balance= parseFloat(income.value)-totalExpense;
    balanceField.innerText=balance;

}
//event on calculate button
document.getElementById('calculate-btn').addEventListener('click',function(){
    //getting input
   const incomeMoney= getInput('income');
   const foodMoney= getInput('food');
   const rentMoney= getInput('rent');
   const clothesMoney= getInput('clothes');

   //calculate
   calculate(incomeMoney,foodMoney,rentMoney,clothesMoney);

})


