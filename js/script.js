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

    document.getElementById("c1")
      .innerHTML = "❤️";

    document.querySelector("#photo1 img")
      .style.filter = "grayscale(0%)";
  }

  if(h2){

    document.getElementById("c2")
      .innerHTML = "❤️";

    document.querySelector("#photo2 img")
      .style.filter = "grayscale(0%)";
  }

  if(h3){

    document.getElementById("c3")
      .innerHTML = "❤️";

    document.querySelector("#photo3 img")
      .style.filter = "grayscale(0%)";
  }

  if(h1 && h2 && h3){

    const finalPhoto =
      document.getElementById("finalPhoto");

    finalPhoto.style.filter =
      "grayscale(0%)";

    finalPhoto.style.opacity = "1";

    finalPhoto.style.cursor = "pointer";

    finalPhoto.onclick = () => {

      alert("Parabéns ❤️");
    };
  }
}

update();

window.addEventListener(
  "pageshow",
  update
);
