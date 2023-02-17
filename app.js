const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener("submit",function(e){
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    console.log(tweetForm.elements.userName.value);
    console.log(tweetForm.elements.tweet.value);
})