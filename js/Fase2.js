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

      if(
        !dragging &&
        !small.dataset.done
      ){

        x += vx;
        y += vy;

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

        if(small.dataset.done){
          return;
        }

        dragging = true;
      },
      { passive:false }
    );

    small.addEventListener(
      "touchmove",
      e => {

        e.preventDefault();

        if(small.dataset.done){
          return;
        }

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

          dragging = false;

          small.dataset.done =
            "true";

          vx = 0;
          vy = 0;

          const angle =
            Math.random() *
            Math.PI * 2;

          const radius = 80;

          const centerX =
            window.innerWidth / 2;

          const centerY =
            window.innerHeight / 2;

          x =
            centerX +
            Math.cos(angle) *
            radius;

          y =
            centerY +
            Math.sin(angle) *
            radius;

          small.style.left =
            x + "px";

          small.style.top =
            y + "px";

          small.style.pointerEvents =
            "none";

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
