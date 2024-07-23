import mainImg from "./pizza-main.jpg";

function component() {
  const container = document.createElement("div");
  container.classList.add("container");

  const img = document.createElement("img");
  img.src = mainImg;
  container.appendChild(img);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae non a doloribus quae eligendi ex temporibus eaque. Veritatis, quam neque! Ipsam itaque placeat doloremque necessitatibus exercitationem beatae eius quisquam!";
  container.appendChild(description);

  console.log("alex este cel ");

  return container;
}

export default component;
