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
  document.createElement("img");

big.className =
  "big-heart";

big.src =
  "./img/photo2.jpg";

  game.appendChild(big);

  let collected = 0;

  for(let i = 0; i < 10; i++){

    const small =
      document.createElement("div");

    small.className =
      "small-heart";

    small.innerHTML = "🎨";

    game.appendChild(small);

    let x =
      Math.random() *
      (window.innerWidth - 60);

    let y =
      Math.random() *
      (window.innerHeight - 60);

    let speed =
  (Math.random() * 10) + 2;

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

        x =
          t.clientX - 20;

        y =
          t.clientY - 20;

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

          const gray =
  100 - (collected * 10);

big.style.filter =
  `grayscale(${gray}%)`;

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
