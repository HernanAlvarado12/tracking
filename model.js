

document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        event.target.setAttribute('src', event.target.getAttribute('src').includes('hamburger')? './assets/close.svg' : './assets/hamburger.svg')
        document.querySelector('#navMenu').classList.toggle('hidden')
    }
})