
function hamDoiTien(){
let amount = document.getElementById("a").value;


    let fCurrency = document.getElementById("b").value;


    let toCurrency = document.getElementById("c").value;



   let a = VND ;
   let b = USD ;
    let resut = 0;
    if (fCurrency === a && toCurrency === b){
        resut = amount/23000 ;
    }else if (fCurrency === b && toCurrency === a){
        resut = amount * 23000 ;
    }else {}
alert(amount);
}
