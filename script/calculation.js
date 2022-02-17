let balance;
let incomeMoney;
const totalExpenseField = document.getElementById('total-expenses');
const savingField = document.getElementById('saving-amount');
const RemainingBalanceField = document.getElementById('remaining-balance');
const balanceField = document.getElementById('balance');


//getting input function

function getInput(input) {
    const inputField = document.getElementById(input + '-money');
    const value = inputField.value;
    inputField.value = '';
    return value;

}
//data type and positive validate for calculate button
function inputValidateForcalculate(income, food, rent, cloth) {

    if (isNaN(income) == false && isNaN(food) == false && isNaN(rent) == false && isNaN(cloth) == false) {
        if (income < 0 || food < 0 || rent < 0 || cloth < 0) {
            alert('Value cannot be negative');

        }
        else {
            calculate(income, food, rent, cloth);
        }

    }

    else if (isNaN(income) == true || isNaN(food) == true || isNaN(rent) == true || isNaN(cloth) == true) {
        alert('Type all value in Number');
    }
    else {
        alert('Value Cant be Empty');

    }
}
//data type and positive validate for save button
function validatesavebutton(value) {
    if (isNaN(value) == false) {
        if (value < 0 ) {
            alert('Value cannot be negative');

        }
        else {
            return true;
        }

    }

    else if (isNaN(value) == true ){
        alert('Type all value in Number');
    }   

}


//calculation function


function calculate(income, food, rent, clothes) {

    
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    //setting expense value
    
    //checking is income<total expense
    if(income<totalExpense)
    {
        alert('Expense can not be larger than Income')
    }
    else{
        //setting balance
        totalExpenseField.innerText = totalExpense;
        balance = income - totalExpense;
        balanceField.innerText = balance;
    }
    

}

//event on calculate button


document.getElementById('calculate-btn').addEventListener('click', function () {
    //getting input
    incomeMoney = getInput('income');
    const foodMoney = getInput('food');  
    const rentMoney = getInput('rent');
    const clothesMoney = getInput('clothes');
    //validation
    inputValidateForcalculate(incomeMoney,foodMoney,rentMoney,clothesMoney);

})

//event on savin button
document.getElementById('save-button').addEventListener('click', function () {

    const saveMoney = getInput('save');
    // save validate
    if(validatesavebutton(saveMoney)==true){
    //calculating save amount
    const saveBalance = (parseFloat(saveMoney) * parseFloat(incomeMoney)) / 100.0;
    savingField.innerText = saveBalance;
    //validating is balance>saving
    if(saveBalance>balance)
    {
        alert('Saving can not be larger than Balance');
    }
    else{
        //calculating remaining amount
        const remainingBalance = balance - saveBalance;
        RemainingBalanceField.innerText = remainingBalance;
    }
    
    }
})


