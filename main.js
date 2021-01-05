const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const input = document.querySelector(".text_box");

function onAdd() {
  //1. Get value from input tag

  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. Create a new item ( text + delete btn )

  const item = createItem(text);

  //3. Insert new item in container

  list.appendChild(item);
  //4. Scrolling

  item.scrollIntoView({ block: "end" });

  //5. Initialize input

  input.value = "";
  input.focus();
}

let id = 0;

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
        <div class="item">
          <span class="item_name">${text}</span>
          <button class="item_delete"><i class="fas fa-trash" data-id=${id}></i></button>
        </div>
        <div class="item_divider"></div>
  `;
  id++;
  return itemRow;
}

btn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`); // Attribute selector
    toBeDeleted.remove();
  }
});
