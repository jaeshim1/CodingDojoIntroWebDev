
    function userInput(){
        var myInputValue = document.getElementById("inputValue").value;
        alert("You are looking for " +myInputValue);
    }
    
    function hide(btn1){
        btn1.remove();
    }


    // Incremental hearts counter
    var image = document.querySelector("#heart");
    var counter = 0;

    function incrementCount(){
        counter++;
        // console.log(counter);
        

    }

    
    // image.onclick = function(){
    //     counter++;
    //     console.log(counter);
    // }
    


