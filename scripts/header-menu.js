const button =  document.querySelector("#toggle-menu");
const menu = document.querySelector(".menu")

button.addEventListener('click',()=>{
    
    menu.classList.toggle('ativo')
})