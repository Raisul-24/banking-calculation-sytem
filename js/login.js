document.getElementById('btn-submit').addEventListener('click',function(){
        const emailUser = document.getElementById('user-email');
        const email =emailUser.value;
        
        const passUser = document.getElementById('user-password');
        const password = passUser.value;
        // console.log(password,email);
        // Verify email && password

        if(email == 'raisul@gmail.com' && password == '1234'){
                location.href ='bank.html';
        }
        else{
                alert('Invalid user Gamil or password. Please try again!!');
        }
        
        
})