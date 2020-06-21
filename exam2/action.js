$(function() {
    "use strict";
    const list=[];
    $(".err_msg").hide();
    //$("#contact_from").submit(function(event){
    $("#btn_add").click(function(event){
        //("#btn_add").click();
        //$("#contact_from").submit();
        if($("#first_name").val()==""||$("#last_name").val()==""||$("#phone").val()==""){
            $(".err_msg").show();
            event.preventDefault();
            return;
        }
       
        event.preventDefault();
        let data = addtotable();
        $(".err_msg").hide();
        $("#first_name").val("");
        $("#last_name").val("");
        $("#phone").val("");
        list.push(data);
      refreshPage();
    })
    function objToString(data) {
        return `${data.firstname}${data.lastname}${data.phone}`;
    }

    function addtotable(){
        var firstName=$("#first_name").val();
        var lastName=$("#last_name").val();
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
       
    }
    function refreshPage() {
        prepareTable();
        attachHandlers();
        
    }
    function prepareTable() {
        let tableBody =  "";
        for (let i = 0; i < list.length; i++) {
            tableBody += `<tr><td>${list[i].firstname}</td><td>${list[i].lastname}</td><td>${list[i].phone}</td><td><button id=
            "${i}delete" class="delete">delete</button></td></tr>`
           
        }
        $("#contacts").html(tableBody);
    }
})
