const accountInfoList = [];
(function() {
    "use strict";
    document.getElementById("new").onclick = function(evt){
        evt.preventDefault();
        accountInfoList.push(createAccount());
        document.getElementById("output").innerHTML = "";
        for (let i = 0; i < accountInfoList.length; i++) {
            document.getElementById("output").innerHTML += 
            `Account name: ${accountInfoList[i].name} and balance: ${accountInfoList[i].balance} \n`; 
        }
    }
    const createAccount = function() {
        let accountName = document.getElementById("acctype").value;
        let depositAmount = document.getElementById("depo").value;
    
        return {
            name : accountName,
            balance : depositAmount
        }
    }
})();
