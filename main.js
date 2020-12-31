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

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const span = document.createElement("span");
  span.setAttribute("class", "item_name");
  span.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener("click", () => {
    list.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");

  item.appendChild(span);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
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
