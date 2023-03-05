const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit",function(e){
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const userNameInput =tweetForm.elements.userName;
    const tweetInput =tweetForm.elements.tweet;
    addTweet(userNameInput.value,tweetInput.value);
    userNameInput.value ="";
    tweetInput.value ="";
    
})

const addTweet = (userName, tweet) =>{
    const newTweet = document.createElement('li');
    newTweet.append(`${userName}- ${tweet}`);
    tweetsContainer.append(newTweet);

}

tweetsContainer.addEventListener('click',(e)=>{
    console.dir(e.target);
    e.target.nodeName === 'LI' &&  e.target.remove();
})