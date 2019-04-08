let box = document.querySelector("#box-glow");
let speed = document.getElementById("speed");
let radius = document.getElementById("radius");
let stopper = document.getElementById("stopper");
let pulsation = document.getElementById("pulsation");
var temp_toggler = true;
var max_radius = 60;
var output = 0;
let jump = 3;
let jump_blur = 5;
let base = 0;
let blur_base = 10;

function glowing(){
    box.style.background = "linear-gradient("+(base+jump)+"deg, rgba(119,0,255,1) 0%, rgba(255,0,0,1) 15%, rgba(255,102,0,1) 29%, rgba(204,255,0,1) 46%, rgba(146,255,5,1) 52%, rgba(0,255,17,1) 67%, rgba(38,0,255,1) 84%, rgba(114,0,255,1) 99%, rgba(119,0,255,1) 100%)";
    if(pulsation.checked == true){
        box.style.filter = "blur("+max_radius+"px)";
        base +=jump;
        if(base==360){
            base = 0;
        }
    }
    else{
        box.style.filter = "blur("+(blur_base+jump_blur)+"px)";
        blur_base += jump_blur;
        base +=jump;

        if(base==360){
            base = 0;
        }
        else if(blur_base >= max_radius){
            jump_blur = -1;
        }
        else if(blur_base <= 10){
            jump_blur = 1;
        }
    }
}

let timer = setInterval(glowing,output);

speed.oninput = function() {
    clearInterval(timer);
    output = speed.value;
    timer=setInterval(glowing,output);
  };

radius.oninput = function() {
    max_radius = radius.value;
  };

stopper.addEventListener("click", function(){
    if(temp_toggler == true){
        clearInterval(timer);
        temp_toggler = false;
    }
    else{
        timer=setInterval(glowing,output);
        temp_toggler = true;
    }
});