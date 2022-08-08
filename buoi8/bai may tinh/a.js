function cong(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so1 = parseInt(so1);
    var so2 = parseInt(so2);
    var tong = +so1 + so2 ;
    var resut = document.getElementById("resut");
    resut.innerHTML = "ket qua la" + tong ;
}

function tru(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so1 = parseInt(so1);
    var so2 = parseInt(so2);
    var hieu = +so1 - so2 ;
    var resut = document.getElementById("resut");
    resut.innerHTML = "ket qua la" + " "+ hieu;
}