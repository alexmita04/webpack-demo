function component() {
  const container = document.createElement("div");
  container.classList.add("container");

  const list = document.createElement("ul");
  list.innerHTML = "<li>Pizza</li><li>Pasta</li><li>Lasagnia</li>";
  container.appendChild(list);

  return container;
}

export default component;
