let utente = leggiCookie('utente');
if(utente == null){
    window.location = "login.html";
}

let segnalazioni = leggiCookie('segnalazioni');
if(segnalazioni == null){
    segnalazioni = Array();
    segnalazioni.push({"ID":'S001', 'Segnalazione':'Segnalazione 1','GradoEmergenza':'Alto','Zona':'Avellino','Automezzo':'0003'});
    segnalazioni.push({"ID":'S002', 'Segnalazione':'Segnalazione 2','GradoEmergenza':'Medio','Zona':'Atripalda','Automezzo':'0001'});
    segnalazioni.push({"ID":'S003', 'Segnalazione':'Segnalazione 3','GradoEmergenza':'Basso','Zona':'Baiano','Automezzo':'0005'});
    document.cookie = creaCookie('segnalazioni', segnalazioni);
}

function popolaTabella(){
    let tbody = document.getElementById('tabellaElencoSegnalazioni');
    let s;
    for(let i = 0; i < segnalazioni.length; i++){
        s = segnalazioni[i];
        // TODO: Mettere l'icona al tasto edit
        tbody.innerHTML += '<tr><td>' + s.ID + '</td><td>'+ s.Segnalazione +'</td><td>' + s.GradoEmergenza + '</td><td>' + s.Zona + '</td><td>' + s.Automezzo + '</td><td><button onclick=modifica('+i+')>Edit</button></tr>';
    }
}

function modifica(indiceSegnalazione){
    // TODO: Gestire in base al form, e a come esso compare, di creazione di una nuova segnalazione
    console.log('Vuoi modificare ' + segnalazioni[indiceSegnalazione].ID);
}

function logout(){
    eliminaCookie('utente');
    window.location = "login.html";
}