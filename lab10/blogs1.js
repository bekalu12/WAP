// $(function(){
//     let userID;
//     let url="http://jsonplaceholder.typicode.com/";
//     $("#userButton").click(getuserinfo);
//     function getuserinfo(){
//         userId=$("#userId").val();
//         fetch(url+"users/${userId}")
//         .then(response=>{
//             if(response.ok){
//                 return response.json();
//             }
//             else{
//                 return Promise.reject({status:response.status,statusText:response.statusText})
//             }

//         })
//         .then(user=>{
//              let display = `<p> user name is ${user.username}</p><p>email is ${user.email}</p>` + 
//             `<p> address: ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>`;
//             $("#userInfoDisplay").html(display);
//     })
    
//     }
// });
$(function() {
    "use strict";
    let url = "http://jsonplaceholder.typicode.com/";
    let userId;

    $("#userButton").click(getUserInfo);

    function getUserInfo() {
        userId = $("#userId").val();
        fetch(url + `users/${userId}`)
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return Promise.reject({ status: response.status, statusText: response.statusText });
        }})
        .then(user => {            
            let display = `<p> user name is: ${user.username}</p><p>email is: ${user.email}</p>` + 
            `<p> address: ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>`;
            $("#userInfoDisplay").html(display);
         
        })
        .catch( err => {
            $("#userInfoDisplay").html(err.statusText);
        })
    }});
