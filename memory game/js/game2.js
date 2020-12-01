window.addEventListener("load", function () {
  let firstCard = null;
  let secoundCard = null;
  let sets = null;
  let number_of_card = null;
  let game_start_time = null;

  // start timer
  start_timer();

  // start card func
  const cards_element = document.getElementById("cards");
  cards_element.addEventListener("click", flip_card, false);
  number_of_card = cards_element.querySelectorAll(".card").length;

  // get games best time
  document
    .getElementById("best_time")
    .addEventListener("click", getBestTime, false);

  function start_timer() {
    game_start_time = new Date();
    setInterval(function () {
      $(".Timer").text(Math.floor((new Date() - game_start_time) / 1000));
    }, 1000);
  }

  function flip_card(event) {
    let card = event.target.closest(".card");
    if (!firstCard) {
      card.classList.add("flipped");
      firstCard = card;
      return;
    }
    if (!secoundCard) {
      card.classList.add("flipped");
      secoundCard = card;
    }

    setTimeout(() => {
      if (
        firstCard.querySelector(".front").src !==
        secoundCard.querySelector(".front").src
      ) {
        music("wrong");
        firstCard.classList.remove("flipped");
        secoundCard.classList.remove("flipped");
      } else {
        sets++;

        console.log();
        if (sets === number_of_card / 2) {
          music("win");

          //   set best time
          let game_time = Math.floor((new Date() - game_start_time) / 1000);
          console.log(game_time);
          var local_game_time =
            localStorage.getItem("game_time") !== null
              ? localStorage.getItem("game_time")
              : 50000000;
          if (local_game_time > game_time) {
            localStorage.setItem("game_time", game_time);
          }
        }
      }
      firstCard = null;
      secoundCard = null;
    }, 300);
  }

  function music(type) {
    console.log(type);
    var currect = new Audio("sound/right.mp3");
    var wrong = new Audio("sound/wrong.mp3");
    var win = new Audio("sound/win.mp3");
    switch (type) {
      case "currect":
        currect.play();
        break;

      case "wrong":
        wrong.play();
        break;

      case "win":
        win.play();
        break;
    }
  }

  function getBestTime() {
    let best_time = localStorage.getItem("game_time");
    document.getElementById("best_time_show").innerText = best_time + "Sec";
  }
});
