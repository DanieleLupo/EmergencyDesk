let utente = leggiCookie('utente');
if(utente == null){
    window.location = "login.html";
}

document.getElementById('datiUtente').innerHTML = utente.CodiceOperatore + " " + utente.Nome + " " + utente.Cognome;

let segnalazioni = leggiCookie('segnalazioni');
if(segnalazioni == null){
    segnalazioni = Array();
    segnalazioni.push({"ID":'S001', 'Segnalazione':'Segnalazione 1','GradoEmergenza':'Alto','Zona':'Avellino','Automezzo':'0003', 'Nome':'Daniele', 'Cognome':'Lupo','NumeroDiTelefono':'+393297270185','InformazioniAggiuntive':'Nessuna','Tipo':'Incendio','Indirizzo':'Via Due Principati'});
    segnalazioni.push({"ID":'S002', 'Segnalazione':'Segnalazione 2','GradoEmergenza':'Medio','Zona':'Atripalda','Automezzo':'0001', 'Nome':'Francesca', 'Cognome':'Tassatone','NumeroDiTelefono':'+393333333333','InformazioniAggiuntive':'Nessuna','Tipo':'Fuga di gas','Indirizzo':'Di là'});
    segnalazioni.push({"ID":'S003', 'Segnalazione':'Segnalazione 3','GradoEmergenza':'Basso','Zona':'Baiano','Automezzo':'0005', 'Nome':'Roberta', 'Cognome':'Gesumaria','NumeroDiTelefono':'+393333333333','InformazioniAggiuntive':'Nessuna','Tipo':'Gattino sull\'albero','Indirizzo':'Di qua'});
    document.cookie = creaCookie('segnalazioni', segnalazioni);
}

function popolaTabella(){
    let tbody = document.getElementById('tabellaElencoSegnalazioni');
    let s;
    for(let i = 0; i < segnalazioni.length; i++){
        s = segnalazioni[i];
        // TODO: Mettere l'icona al tasto edit
        tbody.innerHTML += '<tr><td>' + s.ID + '</td><td>'+ s.Segnalazione +'</td><td>' + s.GradoEmergenza + '</td><td>' + s.Zona + '</td><td>' + s.Automezzo + '</td><td><button data-toggle="modal" data-target="#modalNuovaSegnalazione" onclick=modifica('+i+')>Edit</button></tr>';
    }
}

document.getElementById('btAggiungiSegnalazione').addEventListener('click', function(){
    document.getElementById('btSelezionaAutomezzo').disabled = false;
});


var automezzo = false;
var tipoEmergenza = false, indirizzo = false, gradoEmergenza = false, zona = false;
var nome = false, cognome = false, numeroDiTelefono = false;
var segnalazione = {"ID":'', 'Segnalazione':'','GradoEmergenza':'','Zona':'','Automezzo':'', 'Nome':'', 'Cognome':'','NumeroDiTelefono':'','InformazioniAggiuntive':'','Tipo':'','Indirizzo':''};
let step1 = false;
let step2 = false;
let step3 = false;



function modifica(indiceSegnalazione){
    segnalazione = segnalazioni[indiceSegnalazione];
    console.log(segnalazione);
    // Disabilito il tasto dell'automezzo
    document.getElementById('btSelezionaAutomezzo').disabled = true;
    // Imposto i valori nei vari campi
    document.getElementById('labelAutomezzoSelezionato').innerHTML = "Automezzo selezionato: " + segnalazione.Automezzo;
    automezzo = segnalazione.Automezzo;
    document.getElementById('inputTipoDiEmergenza').value = segnalazione.Tipo;
    document.getElementById('inputIndirizzo').value = segnalazione.Indirizzo;
    document.getElementById('inputZona').value = segnalazione.Zona;
    document.getElementById('inputNomeSegnalatore').value = segnalazione.Nome;
    document.getElementById('inputCognomeSegnalatore').value = segnalazione.Cognome;
    document.getElementById('inputNumeroDiTelefonoSegnalatore').value = segnalazione.NumeroDiTelefono;
    document.getElementById('inputInformazioniAggiuntive').value = segnalazione.InformazioniAggiuntive;
    let selectGradoEmergenza = document.getElementById('selectGradoEmergenza');
    switch(segnalazione.GradoEmergenza){
        case 'Basso':
        selectGradoEmergenza.selectedIndex = 1;
        break;
        case 'Medio':
        selectGradoEmergenza.selectedIndex = 2;
        break;
        case 'Alto':
        selectGradoEmergenza.selectedIndex = 3;
        break;
        default:
        alert('Errore nel ripristino del grado della segnalazione.');
    }
    step1 = true;
    step2 = true;
    step3 = true;
}

function logout(){
    eliminaCookie('utente');
    window.location = "login.html";
}

var automezzi = leggiCookie('automezzi');
if(automezzi == null){
    automezzi = Array();
    automezzi[0] = {"ID":"0001","Automezzo":"Autoscala","Disponibilità":false};
    automezzi[1] = {"ID":"0002","Automezzo":"APS","Disponibilità":false};
    automezzi[2] = {"ID":"0003","Automezzo":"Autogrù","Disponibilità":false};
    automezzi[3] = {"ID":"0004","Automezzo":"Autoscala","Disponibilità":true};
    automezzi[4] = {"ID":"0005","Automezzo":"APS","Disponibilità":false};
    document.cookie = creaCookie('automezzi', automezzi);
}

function popolaTabellaAutomezzi(){
    let tabellaAutomezzi = document.getElementById('tabellaElencoAutomezzi');
    tabellaAutomezzi.innerHTML = "";
    let tempAutomezzo = null;
    for(let i = 0; i < automezzi.length; i++){
        tempAutomezzo = automezzi[i];
        //tabellaAutomezzi.innerHTML += "<tr><td>" + tempAutomezzo.ID + "</td><td>" + tempAutomezzo.Automezzo + "</td>";
        if(tempAutomezzo.Disponibilità){
            tabellaAutomezzi.innerHTML += "<tr style='cursor:pointer' onclick='selezionaAutomezzo(this)'><td>" + tempAutomezzo.ID + "</td><td>" + tempAutomezzo.Automezzo + "</td><td><img style='height: 32px; width: 32px' src='./Icons/cerchioVerde.png'></td></tr>";
            //tabellaAutomezzi.innerHTML += "<td><img style=\"height:24px; width:24px\" src=\"./Icons/cerchioVerde.png\"></img></td></tr>";
        }else{
            //tabellaAutomezzi.innerHTML += "<td><img style=\"height:24px; width:24px\" src=\"./Icons/cerchioRosso.png\"/></td></tr>";            
            tabellaAutomezzi.innerHTML += "<tr><td>" + tempAutomezzo.ID + "</td><td>" + tempAutomezzo.Automezzo + "</td><td><img style='height: 32px; width: 32px' src='./Icons/cerchioRosso.png'></td></tr>";            
        }
    }
}

function selezionaAutomezzo(tableRow){
    step1 = false;
    automezzo = tableRow.childNodes[0].textContent;
    document.getElementById('labelAutomezzoSelezionato').textContent = "Automezzo selezionato: " + automezzo;
    segnalazione['Automezzo'] = automezzo;
    document.getElementById('btCloseModalAutomezzi').click();
    step1 = true;

    return step1;
}

function bindDatiSoloSegnalazione(){
    step2 = false;
    tipoEmergenza = document.getElementById('inputTipoDiEmergenza').value.trim();
    if(tipoEmergenza.length == 0){
        document.getElementById('inputTipoDiEmergenza').value = tipoEmergenza;
        return false;
    }
    segnalazione['Tipo'] = tipoEmergenza;
    indirizzo = document.getElementById('inputIndirizzo').value.trim();
    if(indirizzo.length == 0){
        document.getElementById('inputIndirizzo').value = indirizzo;
        return false;
    }
    segnalazione['Indirizzo'] = indirizzo;
    gradoEmergenza = document.getElementById('selectGradoEmergenza').value;
    if(gradoEmergenza == -1){
        alert('Selezionare il grado di emergenza.');
        return false;
    }
    segnalazione['GradoEmergenza'] = gradoEmergenza;
    zona = document.getElementById('inputZona').value.trim();
    if(zona.length == 0){
        document.getElementById('inputZona').value = zona;
        return false;
    }
    segnalazione['Zona'] = zona;
    step2 = true;

    return step2;
}

function inviaDatiSoloSegnalazione(){
    if(!automezzo){
        alert('Bisogna selezionare l\'automezzo.');
        return false;
    }
    if(!bindDatiSoloSegnalazione()){
        return false;
    }
    alert('Dati della segnalazione inviati.');

}

function bindDatiSoloSegnalatore(){
    step3 = false;
    nome = document.getElementById('inputNomeSegnalatore').value.trim();
    if(nome.length == 0){
        document.getElementById('inputNomeSegnalatore').value = nome;
        return false;       
    }
    segnalazione['Nome'] = nome;
    cognome = document.getElementById('inputCognomeSegnalatore').value.trim();
    if(cognome.length == 0){
        document.getElementById('inputCognomeSegnalatore').value = cognome;
        return false;
    }
    segnalazione['Cognome'] = cognome;
    numeroDiTelefono = document.getElementById('inputNumeroDiTelefonoSegnalatore').value.trim();
    if(numeroDiTelefono.length == 0){
        document.getElementById('inputNumeroDiTelefonoSegnalatore').value = numeroDiTelefono;
        return false;
    }
    segnalazione['NumeroDiTelefono'] = numeroDiTelefono;
    step3 = true;

    return step3;
}

function inviaDatiSoloSegnalatore(){
    if(!step1){
        alert('Bisogna selezionare l\'automezzo');
        return false;
    }
    if(!step2){
        if(!bindDatiSoloSegnalazione()){
            alert('Bisogna compilare prima i dati sull\'emergenza.');
            return false;
        }
    }
    if(!step3)
        if(!bindDatiSoloSegnalatore()){
            alert('Bisogna compilare tutti i campi.');
            return false;
        }
    alert('Dati del segnalatore inviati.');
}

function bindTutto(){
    bindDatiSoloSegnalazione();
    bindDatiSoloSegnalatore();
}

function inviaInformazioniAggiuntive(){
    segnalazione.InformazioniAggiuntive = document.getElementById('inputInformazioniAggiuntive').value.trim();
    alert('Informazioni aggiuntive inviate con successo.');
    return true;
}

function inviaDati(){
    if(!step1){
        alert('Selezionare l\'automezzo.');
        return false;
    }
    if(!step2){
        if(!bindDatiSoloSegnalazione()){
            alert('Bisogna compilare tutti i campi.');
            return false;
        }
    }
    if(!step3){
        if(!bindDatiSoloSegnalatore()){
            alert('Bisogna compilare tutti i campi.');
            return false;
        }
    }

    segnalazione['InformazioniAggiuntive'] = document.getElementById('inputInformazioniAggiuntive').value.trim();

    document.getElementById('btCloseModalSegnalazione').click();

    if(segnalazione.ID.trim().length > 0){ // Vuol dire che sto modificando
        for(let i = 0; i < segnalazioni.length; i++){
            if(segnalazioni[i].ID == segnalazione.ID){
                bindTutto();
                segnalazioni[i] = segnalazione;
                console.log(segnalazioni);
                //document.cookie = creaCookie('segnalazioni', segnalazioni);
                alert('Modifica avvenuta con successo.');
                break;
            }
        }
    }else{ // Nuova segnalazione
        segnalazione['ID'] = creaID();
        segnalazione['Segnalazione'] = "Segnalazione " + (segnalazioni.length+1);
        segnalazioni.push(segnalazione);
        for(let i = 0; i < automezzi.length; i++){
            if(automezzi[i].ID == segnalazione.Automezzo){
                automezzi[i].Disponibilità = false;
                document.cookie = creaCookie('automezzi', automezzi);
                alert('Segnalazione inviata con successo.');
                break;
            }
        }

    }
    document.cookie = creaCookie('segnalazioni', segnalazioni);
    window.location.reload();
}

function creaID(){
    let prossimoID = segnalazioni.length+1;
    let intermedio = "";
    let ID = "S";
    if(prossimoID < 10){
        intermedio = "00";
    }else if(prossimoID > 9 && prossimoID < 100){
        intermedio = "0";
    }
    return ""+ID+""+intermedio+""+prossimoID+"";
}