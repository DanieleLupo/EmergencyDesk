if(leggiCookie('utente') != null){
    window.location = "pannello.html";
}

var utenti = Array();
let utente = {'Nome':'Daniele','Cognome':'Lupo','CF':'LPUDNL94D20A489M','ComuneDiNascita':'Atripalda','DataDiNascita':'20/04/1994','Indirizzo':'Via Traversa I','CAP':'83100','Cellulare':'3297270185','Email':'d.lupo1@studenti.unisa.it','CodiceOperatore':'0123456789','ZonaComando':'Avellino','Password':'Password'};
utenti.push(utente);

function login(){
    // Il controllo dei campi viene fatto dall'HTML
    let codiceOperatore = document.getElementById('inputCodiceOperatore').value.trim();
    codiceOperatore = codiceOperatore.replace(" ","");
    if(codiceOperatore.length == 0){
        alert('Il codice operatore non può essere vuoto.');
        document.getElementById('inputCodiceOperatore').value = document.getElementById('inputCodiceOperatore').value.trim();
        return false;
    }
    let password = document.getElementById('inputPassword').value.trim();
    password = password.replace(" ","");
    if(password.length == 0){
        alert('La password non può essere vuota.');
        document.getElementById('inputPassword').value = document.getElementById('inputPassword').value.trim();
        return false;
    }

    // Cerco l'utente fra gli utenti
    let u;
    for(let i = 0; i < utenti.length; i++){
        //console.log(utenti[i]);
        u = utenti[i];
        //console.log(u);
        if(u.CodiceOperatore == codiceOperatore && u.Password == password){
            document.cookie = creaCookie('utente',u);
            window.location = "pannello.html";
            return;
        }
        alert('Username o password errati.');
    }
}

function registrazione(){
    alert('Oh yes!');
}