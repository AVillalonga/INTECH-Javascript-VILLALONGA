//Écrivez le code qui transforme tous les titres d’une page en majuscule, sans utiliser de CSS.

document.querySelectorAll("h1, h2, h3, h4, h5").forEach(el => {
    el.innerHTML = el.innerHTML.toUpperCase()
})