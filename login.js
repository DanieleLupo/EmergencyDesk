

var utenti = Array();
let utente = {'Nome':'Daniele','Cognome':'Lupo','CF':'LPUDNL94D20A489M','ComuneDiNascita':'Atripalda','DataDiNascita':'20/04/1994','Indirizzo':'Via Traversa I','CAP':'83100','Cellulare':'3297270185','Email':'d.lupo1@studenti.unisa.it','CodiceOperatore':'0123456789','ZonaComando':'Avellino','Password':'Password'};
utenti.push(utente);

console.log(utenti);

function login(){
    // Il controllo dei campi viene fatto dall'HTML
    let codiceOperatore = document.getElementById('inputCodiceOperatore').value;
    let password = document.getElementById('inputPassword').value;

    // Cerco l'utente fra gli utenti
    let u;
    for(let i = 0; i < utenti.length; i++){
        //console.log(utenti[i]);
        u = utenti[i];
        //console.log(u);
        if(u.CodiceOperatore == codiceOperatore && u.Password == password){
            var date = new Date();
            var minutes = 60*8;
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            setCookie('utente',u, date);
            u = getCookie('utente');
            console.log(u.Nome);
        }
    }
}