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
function inputValidateForcalculate(a,b,c,d) {
  
    if (isNaN(a) == false && isNaN(b) == false && isNaN(c) == false && isNaN(d) == false )
    {
        if(a<0 ||b<0 || c<0||d<0){
            alert('Value cannot be negative');

        }
        else{
            calculate(a, b, c, d);
        }
        
    }
        
    else if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true || isNaN(d) == true )
    {
        alert('Type all value in Number');
    }    
}

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
    totalExpenseField.innerText = totalExpense;
    //setting balance
    balance = income - totalExpense;
    balanceField.innerText = balance;

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
    //calculating remaining amount
    const remainingBalance = balance - saveBalance;
    RemainingBalanceField.innerText = remainingBalance;
    }
})


