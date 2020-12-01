window.addEventListener("load", function () {
  let App = document.querySelector("#app");

  function game() {
    createTable();
  }

  function createTable() {
    let game = document.createElement("div");
    game.innerHTML = `<div>
    

    <div class="board">
        <div class="that this1">
            <img class="span-img" src="https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png" alt="Image Title"/>
            <span class="colorblack">43</span>
        </div>
        <div class="that this2">
            <img class="span-img" src="https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png" alt="Image Title"/>
            <span class="colorblack">43</span>
        </div>
        <div class="that this3">
            <img class="span-img" src="https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png" alt="Image Title"/>
            <span class="colorblack">43</span>
        </div>
        <img class="money1" src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png" alt="Image Title"/>
        <img class="money2" src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png" alt="Image Title"/>
        <img class="money3" src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png" alt="Image Title"/>
    </div>
    <img src="https://www.nicepng.com/png/detail/189-1898993_poker-table-png-poker-table-online.png" alt="Image card"/>


    </div>`;
    App.appendChild(game);
  }

  game();
});
