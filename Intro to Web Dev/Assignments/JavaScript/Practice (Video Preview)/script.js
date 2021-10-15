console.log("page loaded...");

// to start the vedeo
function playVideo(element){
    element.play();
}

// to pause the video
document.querySelector("#myVideo").addEventListener("mouseout", function(){
    this.pause()
})
  

// function stopVideo(element){
// element.pause();
// }

// function pauseVideo(element){
//     var x = document.getElementById("myVideo").paused;
//     document.getElementById("myVideo").innerHTML = x;
// }


var x = document.getElementById("myVideo");

function mute(){
    x.muted=true;
}

