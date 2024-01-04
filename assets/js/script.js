let btnLogIn, email, password;
window.addEventListener('load', ()=>{
    btnLogIn=document.getElementById('logIn');
    email=document.getElementById('email');
    password=document.getElementById('password');
    eventHandler();   
});

//------------Cancella value campo email se inserisco backspace----------//
function eventHandler(){
    btnLogIn.addEventListener('click', verifica);
    email.addEventListener('keyup', (e)=>{
        emValue = email.value
        e.code=='Space' ?  emValue.length > 0 ? 1 : email.value = "" : 1;
    });
}
//------------/Cancella value campo email se inserisco backspace------ --//
function verifica(){
    let verificaMail=document.getElementById('verificaMail');
    let verificaPassword=document.getElementById('verificaPassword');
    if(email.value==''){
        verificaMail.innerHTML = 'Questo è un campo obbligatorio';
        email.focus();
    }else if(password.value==''){
        verificaPassword.innerHTML='Questo è un campo obbligatorio';
        password.focus();
    }else if(valida(email.value)){
        stampaMessaggio(verificaMail, verificaPassword);
    }else{
        verificaMail.innerHTML="Formato email non riconosciuto";
        verificaPassword.innerHTML='';
        email.value='';
        email.focus(); 
    }
}
valida=(email)=>{
    let myRegex = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
    return myRegex.test(email); 
}

stampaMessaggio=(verificaMail, verificaPassword)=>{
    btnLogIn.style.display='none';
    verificaMail.innerHTML='';
    verificaPassword.innerHTML='';
    email.value='';
    password.value='';
    let risposta=document.getElementById('risposta');
    risposta.innerHTML='Accesso garantito';
    resetMessage();
}
function resetMessage(){
    setTimeout(()=>{
        risposta.innerHTML='';
        btnLogIn.style.display='inline-block';
        email.focus();
    },5000);
}

