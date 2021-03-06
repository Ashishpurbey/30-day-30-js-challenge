function playSound(event){
    var audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key =document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event){
    if(event.propertyName!=='transform')return;
    this.classList.remove('playing');
}

var keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitioned",removeTransition));
window.addEventListener('keydown',playSound);
