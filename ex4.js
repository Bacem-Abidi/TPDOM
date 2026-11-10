function ajouterArticleBS() {
  val = document.getElementById("nouvelArticle").value;
  if (val == "") {
    alert("Champ ne doit pas être vide");
    return false;
  } else {
    const ul = document.getElementById("listeDynamique");
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center list-group-item-action py-3 position-relative";
    li.innerHTML = `<span class="fw-semibold text-dark">${val}</span>
<span class = "badge bg-danger rounded-pill px-3 py-2" style = "cursor:pointer;">
<i class = "bi bi-trash"> </i>Supprime
</span>`;
    li.onclick = function () {
      this.remove(); // Supprime directement le noeud clique
    };
    ul.prepend(li);
    document.getElementById("nouvelArticle").value = "";
    document.getElementById("nouvelArticle").focus();
    const counter = document.getElementById("counter");
    counter.textContent = ul.children.length;
  }
}
