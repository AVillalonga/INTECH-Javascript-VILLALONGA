document.querySelectorAll("p").forEach(el => {
    el.insertAdjacentHTML('afterbegin', `${el.innerText.length}` )
})