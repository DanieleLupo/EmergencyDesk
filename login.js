if(leggiCookie('utente') != null){
    window.location = "pannello.html";
}

var utenti = leggiCookie('utenti');
if(utenti == null){
    let utente = {'Nome':'Daniele','Cognome':'Lupo','CF':'LPUDNL94D20A489M','ComuneDiNascita':'Atripalda','DataDiNascita':'20/04/1994','Indirizzo':'Via Traversa I','CAP':'83100','Cellulare':'3297270185','Email':'d.lupo1@studenti.unisa.it','CodiceOperatore':'0123456789','ZonaComando':'Avellino','Password':'Password'};
    utenti = Array();
    utenti.push(utente);
    document.cookie = creaCookie('utenti', utenti);
}

function login(){
    utenti = leggiCookie('utenti');
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
        u = utenti[i];
        if(u.CodiceOperatore == codiceOperatore && u.Password == password){
            document.cookie = creaCookie('utente',u);
            document.cookie = creaCookie('utenti',utenti);
            window.location = "pannello.html";
            return true;
        }
    }
    alert('Username o password errati.');
}

function registrazione(){
    // Salvo i dati e controllo mano mano
    let nome = document.getElementById('inputNome').value.trim();
    if(nome.length == 0){
        alert('Il nome non può essere vuoto.');
        document.getElementById('inputNome').value = nome;
        return false;
    }
    let cognome = document.getElementById('inputCognome').value.trim();
    if(cognome.length == 0){
        alert('Il cognome non può essere vuoto.');
        document.getElementById('inputCognome').value = cognome;
        return false;
    }
    let cf = document.getElementById('inputCodiceFiscale').value.trim();
    if(cf.length == 0){
        alert('Il codice fiscale non può essere vuoto.');
        document.getElementById('inputCodiceFiscale').value = cf;
        return false;
    }
    let comuneDiNascita = document.getElementById('inputComuneDiNascita').value.trim();
    if(comuneDiNascita.length == 0){
        alert('Il comune di nascita non può essere vuoto.');
        document.getElementById('inputComuneDiNascita').value = comuneDiNascita;
        return false;
    }
    let dataDiNascita = document.getElementById('inputDataDiNascita').value.trim();
    if(dataDiNascita.length == 0){
        alert('La data di nascita non può essere vuota.');
        document.getElementById('inputDataDiNascita').value = dataDiNascita;
        return false;
    }
    let indirizzo = document.getElementById('inputIndirizzo').value.trim();
    if(indirizzo.length == 0){
        alert('L\'indirizzo non può essere vuoto.');
        document.getElementById('inputIndirizzo').value = indirizzo;
        return false;
    }
    let CAP = document.getElementById('inputCAP').value.trim();
    if(CAP.length == 0){
        alert('Il CAP non può essere vuoto.');
        document.getElementById('inputCAP').value = CAP;
        return false;
    }
    let cellulare = document.getElementById('inputCellulare').value.trim();
    if(cellulare.length == 0){
        alert('Il cellulare non può essere vuoto.');
        document.getElementById('inputCellulare').value = cellulare;
        return false;
    }
    let email = document.getElementById('inputCellulare').value.trim();
    if(email.length == 0){
        alert('L\'email non può essere vuota.');
        document.getElementById('inputCellulare').value = email;
        return false;
    }
    let zonaComando = document.getElementById('inputZonaComando').value.trim();
    if(zonaComando.length == 0){
        alert('La zona di comando non può essere vuota.');
        document.getElementById('inputZonaComando').value = zonaComando;
        return false;
    }
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
    eliminaCookie('utente');
    document.cookie = creaCookie('utenti', utenti);
    alert('Registrazione avvenuta con successo.');
    window.location.reload();
}