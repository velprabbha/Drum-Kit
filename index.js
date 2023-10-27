var numberOFbtn = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOFbtn;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  
    var btnInnerHtml = this.innerHTML;
    playBypressedKey(btnInnerHtml);
    buttonAnimation(btnInnerHtml);
});
}
  document.addEventListener("keypress",function(event){
    playBypressedKey(event.key);
  });

  function playBypressedKey(key){
    switch (key) {
      case "w":
        var mp31 = new Audio("./sounds/tom-1.mp3");
        mp31.play();
        break;
      case "a":
        var mp32 = new Audio("./sounds/tom-2.mp3");
        mp32.play();
        break;
      case "s":
        var mp33 = new Audio("./sounds/snare.mp3");
        mp33.play();
        break;
      case "d":
        var mp34 = new Audio("./sounds/tom-2.mp3");
        mp34.play();
        break;
      case "j":
        var mp35 = new Audio("./sounds/crash.mp3");
        mp35.play();
        break;
      case "k":
        var mp36 = new Audio("./sounds/kick-bass.mp3");
        mp36.play();
        break;
      case "l":
        var mp37 = new Audio("./sounds/tom-3.mp3");
        mp37.play();
        break;

        default: console.log(btnInnerHtml);
    }
  }

  function buttonAnimation(currentKey){
    var active = document.querySelector("."+currentKey);
        active.classList.add("pressed");

        setTimeout(function(){
          active.classList.remove("pressed");
        },100);
  }
//var audio = new Audio('./sounds/tom-1.mp3');
  //      audio.play();