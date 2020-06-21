
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
            let display = `<p> user name is ${user.username}</p><p>email is ${user.email}</p>` + 
            `<p> address: ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>`;
            $("#userInfoDisplay").html(display);
            getPosts();
        })
        .catch( err => {
            $("#userInfoDisplay").html(err.statusText);
        })
    }


    function getPosts() {
        fetch(url + `posts?userId=${userId}`)
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return Promise.reject({ status: response.status, statusText: response.statusText });
            }
        })
        .then(posts => {            
            let display = "";
            let post;
            for (post of posts) {
                console.log(post)
                display += `<div>
                <p> title: ${post.title}</p>
                <p> ${post.body} </p>
                <p><button id="${post.id}" class="comment-button">Show comments</button><p>
                <div id="${post.id}comment"></div>
                </div>`;
            }
            $("#postsDisplay").html(display);
            $(".comment-button").on('click', function(evt) {
                evt.preventDefault();
                let postId = $(evt.target).attr('id');
                fetch(url + `comments?postId=${postId}`)
                .then( response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        return Promise.reject({ status: response.status, statusText: response.statusText });
                }})
                .then(comments => {
                    let comment;
                    let commentDisplay = "";
                    for (comment of comments) {
                        commentDisplay += `<div>
                        <p> title: ${comment.name}</p>
                        <p> email: ${comment.email}</p>
                        <p> ${comment.body} </p>
                        </div>`;
                    }
                    $(`#${postId}comment`).html(commentDisplay);
                })
                .catch(err => {
                    $(`#${postId}comment`).html(err.statusText);
                })
            })
        })
        .catch( err => {
            $("#userInfoDisplay").html(err.statusText);
        })
 }
});

    