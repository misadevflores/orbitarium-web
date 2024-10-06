const hamburguesa = document.getElementById('hamburguesa');
const navegacion = document.getElementById('menu--navegacion');

hamburguesa.addEventListener('click', () => {
    navegacion.classList.toggle('resposive--dinamico');

    // Cambia el texto entre '+' y 'x'
    if (hamburguesa.textContent === '🚀') {
        hamburguesa.textContent = '🧑‍🚀';  // Cambia a 'x' cuando se hace clic
    } else {
        hamburguesa.textContent = '🚀';  // Vuelve a '+' cuando se hace clic de nuevo
    }
});

window.addEventListener('load',()=>{
    const contenedor = document.getElementById('contenedor');
    const contenedorPlanetas = document.getElementById('contenedor--planetas');
    const spinner = document.getElementById('spinner');
    setTimeout(() => {
        spinner.style.display = 'none';
        contenedor.style.display='block'
        contenedorPlanetas.style.display='block';
    }, 2000);
});

$(document).ready(function(){
    $('.anclaEfectoAnimada').click(function(e){       
      e.preventDefault();   //Para evitar el evento de un enlace normal
      var miAncla=$(this).attr('href'); //id del ancla
      $('body,html').stop(true,true).animate({        
        scrollTop: $(miAncla).offset().top
      },4000);
  
    });
  });