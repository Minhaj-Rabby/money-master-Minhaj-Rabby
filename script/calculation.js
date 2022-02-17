//getting input function

function getInput(input) {
    const inputField = document.getElementById(input + '-money');
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}

//calculation function
let balance;

function calculate(income,food,rent,clothes){

    //getting expense field
    const totalExpenseField = document.getElementById('total-expenses');

    //calculating expense
    
    const totalExpense = food + rent+ clothes;
    //setting expense value
    totalExpenseField.innerText=totalExpense;

    //getting balance field
    const balanceField = document.getElementById('balance');

    //setting balance
    balance= income-totalExpense;
    balanceField.innerText=balance;

}
let incomeMoney;
//event on calculate button
document.getElementById('calculate-btn').addEventListener('click',function(){
    //getting input
   incomeMoney= getInput('income');
   const foodMoney= getInput('food');
   const rentMoney= getInput('rent');
   const clothesMoney= getInput('clothes');

   //calculate
   calculate(incomeMoney,foodMoney,rentMoney,clothesMoney);

})
document.getElementById('save-button').addEventListener('click',function(){
   
    const saveMoney = getInput('save');
    const savingField = document.getElementById('saving-amount');
    const saveBalance = (saveMoney * incomeMoney)/ 100.0;
    savingField.innerText = saveBalance;

    const RemainingBalanceField = document.getElementById('remaining-balance');

    const remainingBalance=balance-saveBalance;
    RemainingBalanceField.innerText=remainingBalance;
})


