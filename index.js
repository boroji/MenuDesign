const menu = document.querySelector('button');
const sections = document.querySelectorAll('main section');
const navigation = document.querySelector('nav');

menu.addEventListener('click', () => {
    navigation.classList.toggle('nav-active')
    sections.forEach((i) => {
        i.style.display = 'block'
        i.classList.toggle('active')
        i.classList.toggle('closed')
    })
})