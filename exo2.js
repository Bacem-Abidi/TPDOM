function ajouterArticle() {
  val = document.getElementById("nouvelArticle").value;
  if (val == "") {
    alert("Champ ne doit pas être vide");
    return false;
  } else {
    const ul = document.getElementById("listeDynamique");
    const li = document.createElement("li");
    li.textContent = val;
    li.onclick = function () {
      this.remove(); // Supprime directement le noeud clique
    };
    ul.append(li);
    document.getElementById("nouvelArticle").value = "";
    document.getElementById("nouvelArticle").focus();
  }
}
