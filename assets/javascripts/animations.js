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
    posx = randomNumber(0, 80).toString() +"px ";
    posy = randomNumber(-100, 180).toString() + "px";
    origin = posx + posy;
    speed = randomNumber(50, 100);
    TweenMax.from(dot, speed, { rotation: 360, transformOrigin: origin, repeat: -1, ease: Linear.easeNone });
  }
});


var element = document.getElementById("navbar");

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    element.classList.add("navbar-scrolled");
  } else {
    element.classList.remove("navbar-scrolled");
  }
});

