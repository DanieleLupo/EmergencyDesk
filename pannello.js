// FIXME: Non cancella i cookie
function logout(){
    eliminaCookie('utente');
    eliminaCookie('utenti');
    window.location.reload(true);
}