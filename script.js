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

  if(!isInputVisible){
    const section = document.querySelector('.containerProducts')
    section.scrollIntoView({section: 'smooth'})
  }
  buscar.style.display = isInputVisible ? 'none' : 'block';
})

function filtrarProdutos() {
  const termoBusca = document.querySelector('#buscar').value.toLowerCase();
  const produtos = document.querySelectorAll('.boxProducts');

  produtos.forEach(produto => {
    const nomeProduto = produto.dataset.nome ? produto.dataset.nome.toLowerCase() : '';
    const match = nomeProduto.includes(termoBusca);

    if (match) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}


// Modal
document.getElementById('openModalBtn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});