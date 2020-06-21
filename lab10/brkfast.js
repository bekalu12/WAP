$(function() {
    "use strict";
   //const list=[];
   const url = "http://localhost:8085/lab12_war";
   $("#check").hide();
   $("#form").submit(function(event){
       event.preventDefault();
       let name = $("#name1").val();
       let description = $("#des1").val();
       let price = $("#price1").val();
       let mealType = $("#mealType").val();
       const food = {
           "foodId": -1,
           "name" : name,
           "description" : description,
           "price" : price,
           "mealType": mealType
       }
       fetch(url + "/add-food", {
           method: "post",
           body: JSON.stringify(food),
           headers: {
               "Content-Type": "application/json"
           }
       }).then(response => {
           if (response.ok) {
               return response.json();
           } else {
               return Promise.reject({ status: response.status, statusText: status.statusText})
           }
       }).then(foodItems => {
           prepareTable(foodItems);
       }).catch(err => {
           console.log(err.statusText);
       })
//


       $("#check").hide();
       $("#name1").val("");
       $("#des1").val("");
       $("#price1").val("");
       $("#mealType").val("");
       //list.push(data);
       //refreshPage();
   })
////

   loadTable();
   function loadTable() {
       fetch(url + "/food?type=all")
       .then(response => {
           if (response.ok) {
               return response.json();
           } else {
               return Promise.reject({ status: response.status, statusText: status.statusText})
           }
       }).then(foodItems => {
           prepareTable(foodItems);
       }).catch(err => {
           console.log(err.statusText);
       })
   }
   function prepareTable(foodItems) {
       let tableBody = "";
               for (let item of foodItems) {

                   tableBody += `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td><td>${item.mealType}</td><td>
                               <button id="${item.foodId}delete" class="delete">delete</button>
                               <button id="${item.foodId}edite" class="edite">edite</button></td></tr>`

               }

               $("#food_list").html(tableBody);
   }
})
// function areSame(x, y) {
//     if (x.foodname !== y.foodname) {return false;}
//     if (x.fooddesc !== y.fooddesc){ return false;}
//     if (x.price !== y.price) {return false;}
//     return true;
// }

// function attachHandlers(){
//     $(".delete").on("click", function(evt){
//         let button = evt.target;
//         let index = parseInt($(button).attr("id"));
//         list.splice(index, 1);
//         refreshPage();
//     })
//     $(".edite").on("click", function(evt){
//         let button = evt.target;
//         let index = parseInt($(button).attr("id"));
//         let data = list[index];
//         $("#name1").val(data.foodname);
//         $("#des1").val(data.fooddesc);
//         $("#price1").val(data.price);
//         $("#mealType").val(data.mealType);
//         $(`#${index}delete`).click();
//     })
//
// }
// function refreshPage() {
//     prepareTable();
//     attachHandlers();
// }
///
// for (let i = 0; i < list.length; i++) {
//     if (areSame(data, list[i])) {
//         $("#check").show();
//         return;
//     }
// }