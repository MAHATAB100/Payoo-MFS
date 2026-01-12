// add money


document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
   
    
    //get money to be added
    const addMoneyInput= document.getElementById('input-add-money').value;
    console.log(addMoneyInput);



    //get the pin
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput); 

    if(pinNumberInput === '1234'){
        console.log('adding to your account');

        const balance = document.getElementById('account-balance').
        innerText;
        console.log(typeof balance);


        //addmonetinput with balance
        const addMoneyNumber= parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;
    }


    else{
        alert('Failed .try again')
    }
});