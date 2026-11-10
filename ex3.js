function executerAction() {
  const nom = document.getElementById("nomEtudiant").value;
  if (nom == "") {
    alert("Nom ne doit pas être vide");
    return false;
  }
  const fileAttente = document.getElementById("fileAttente");
  const cible = document.getElementById("etud-cible");
  const li = document.createElement("li");
  li.textContent = nom;
  checkboxes = document.getElementsByName("actionDOM");
  if (checkboxes[0].checked) {
    fileAttente.prepend(li);
  } else if (checkboxes[1].checked) {
    fileAttente.append(li);
  } else if (checkboxes[2].checked) {
    cible.before(li);
  } else if (checkboxes[3].checked) {
    cible.after(li);
  } else if (checkboxes[4].checked) {
    cible.replaceWith(li);
  }
}

function reinitialiserFile() {
  document.getElementById(" fileAttente ").replaceChildren();
}
