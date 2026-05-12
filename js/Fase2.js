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

    small.style.left =
      Math.random()*80 + "%";

    small.style.top =
      Math.random()*80 + "%";

    game.appendChild(small);

    small.addEventListener(
      "touchmove",
      e => {

        const t =
          e.touches[0];

        small.style.left =
          t.clientX + "px";

        small.style.top =
          t.clientY + "px";

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

            back.style.display =
              "block";
          }
        }
      }
    );
  }
}
