if(leggiCookie('utente') != null){
    window.location = "pannello.html";
}

var utenti = leggiCookie('utenti');
if(utenti == null){
    let utente = {'Nome':'Daniele','Cognome':'Lupo','CF':'LPUDNL94D20A489M','ComuneDiNascita':'Atripalda','DataDiNascita':'20/04/1994','Indirizzo':'Via Traversa I','CAP':'83100','Cellulare':'3297270185','Email':'d.lupo1@studenti.unisa.it','CodiceOperatore':'0123456789','ZonaComando':'Avellino','Password':'Password'};
    utenti = Array();
    utenti.push(utente);
}

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
    // Salvo i dati e controllo mano mano
    // TODO: Fare i vari check
    let nome = document.getElementById('inputNome').value;
    let cognome = document.getElementById('inputCognome').value;
    let cf = document.getElementById('inputCodiceFiscale').value;
    let comuneDiNascita = document.getElementById('inputComuneDiNascita').value;
    let dataDiNascita = document.getElementById('inputDataDiNascita').value;
    let indirizzo = document.getElementById('inputIndirizzo').value;
    let CAP = document.getElementById('inputCAP').value;
    let cellulare = document.getElementById('inputCellulare').value;
    let email = document.getElementById('inputCellulare').value;
    let zonaComando = document.getElementById('inputZonaComando').value;
    let codiceOperatore = document.getElementById('inputCodiceOperatoreR').value.trim();
    codiceOperatore = codiceOperatore.replace(" ","");
    if(codiceOperatore.length == 0){
        alert('Il codice operatore non può essere vuoto.');
        document.getElementById('inputCodiceOperatoreR').value = document.getElementById('inputCodiceOperatoreR').value.trim();
        return false;
    }

    // Controllo subito i duplicati
    for(let i = 0; i < utenti.length; i++){
        if(utenti[i].CodiceOperatore == codiceOperatore){
            alert('Codice operatore duplicato.');
            return false;
        }
    }

    let password = document.getElementById('inputPasswordR').value.trim();
    password = password.replace(" ","");
    if(password.length == 0){
        alert('La password non può essere vuota.');
        document.getElementById('inputPasswordR').value = document.getElementById('inputPasswordR').value.trim();
        return false;
    }
    let rePassword = document.getElementById('inputRePasswordR').value.trim();
    rePassword = rePassword.replace(" ","");
    if(rePassword.length == 0){
        alert('Bisogna confermare la password.');
        document.getElementById('inputRePasswordR').value = document.getElementById('inputRePasswordR').value.trim();
        return false;
    }

    let utente = {'Nome':nome,'Cognome':cognome,'CF':cf,'ComuneDiNascita':comuneDiNascita,'DataDiNascita':dataDiNascita,'Indirizzo':indirizzo,'CAP':CAP,'Cellulare':cellulare,'Email':email,'CodiceOperatore':codiceOperatore,'ZonaComando':zonaComando,'Password':password};
    utenti.push(utente);
    document.cookie = creaCookie('utente', utente);
    document.cookie = creaCookie('utenti', utenti);
    alert('Registrazione avvenuta con successo.');
    window.location = "pannello.html";
}