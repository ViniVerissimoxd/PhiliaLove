const nav =
  performance.getEntriesByType("navigation")[0];

if(nav && nav.type === "reload"){
  sessionStorage.clear();
}

function update(){

  const h1 =
    sessionStorage.getItem("heart_1");

  const h2 =
    sessionStorage.getItem("heart_2");

  const h3 =
    sessionStorage.getItem("heart_3");

  if(h1){

  document
    .getElementById("photo1")
    .classList.add("completed");
}

if(h2){

  document
    .getElementById("photo2")
    .classList.add("completed");
}

if(h3){

  document
    .getElementById("photo3")
    .classList.add("completed");
}

  if(h1 && h2 && h3){

    document
  .getElementById("chains")
  .style.display = "none";

    const finalPhoto =
      document.getElementById("finalPhoto");

    finalPhoto.style.filter =
      "grayscale(0%)";

    finalPhoto.style.opacity = "1";

    finalPhoto.style.cursor = "pointer";

    finalPhoto.onclick = () => {

  window.location.href =
    "./final.html";

};
  }
}

update();

window.addEventListener("pageshow", () => {

  const heartsContainer =
    document.querySelector(".final-hearts");

  if (!heartsContainer) return;

  // evita criar vários intervalos
  if (window.heartsStarted) return;
  window.heartsStarted = true;

  function createHeart() {

    const heart =
      document.createElement("div");

    heart.classList.add("heart");

    heart.innerText = "❤️";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    heart.style.fontSize =
      (12 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  setInterval(createHeart, 200);
});
