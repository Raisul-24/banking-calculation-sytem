document.getElementById('btn-deposit').addEventListener('click',function(){
        const depositField = document.getElementById('deposit-field');
        const newDepositAmount =depositField.value;
        // console.log(newDepositAmount);

// deposit
        const depositTotalElement = document.getElementById('deposit-total');
        const previousDepositTotal = depositTotalElement.innerText;
// prev deposit + current deposit
        const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
        depositTotalElement.innerText =currentDepositTotal;

// balance update
        const balanceField = document.getElementById('balance-filed');
        const previousBalance = balanceField.innerText;
        const updateBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);
        balanceField.innerText = updateBalance;

// after empty filed show
        depositField.value ='';
})