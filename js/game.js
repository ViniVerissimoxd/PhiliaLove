const params =
  new URLSearchParams(
    window.location.search
  );

const heartId =
  params.get("heart");

if(heartId === "1"){
  startPhase1();
}

if(heartId === "2"){
  startPhase2();
}

if(heartId === "3"){
  startPhase3();
}
