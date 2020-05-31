
//function newaccounttype(){
document.getElementById("new").onclick = function(evt){
    evt.preventDefault();
    let accType = document.getElementById("acctype").value;
    sessionStorage.setItem("accounttype",accType);
    let depositamount = document.getElementById("depo").value;
    sessionStorage.setItem("depositamo",depositamount);
    window.location.href = "newaccount.html";
}
// }
// function newdeposit(){
// document.getElementById("new").onclick = function(evt){
//     evt.preventDefault();
//     let depositamount = document.getElementById("depo").value;
//     sessionStorage.setItem("depositamo",depositamount);
//     window.location.href = "newaccount.html";
// }
// }
