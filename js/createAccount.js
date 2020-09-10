function copy() {
    var textBox = document.getElementById("password");
    textBox.select();
    document.execCommand("copy");
}

function createAccount() {
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var jahrgangsstufe = document.getElementById("jahrgangsstufe").value;

    if(vorname.includes(",") || nachname.includes(",")){
        alert("Keine Kommas in den Eingaben");
        return;
    }

    if (!((jahrgangsstufe >> 0) > 0)){
        alert("Jahrgangsstufe muss eine natürliche Zahl sein");
        return;
    }

    var overlay = document.getElementById("createAccountOverlay");
    
    ajax({jahrgang: jahrgangsstufe, vorname: vorname, nachname: nachname}, "createAccount", function(res){
        var response = res;
        if(response == "User already existing"){
            alert("Der Benutzer existiert bereits");
            return;
        }
        document.getElementById("password").value = response;
        document.getElementById("output").style.display = "block";
    }, null, overlay);
}