const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const sortUp = document.getElementById("sortUp");
const sortDown = document.getElementById("sortDown");
const shoppingList = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addToList();
});

function addToList() {
  let itemText = input.value;

  if (itemText) {
    shoppingList.push(itemText);

    createElements();
  }
}

function createElements() {
  list.innerHTML = "";
  for (let i = 0; i < shoppingList.length; i++) {
    let itemText = shoppingList[i];
    const itemElement = document.createElement("li");

    itemElement.innerText = itemText;
    // Left-Click Bought Toggle

    itemElement.addEventListener(
      "click",
      () =>
        (itemElement.innerHTML = `${itemText} <i class="fas fa-check"></i> `)
    );
    // Right-Click Delete Item
    itemElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      itemElement.remove();
    });

    list.appendChild(itemElement);

    input.value = "";
  }
}

sortUp.addEventListener("click", sortingUp);

function sortingUp() {
  shoppingList.sort();
  createElements();
}

sortDown.addEventListener("click", sortingDown);

function sortingDown() {
  shoppingList.sort();
  shoppingList.reverse();
  createElements();
}
