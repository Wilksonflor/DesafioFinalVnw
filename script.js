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
  // window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  // });
  