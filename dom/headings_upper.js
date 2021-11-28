(function(el) { 
    el.childNodes.forEach(node => {
        node.nodeType === Node.TEXT_NODE ? 
            (node.nodeValue = node.nodeValue.toUpperCase()):
            arguments.callee(node)
    });
})(document.querySelector("body"));