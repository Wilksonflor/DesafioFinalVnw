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
