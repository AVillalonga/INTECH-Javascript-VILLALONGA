// Écrivez le code qui transforme tous les titres d’une page en majuscule, sans utiliser de CSS.
(function(el) { 
    el.childNodes.forEach(node => {
        node.nodeType === Node.TEXT_NODE ? 
            (node.nodeValue = node.nodeValue.toUpperCase()):
            arguments.callee(node)
    });
})(document.querySelector("body"));