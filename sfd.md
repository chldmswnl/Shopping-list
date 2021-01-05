# Shopping List 👩‍🦰

<img width="291" alt="2020-12-31 16;10;39" src="https://user-images.githubusercontent.com/63483751/103399310-d7e77000-4b83-11eb-9c54-104c4ac0eb5c.PNG">

> Used Language

- Javascript
- HTML
- CSS

> Main Functions

- Add a new item
- Delete items

> What I've learned

1. `input.focus()` - User doesn't have to click the input section again to enter the new item.
2. When Users hit enter button, it calls the function.

```
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
```

3. This project is focusing on DOM (Document Object Oriented).

- createElement
- setAttribute
- removeChild
- appendChild
- innerText
