function startPhase2(){

  const game =
    document.getElementById(
      "gameContainer"
    );

  const back =
    document.getElementById(
      "backLink"
    );

  const big =
    document.createElement("div");

  big.className =
    "big-heart";

  big.innerHTML = "🤍";

  game.appendChild(big);

  let collected = 0;

  for(let i = 0; i < 10; i++){

    const small =
      document.createElement("div");

    small.className =
      "small-heart";

    small.innerHTML = "❤️";

    game.appendChild(small);

    let x =
      Math.random() *
      (window.innerWidth - 50);

    let y =
      Math.random() *
      (window.innerHeight - 50);

    let vx =
      (Math.random() * 6) + 3;

    let vy =
      (Math.random() * 6) + 3;

    let dragging = false;

    function animate(){

      if(!dragging){

        x += vx;
        y += vy;

        if(
          x <= 0 ||
          x >= window.innerWidth - 40
        ){
          vx *= -1;
        }

        if(
          y <= 0 ||
          y >= window.innerHeight - 40
        ){
          vy *= -1;
        }

        small.style.left =
          x + "px";

        small.style.top =
          y + "px";
      }

      requestAnimationFrame(
        animate
      );
    }

    animate();

    small.addEventListener(
      "touchstart",
      () => {

        dragging = true;
      }
    );

    small.addEventListener(
      "touchmove",
      e => {

        const t =
          e.touches[0];

        x = t.clientX;
        y = t.clientY;

        small.style.left =
          x + "px";

        small.style.top =
          y + "px";

        const r1 =
          small.getBoundingClientRect();

        const r2 =
          big.getBoundingClientRect();

        if(
          r1.left < r2.right &&
          r1.right > r2.left &&
          r1.top < r2.bottom &&
          r1.bottom > r2.top
        ){

          small.remove();

          collected++;

          big.innerHTML = "❤️";

          big.style.opacity =
            collected / 10;

          if(collected >= 10){

            sessionStorage.setItem(
              "heart_2",
              "true"
            );

            big.remove();

            back.style.display =
              "block";
          }
        }
      }
    );

    small.addEventListener(
      "touchend",
      () => {

        dragging = false;
      }
    );
  }
}
