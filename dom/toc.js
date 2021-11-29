/**
 * Écrivez le code qui ressence tous les titres sur une page et qui ajoute une table des matières au début du <body>.
 */

const newOl = () => document.createElement('ol');

const newLi = (value) => {
    const li = document.createElement('li');
    li.innerHTML = value;
    return li;
}

const level = (nodeTitle) => parseInt(nodeTitle.nodeName.replace('H', ''));

const nodeTitleList = [...document.body.querySelectorAll('h1, h2, h3, h4, h5, h6')];

nodeTitleList.reduce((cursor, newNode, nodeIndex) => {
    let oldNode = nodeTitleList[nodeIndex - 1];
    
    if(oldNode == cursor) {
        cursor = newOl();
        const body = document.querySelector('body');
        cursor.append(newLi(oldNode.innerHTML));
        body.insertBefore(cursor, body.firstChild);
    }

    if(level(oldNode) < level(newNode)) {
        const newCursor = newOl();
        cursor.append(newCursor);
        cursor = newCursor;
    }
    
    if(level(oldNode) > level(newNode)) {
        cursor = cursor.parentNode;
    }
    
    cursor.append(newLi(newNode.innerHTML));
    return cursor;
});