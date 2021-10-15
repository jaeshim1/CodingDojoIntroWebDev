var thisBox = document.querySelector("#bluebox");
console.log(thisBox);

function changeToRed(){
    thisBox.style.backgroundColor="red";
}

function turnRed(element){
    element.style.color="cyan";
}

function turnBlue(element){
    element.style.color="blue";
}

function underline(element){
    if(element.style.textDecoration=="underline"){
        element.style.textDecoration="none";
    }    
    else (element.style.textDecoration="underline");
}


