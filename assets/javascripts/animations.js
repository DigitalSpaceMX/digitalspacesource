window.addEventListener('load', function () {
  var dots = document.getElementsByClassName("dot");
  console.log(dots);
  var posx;
  var posy;
  var origin;
  var speed;
  //helper function
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  for (let index = 0; index < dots.length; index++) {
    const dot = dots[index];
    posx = randomNumber(30, 80).toString() +"px ";
    posy = randomNumber(-330, 180).toString() + "px";
    origin = posx + posy;
    speed = randomNumber(30, 60);
    TweenMax.from(dot, speed, { rotation: 360, transformOrigin: origin, repeat: -1, ease: Linear.easeNone });
  }
})

