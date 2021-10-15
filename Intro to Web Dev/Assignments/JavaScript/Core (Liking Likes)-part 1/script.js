var count=1;
var likeButton=document.querySelector("#count");

function addBy1(){
    count++;
    likeButton.innerText= count + " like(s)";
    console.log(count);
}