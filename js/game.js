const params =
  new URLSearchParams(
    window.location.search
  );

const phase =
  params.get("heart");

const title =
  document.getElementById(
    "phaseTitle"
  );

const text =
  document.getElementById(
    "phaseText"
  );

const button =
  document.getElementById(
    "startButton"
  );

const intro =
  document.getElementById(
    "introScreen"
  );

const game =
  document.getElementById(
    "gameContainer"
  );

/* ESCONDER GAME */

game.style.display = "none";

/* TEXTOS */

if(phase === "1"){

  title.innerHTML =
    "Para você que sempre me acalmou";

  text.innerHTML =
    "Segure o coração desesperado.";

}

if(phase === "2"){

  title.innerHTML =
    "Para minha artista preferida";

  text.innerHTML =
    "Arraste as aquarelas fugitivas para pintar a imagem.";

}

if(phase === "3"){

  title.innerHTML =
    "Hora do lanche!";

  text.innerHTML =
    "Desvie do alimento que não gosta e pegue o que gosta.";

}

/* COMEÇAR */

button.addEventListener(
  "click",
  () => {

    intro.style.display =
      "none";

    game.style.display =
      "block";

    if(phase === "1"){
      startPhase1();
    }

    if(phase === "2"){
      startPhase2();
    }

    if(phase === "3"){
      startPhase3();
    }
  }
);
