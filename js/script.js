const nav =
  performance
    .getEntriesByType(
      "navigation"
    )[0];

if(nav && nav.type === "reload"){

  sessionStorage.removeItem(
  "heart_1"
);

sessionStorage.removeItem(
  "heart_2"
);

sessionStorage.removeItem(
  "heart_3"
);
}

function update(){

  const h1 =
    sessionStorage.getItem(
      "heart_1"
    );

  const h2 =
    sessionStorage.getItem(
      "heart_2"
    );

  const h3 =
    sessionStorage.getItem(
      "heart_3"
    );

  if(h1){

    document
      .getElementById("c1")
      .innerHTML = "❤️";

    document
      .getElementById("photo1")
      .classList.add(
        "completed"
      );
  }

  if(h2){

    document
      .getElementById("c2")
      .innerHTML = "❤️";

    document
      .getElementById("photo2")
      .classList.add(
        "completed"
      );
  }

  if(h3){

    document
      .getElementById("c3")
      .innerHTML = "❤️";

    document
      .getElementById("photo3")
      .classList.add(
        "completed"
      );
  }

  if(h1 && h2 && h3){

    document
      .getElementById("chains")
      .style.display = "none";

    const finalPhoto =
      document.getElementById(
        "finalPhoto"
      );

    finalPhoto.style.filter =
      "grayscale(0%)";

    finalPhoto.style.opacity =
      "1";

    finalPhoto.style.cursor =
      "pointer";

    finalPhoto.onclick = () => {

      window.location.href =
        "./final.html";
    };
  }
}

update();

/* MÚSICA */

window.addEventListener(
  "pageshow",
  () => {

    const music =
      document.getElementById(
        "bgMusic"
      );

    if(music){

      music.play()
        .catch(() => {});
    }
  }
);

/* pre-menu */

window.addEventListener(
  "load",
  () => {

    const enterButton =
      document.getElementById(
        "enterButton"
      );

    const startScreen =
      document.getElementById(
        "startScreen"
      );

    const bgMusic =
      document.getElementById(
        "bgMusic"
      );

    if(
  sessionStorage.getItem(
    "entered"
  )
){

  startScreen.style.display =
    "none";

  if(bgMusic){

    bgMusic.play()
      .catch(() => {});
  }
    }

    if(enterButton){

      enterButton.onclick =
        () => {

        if(bgMusic){

          bgMusic.play()
            .catch(() => {});
        }

          sessionStorage.setItem(
  "entered",
  "true"
);
          
        startScreen.style.display =
          "none";
      };
    }
  }
);
