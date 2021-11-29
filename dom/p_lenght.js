/**
 * Écrivez le code qui ajoute la longueur de chaque paragraphe (balise <p>) au début de celui-ci.
 */

document.querySelectorAll("p").forEach(el => { el.insertAdjacentHTML('afterbegin', `${el.innerHTML.length} `); });