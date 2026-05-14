function startPhase1(){

  const game =
    document.getElementById(
      "gameContainer"
    );

  const back =
    document.getElementById(
      "backLink"
    );

  const timer =
    document.createElement("div");

  timer.id = "timer";

  timer.innerHTML = "0";

  game.appendChild(timer);

  const heart =
    document.createElement("div");

  heart.id = "heart";

  heart.innerHTML = "🚗";

  heart.style.position =
    "absolute";

  game.appendChild(heart);

  let x = 100;
  let y = 100;

  let vx = 18;
  let vy = 18;

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

    if(holding) return;

    moving = false;

    holding = true;

    seconds = 0;

    timer.innerHTML = "0";

    clearInterval(interval);

    interval = setInterval(() => {

      if(!holding){

        clearInterval(interval);

        moving = true;

        timer.innerHTML = "0";

        return;
      }

      seconds++;

      timer.innerHTML = seconds;

      if(seconds >= 5){

        clearInterval(interval);

        sessionStorage.setItem(
          "heart_1",
          "true"
        );

        timer.remove();

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
