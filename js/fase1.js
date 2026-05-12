function startPhase1(){

  const game =
    document.getElementById(
      "gameContainer"
    );

  const back =
    document.getElementById(
      "backLink"
    );

  const heart =
    document.createElement("div");

  heart.className =
    "phase1-heart";

  heart.innerHTML = "❤️";

  game.appendChild(heart);

  let x = 100;
  let y = 100;

  let vx = 6;
  let vy = 6;

  let moving = true;

  let holding = false;

  let seconds = 0;

  let interval;

  function animate(){

    if(moving){

      x += vx;
      y += vy;

      const w =
        window.innerWidth;

      const h =
        window.innerHeight;

      const size =
        heart.offsetWidth;

      if(
        x <= 0 ||
        x + size >= w
      ){
        vx *= -1;
      }

      if(
        y <= 0 ||
        y + size >= h
      ){
        vy *= -1;
      }

      heart.style.left =
        x + "px";

      heart.style.top =
        y + "px";
    }

    requestAnimationFrame(
      animate
    );
  }

  animate();

  function start(e){

    e.preventDefault();

    moving = false;

    holding = true;

    seconds = 0;

    clearInterval(interval);

    interval = setInterval(() => {

      if(!holding){

        clearInterval(interval);

        moving = true;

        return;
      }

      seconds++;

      if(seconds >= 5){

        clearInterval(interval);

        sessionStorage.setItem(
          "heart_1",
          "true"
        );

        heart.remove();

        back.style.display =
          "block";
      }

    },1000);
  }

  function stop(){
    holding = false;
  }

  heart.addEventListener(
    "touchstart",
    start,
    { passive:false }
  );

  heart.addEventListener(
    "touchend",
    stop
  );
}
