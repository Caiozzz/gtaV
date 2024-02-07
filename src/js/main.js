const btn = document.querySelector('.btn-plataforma');
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

btn.addEventListener('click', ()=> {
   elementoPlataformas.classList.toggle('ativo');
})