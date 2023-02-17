const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets")
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
    const bTag = document.createElement('b');
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);

}