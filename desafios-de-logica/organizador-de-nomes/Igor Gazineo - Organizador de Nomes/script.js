const registrarButton = document.querySelector("#registrar");
const limparButton = document.querySelector("#limpar");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let names = [];

registrarButton.addEventListener("click", () => {
  if (input.value) {
    let namePatter = input.value;
    namePatter = namePatter[0].toUpperCase() + namePatter.slice(1);
    names.push(namePatter);
    input.value = "";
    ul.innerHTML = "";
    names.sort().forEach((name) => {
      ul.innerHTML += `<li>${name}</li>`;
    });
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let namePatter = input.value;
    namePatter = namePatter[0].toUpperCase() + namePatter.slice(1);
    names.push(namePatter);
    input.value = "";
    ul.innerHTML = "";
    names.sort().forEach((name) => {
      ul.innerHTML += `<li>${name}</li>`;
    });
    console.log(names);
  }
});

limparButton.addEventListener("click", () => {
  names = [];
  ul.innerHTML = "";
});
