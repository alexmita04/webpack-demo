function component() {
  const container = document.createElement("container");
  container.classList.add("container");

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "This is the about page generated reactivly";
  container.appendChild(description);

  return container;
}

export default component;
