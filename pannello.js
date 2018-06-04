let utente = leggiCookie('utente');
if(utente == null){
    window.location = "login.html";
}


// FIXME: Non cancella i cookie
function logout(){
    eliminaCookie('utente');
    //eliminaCookie('utenti');
    window.location = "login.html";
}