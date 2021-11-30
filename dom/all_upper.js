/** 
 * Écrivez le code qui transforme tous les textes d’une page (y compris le title), sans utiliser de CSS ni innerHTML.
 */

function textNodesUnder(node) {
  var all = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == 3) all.push(node);
    else all = all.concat(textNodesUnder(node));
  }
  return all;
}

textNodesUnder(document.body).forEach(nd => {
  nd.nodeValue = nd.nodeValue.toUpperCase()
});
