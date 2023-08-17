 document.getElementById('btn-withdraw').addEventListener('click',function(){
        // get the withdraw amount from input file
        const withdrawField = document.getElementById('Withdraw-field');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount =parseFloat(newWithdrawAmountString);
        // console.log(newWithdrawAmount)

        // total withdraw amount show in total section
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotal = withdrawTotal.innerText; 

        // add total withdraw
        const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + newWithdrawAmount;
        withdrawTotal.innerText = currentWithdrawTotal;


        // balance update
        const balanceField = document.getElementById('balance-filed');
        const previousBalanceString =balanceField.innerText;
        const previousBalance = parseFloat(previousBalanceString);

        if(newWithdrawAmount < previousBalance){
                balanceField.innerText = previousBalance - newWithdrawAmount;
        }
        else{
                alert("Don't have Sufficient balance. Thank You!!");
        }

        // empty input field 
        withdrawField.value ='';

 })
//  console.log(2)