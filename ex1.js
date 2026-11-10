document.getElementById("titre-catalogue").textContent =
  "ISET Charguia - Catalogue Officiel";

const x = document.querySelector(".article.urgent");
x.setAttribute("style", "color:red;background-color:yellow;");

const y = document.querySelectorAll(".article");
for (const element of y) {
  console.log(element.textContent);
}
console.log("================");
const z = document.getElementsByName("statutArticle");
for (const element of z) {
  console.log(element.value);
}

const l = document.getElementById("liste-articles");
console.log("First Child: " + l.firstElementChild.textContent);
console.log("Last Child: " + l.lastElementChild.textContent);
console.log(
  "elemnt next to the first : " +
    l.firstElementChild.nextElementSibling.textContent,
);
console.log(
  "elemnt before the last: " +
    l.lastElementChild.previousElementSibling.textContent,
);
