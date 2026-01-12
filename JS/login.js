document.getElementById('button-login')
.addEventListener('click',function(event){
    // step 2"
    event.preventDefault();
 console.log("Login button clicked");

 //step 3:get the phone number
 const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value;
 console.log(phoneNumber,pinNumber)

 //step 5
 if(phoneNumber==='5' && pinNumber==='1234'){
    console.log('you are logged in');
    window.location.href='/home.html';
 }
 else{
    alert('login failed!Try again');
 }
} )