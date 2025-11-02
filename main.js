// create 9 boxes
var BoardNumber = 0;
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
    if (newDiv.classList.contains("BoardNumber" + 1)) {
      console.log("Top Left");
    }
    if (newDiv.classList.contains("BoardNumber" + 2)) {
      console.log("Top Middle");
    }
    if (newDiv.classList.contains("BoardNumber" + 3)) {
      console.log("Top right");
    }
    if (newDiv.classList.contains("BoardNumber" + 4)) {
      console.log("Middle Left");
    }
    if (newDiv.classList.contains("BoardNumber" + 5)) {
      console.log("Middle Middle");
    }
    if (newDiv.classList.contains("BoardNumber" + 6)) {
      console.log("Middle Right");
    }
    if (newDiv.classList.contains("BoardNumber" + 7)) {
      console.log("Bottom Left");
    }
    if (newDiv.classList.contains("BoardNumber" + 8)) {
      console.log("Bottom Middle");
    }
    if (newDiv.classList.contains("BoardNumber" + 9)) {
      console.log("Bottom Right");
    }
  });
}
