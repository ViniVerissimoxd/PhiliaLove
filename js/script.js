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

const music =
  document.getElementById(
    "phaseMusic"
  );

/* ESCONDER GAME */

game.style.display = "none";

/* FASE 1 */

if(phase === "1"){

  music.src =
    "./music/fase1-song.mp3";

  title.innerHTML =
    "Para você que sempre me acalmou";

  text.innerHTML =
    "Segure o coração desesperado.";
}

/* FASE 2 */

if(phase === "2"){

  music.src =
    "./music/fase2.mp3";

  title.innerHTML =
    "Para minha artista preferida";

  text.innerHTML =
    "Arraste as aquarelas fugitivas para pintar a imagem.";
}

/* FASE 3 */

if(phase === "3"){

  music.src =
    "./music/fase3-song.mp3";

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

    music.play();

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
