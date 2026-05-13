window.addEventListener("load", () => {

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

  game.style.display = "none";

  /* FASE 1 */

  if(phase === "1"){

    if(music){
      music.src =
        "./music/fase1-song.mp3";
    }

    title.innerHTML =
      "Para você que sempre me acalmou";

    text.innerHTML =
      "Segure o coração desesperado.";
  }

  /* FASE 2 */

  if(phase === "2"){

    if(music){
      music.src =
        "./music/fase2-song.mp3";
    }

    title.innerHTML =
      "Para minha artista preferida";

    text.innerHTML =
      "Arraste as aquarelas fugitivas para pintar a imagem.";
  }

  /* FASE 3 */

  if(phase === "3"){

    if(music){
      music.src =
        "./music/fase3-song.mp3";
    }

    title.innerHTML =
      "Hora do lanche!";

    text.innerHTML =
      "Desvie do alimento que não gosta e pegue o que gosta.";
  }

  /* BOTÃO */

  button.onclick = () => {

    intro.style.display =
      "none";

    game.style.display =
      "block";

    if(music){

      music.play()
        .catch(() => {});
    }

    if(
      phase === "1" &&
      typeof startPhase1 === "function"
    ){
      startPhase1();
    }

    if(
      phase === "2" &&
      typeof startPhase2 === "function"
    ){
      startPhase2();
    }

    if(
      phase === "3" &&
      typeof startPhase3 === "function"
    ){
      startPhase3();
    }
  };

});
