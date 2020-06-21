$(function() {
    // "use strict";
    const list=[];
    $("#check").hide();
    $("#form").submit(function(event){
        event.preventDefault();
        let data = addtotable();
        // let currententry = objToString(data);
        // for (let i = 0; i < list.length; i++) {
        //     if(currententry === objToString(list[i])){
        //         $("#check").show();
        //         return;
        //     }
        // }
        for (let i = 0; i < list.length; i++) {
            if (areSame(data, list[i])) {
                $("#check").show();
                return;
            }
        }
        $("#check").hide();
        $("#first").val("");
        $("#last").val("");
        $("#phone").val("");
        list.push(data);
      refreshPage();
    })
    function objToString(data) {
        return `${data.firstname}${data.lastname}${data.phone}`;
    }
    function areSame(x, y) {
        if (x.firstname !== y.firstname) {return false;}
        if (x.lastname !== y.lastname){ return false;}
        if (x.phone !== y.phone) {return false;}
        return true;
    }
    function addtotable(){
        var firstName=$("#first").val();
        var lastName=$("#last").val();
        var phone=$("#phone").val();
        return{
            firstname:firstName,
            lastname:lastName,
            phone:phone
        }
    }
    function attachHandlers(){
        $(".delete").on("click", function(evt){
                let button = evt.target;
                let index = parseInt($(button).attr("id"));
                list.splice(index, 1);
                refreshPage();
            })
        $(".edite").on("click", function(evt){
            let button = evt.target;
            let index = parseInt($(button).attr("id"));
            let data = list[index];
            $("#first").val(data.firstname);
            $("#last").val(data.lastname);
            $("#phone").val(data.phone);
            $(`#${index}delete`).click();
        })
        
    }
    function refreshPage() {
        prepareTable();
        attachHandlers();
        
    }
    function prepareTable() {
        let tableBody = "";
        for (let i = 0; i < list.length; i++) {
            tableBody += `<tr><td>${list[i].firstname}</td><td>${list[i].lastname}</td><td>${list[i].phone}</td><td><button id=
            "${i}delete" class="delete">delete</button><button id=
            "${i}edite" class="edite">edite</button></td></tr>`
        }
        $("#contact_data").html(tableBody);
    }
})
