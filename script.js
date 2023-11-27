const nav = document.querySelector('.menu')

window.addEventListener('scroll', menufixo);

function menufixo() {
  const nav = document.querySelector('.menu');
  if (window.scrollY > 0) {
    nav.classList.add('fixednav');
  } else {
    nav.classList.remove('fixednav');
  }
}


function animateHeaderTransition() {
    requestAnimationFrame(menufixo);
  }
  window.addEventListener("scroll", animateHeaderTransition);
  
  menufixo();
 

const btnBuscar = document.querySelector('#btnBuscar').addEventListener('click', () =>{
  const buscar = document.querySelector('#buscar')
  const isInputVisible = window.getComputedStyle(buscar).display !== 'none';
  buscar.style.display = isInputVisible ? 'none' : 'block';
})