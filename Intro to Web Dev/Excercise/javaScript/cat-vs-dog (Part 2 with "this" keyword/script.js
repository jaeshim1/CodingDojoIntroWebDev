var animalImg=document.querySelector ("#fav-animal"); // "this" keyword saves me from having variables like this
console.log(animalImg);


function pickCat(element){
    // console.log(element.style);
    // element.style.backgroundColor="goldenrod";
    element.remove(); // this hides cat button
    animalImg.src="cat.jpeg";
    // console.log(animalImg.src);
}

function pickDog(element){
    console.log(element.classList);
    element.classList.add("btn");
    animalImg.src="dog.jpeg";
    // console.log(animalImg.src);
}