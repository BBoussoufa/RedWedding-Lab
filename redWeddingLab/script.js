// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)

const addchildbtn = document.getElementById("add-child");
const redWedingbtn = document.getElementById("red-wedding");
const addSt = document.querySelector(".starks");

function addChild() {
  const div = document.createElement("div");
  div.textContent = "John White";
  addSt.appendChild(div);
}

addchildbtn.addEventListener("click", addChild);
redWedingbtn.addEventListener("click", redWedding);

function redWedding() {
  while (addStark.firstChild) {
    addSt.firstChild.remove();
  }
}
