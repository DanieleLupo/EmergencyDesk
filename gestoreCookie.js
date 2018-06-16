function creaCookie(nome, valore){
    return [nome,'=',JSON.stringify(valore),'; domain=', window.location.host.toString(),'; path=/;'].join('');
}

function leggiCookie(nome){
    var result = document.cookie.match(new RegExp(nome + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}

function eliminaCookie(nome){
    //document.cookie = [nome, '=; expires=Thu 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');    
    //document.cookie = nome + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = creaCookie(nome,null);
}

/*function logout(nome){
    eliminaCookie(nome);
    eliminaCookie('utenti');
    window.location.href = "./login.html";
}*/