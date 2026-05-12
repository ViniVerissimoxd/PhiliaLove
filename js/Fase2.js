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
      (window.innerWidth - 60);

    let y =
      Math.random() *
      (window.innerHeight - 60);

    let speed =
      (Math.random() * 8) + 2;

    let vx =
      Math.random() > 0.5
      ? speed
      : -speed;

    let vy =
      Math.random() > 0.5
      ? speed
      : -speed;

    let dragging = false;

    function animate(){

      const size =
        small.offsetWidth;

      if(!dragging){

        x += vx;
        y += vy;

        /* BORDAS */

        if(
          x <= 0 ||
          x + size >= window.innerWidth
        ){
          vx *= -1;
        }

        if(
          y <= 0 ||
          y + size >= window.innerHeight
        ){
          vy *= -1;
        }

        /* COLISÃO COM CORAÇÃO GRANDE */

        const futureRect = {

          left:x,
          right:x + size,
          top:y,
          bottom:y + size
        };

        const bigRect =
          big.getBoundingClientRect();

        if(
          futureRect.left < bigRect.right &&
          futureRect.right > bigRect.left &&
          futureRect.top < bigRect.bottom &&
          futureRect.bottom > bigRect.top
        ){

          vx *= -1;
          vy *= -1;

          x += vx * 2;
          y += vy * 2;
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
      e => {

        e.preventDefault();

        dragging = true;
      },
      { passive:false }
    );

    small.addEventListener(
      "touchmove",
      e => {

        e.preventDefault();

        const t =
          e.touches[0];

        x = t.clientX - 20;
        y = t.clientY - 20;

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
            0.2 + (collected / 10);

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
      },
      { passive:false }
    );

    small.addEventListener(
      "touchend",
      () => {

        dragging = false;
      }
    );
  }
}
