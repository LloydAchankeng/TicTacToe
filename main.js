// create 9 boxes
var BoardNumber = 0;

var Xslot = true;

for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "box";
  document.body.append(newDiv);
  const idk = document.createElement("idk");
  idk.className = "idk";
  BoardNumber++;
  newDiv.classList.add("BoardNumber" + BoardNumber);

  if (i % 3 === 0) {
    newDiv.classList.add("clear");
  }

  newDiv.addEventListener("click", function () {
    //Box1

    if (newDiv.classList.contains("BoardNumber" + 1)) {
      console.log("Top Left");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 1)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 1)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box2

    if (newDiv.classList.contains("BoardNumber" + 2)) {
      console.log("Top Middle");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 2)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 2)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box3

    if (newDiv.classList.contains("BoardNumber" + 3)) {
      console.log("Top right");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 3)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 3)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box4

    if (newDiv.classList.contains("BoardNumber" + 4)) {
      console.log("Middle Left");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 4)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 4)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box5

    if (newDiv.classList.contains("BoardNumber" + 5)) {
      console.log("Middle Middle");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 5)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 5)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box6

    if (newDiv.classList.contains("BoardNumber" + 6)) {
      console.log("Middle Right");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 6)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 6)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box7

    if (newDiv.classList.contains("BoardNumber" + 7)) {
      console.log("Bottom Left");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 7)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 7)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box8

    if (newDiv.classList.contains("BoardNumber" + 8)) {
      console.log("Bottom Middle");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 8)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 8)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
    //Box9

    if (newDiv.classList.contains("BoardNumber" + 9)) {
      console.log("Bottom Right");

      if (Xslot == true) {
        console.log("X");
        Xslot = false;

        if (newDiv.classList.contains("BoardNumber" + 9)) {
          newDiv.textContent = "X";
          newDiv.classList.add("unclickable-div");
        }
      } else {
        console.log("O");
        Xslot = true;

        if (newDiv.classList.contains("BoardNumber" + 9)) {
          newDiv.textContent = "O";
          newDiv.classList.add("unclickable-div");
        }
      }
    }
  });
}
