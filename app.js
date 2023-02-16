const form = document.querySelector("#shelterForm");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const userNameInput = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1];
    console.log(userNameInput.value, tweetInput.value);
})