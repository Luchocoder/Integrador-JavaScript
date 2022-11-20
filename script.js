
//definimos valor de ticket
const valorTicket = 200;

//definimos porcentajes de descuentos
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

//tomo valores
const cantidad = document.getElementById('validationCustom05');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('Calcular');
const botonReset = document.getElementById('reset');
const parrafo = document.getElementById('cartelTotal');


const formulario= document.getElementById('formulario');


//funcion total pagar

function totalPagar(){
  
  let totalValor = (cantidad.value) * valorTicket;
  
    if (categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);

    }else if (categoria.value == 3){
      totalValor = totalValor - (totalValor * descuentoJunior);
      
    }
    parrafo.textContent = `Total a pagar: $${totalValor}`;
    
  };
  



  formulario.addEventListener('submit',function(e){
      e.preventDefault();
      totalPagar
  })
  



  //boton calcular
  // botonCalcular.addEventListener('click',totalPagar);
  
  formulario.addEventListener('submit', totalPagar);
  
  
  
  //boton reset
  botonReset.addEventListener('click',()=>{
    parrafo.textContent='Total a pagar: $';
  });
  
  


  
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()