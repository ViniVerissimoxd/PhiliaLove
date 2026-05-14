function startPhase3(){

  const game =
    document.getElementById(
      "gameContainer"
    );

  const back =
    document.getElementById(
      "backLink"
    );

  const player =
    document.createElement("div");

  player.id =
    "playerHeart";

  player.innerHTML =
    "❤️";

  player.style.filter =
  "grayscale(100%)";

  game.appendChild(player);

  let progress = 0;

  let px =
    window.innerWidth / 2;

  let py =
    window.innerHeight - 200;

px = window.innerWidth / 2;
py = window.innerHeight * 0.7;
  
  player.style.left =
    px + "px";

  player.style.top =
    py + "px";

  /* MOVIMENTO */

  player.addEventListener(
    "touchmove",
    e => {

      e.preventDefault();

      const t =
        e.touches[0];

      px =
        t.clientX - 30;

      py =
        t.clientY - 30;

      player.style.left =
        px + "px";

      player.style.top =
        py + "px";
    },
    { passive:false }
  );

  /* OBSTÁCULOS */

  setInterval(() => {

    const obstacle =
      document.createElement("div");

    obstacle.className =
      "obstacle";

    obstacle.innerHTML =
      "🥥";

    game.appendChild(obstacle);

    let x =
      Math.random() *
      (window.innerWidth - 50);

    let y = -50;

    obstacle.style.left =
      x + "px";

    function animate(){

      y += 4;

      obstacle.style.top =
        y + "px";

      const r1 =
        obstacle.getBoundingClientRect();

      const r2 =
        player.getBoundingClientRect();

      if(
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
      ){

        obstacle.remove();

        progress--;

        if(progress < 0){
          progress = 0;
        }

        player.style.filter =
          `grayscale(${100 - (progress * 10)}%)`;

        return;
      }

      if(y > window.innerHeight){

        obstacle.remove();

        return;
      }

      requestAnimationFrame(
        animate
      );
    }

    animate();

  },1800);

  /* BRÓCOLIS */

  setInterval(() => {

    const broccoli =
      document.createElement("div");

    broccoli.className =
      "broccoli";

    broccoli.innerHTML =
      "🍇";

    game.appendChild(broccoli);

    let x =
      Math.random() *
      (window.innerWidth - 50);

    let y = -50;

    broccoli.style.left =
      x + "px";

    function animate(){

      y += 3;

      broccoli.style.top =
        y + "px";

      const r1 =
        broccoli.getBoundingClientRect();

      const r2 =
        player.getBoundingClientRect();

      if(
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
      ){

        broccoli.remove();

        progress++;

        if(progress > 10){
          progress = 10;
        }

        player.style.filter =
          `grayscale(${100 - (progress * 10)}%)`;

        if(progress >= 10){

          sessionStorage.setItem(
            "heart_3",
            "true"
          );

          player.remove();

          back.style.display =
            "block";
        }

        return;
      }

      if(y > window.innerHeight){

        broccoli.remove();

        return;
      }

      requestAnimationFrame(
        animate
      );
    }

    animate();

  },2500);
}
