document.addEventListener("DOMContentLoaded", function () {
  const arrows = document.querySelectorAll(".menu-arrow");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      const contentId = this.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
      if (content) {
        if (expanded) {
          content.classList.remove("expanded");
          content.style.maxHeight = null;
        } else {
          content.classList.add("expanded");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  });
});
/* YA ME CANSEEEE */
window.addEventListener("load", function () {
    let lastScrollTop = 0;
    const topnav = document.getElementById("topnav"); /*define topnav internamente  */

    window.addEventListener("scroll", function () { //cada vez que se scrollea se activa 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; //dependiendo el buscador usa cuakquiera de als dos para saber los pixeles que bajo

        //compara la nueva posición del scroll con la anterior
        /*Si es mayor: está scrolleando hacia abajo - se oculta la topnav.
         Si no : está scrolleando hacia arriba - se muestra la topnav. */
        if (scrollTop > lastScrollTop) {
            // scrollea abajo, se va la topnav (le agrega el parametro hidden a topnav)
            topnav.classList.add("hidden");
        } else {
            // scrollea arriba, aparece la topnav (le quita el parametro hiddent topnav)
            topnav.classList.remove("hidden");
        }

        lastScrollTop = scrollTop; //actualiza la ultima posicion para poder comparar bien
    });
});


document.addEventListener('DOMContentLoaded', () => {
   
    const launchDateString = '';  // setea el dia y hora o dejalo vacio para no decidido aun. 
    // Usa el formato 2025-04-31T00:00:00 las horas(despues de T) 
    const counterElement = document.getElementById('launch-counter');
    const lastLaunchDateElement = document.getElementById('last-launch-date');
    
    if (!launchDateString) {
        counterElement.textContent = "Fecha no decidida aún";
    } else {
        const launchDate = new Date(launchDateString);
    
        // On page load, if launch date is in the past, update last launch date element
        const now = new Date();
        if (now >= launchDate && lastLaunchDateElement) {
            lastLaunchDateElement.textContent = launchDate.toISOString().split('T')[0];
        }
    
        function updateCountdown() {
            const now = new Date();
            const diff = launchDate - now;
    
            if (diff <= 0) {
                counterElement.textContent = "El lanzamiento ya ocurrio";
                clearInterval(intervalId);
    
                // Update last launch date and location automatically
                const lastLaunchLocationElement = document.getElementById('last-launch-location');
    
                if (lastLaunchDateElement) {
                    lastLaunchDateElement.textContent = launchDate.toISOString().split('T')[0];
                }
                if (lastLaunchLocationElement) {
                    // lastLaunchLocationElement.textContent = "Centro Espacial Kennedy";
                }
    
                return;
            }
    
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
    
            counterElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);
    }
    });

  
// Add event listener to check log links and show alert if not prepared
document.addEventListener("DOMContentLoaded", function () {
  const infoRight = document.querySelector(".info-right");
  if (infoRight) {
    const links = infoRight.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");
        if (!href || href.includes("placeholder-link")) {
          event.preventDefault();
          alert("este log aun no esta preparado");
        }
      });
    });
  }
});

// JavaScript to handle version selection and update displayed text dynamically

document.addEventListener("DOMContentLoaded", function () {
  const versionSelect = document.getElementById("version-select");
  const versionText = document.getElementById("version-text");
  //La informacion de la izquierda (esta) debe contener: Lugar, Hora, Mision, Version, como bullet points, un resumen pequeno de la mision y hasta abajo 
    //una vineta de estado (pendiente, finalizado, en progreso, en recoleccion, perdido) cada vineta tendra a su izquierda un circulo de distinto color
    //representando el estado (pendiente = naranja ! finalizado = verde ! perdido = rojo ! en progreso = amarillo en ! recolección = azul)

  const versionContents = {
    lanzamiento2: `
      <ul>
        <li><strong>Lugar:</strong> Por decidir</li>
        <li><strong>Hora:</strong> Por decidir</li>
        <li><strong>Misión:</strong> Por decidir</li>
        <li><strong>Versión:</strong> Por decidir</li>
      </ul>
      <p>Resumen: Mision no realizada aun</p>
      <div class="status-badge status-pendiente">
        <span class="status-circle"></span> Pendiente
      </div>
    `, 
    lanzamiento1: `
      <ul>
        <li><strong>Lugar:</strong> Ozumba de Alzate</li>
        <li><strong>Hora:</strong> 12:45:56</li>
        <li><strong>Misión:</strong> Recolectar humedad y temperatura sobre el volcan
        del popocateptl, probar resistencia del cubo</li>
        <li><strong>Versión:</strong> SURPONG-satV1</li>
      </ul>
      <p>Resumen: Lanzamiento exitoso del dispositivo. Logró llegar a la atmósfera donde se mantuvo un rato para finalmente descender en una zona cercana a la malinche y el popo, este lanzamiento tuvo lugar a principios de enero y aun a dia de hoy no se ha recuperado la sonda

</p>
      <div class="status-badge status-perdido">
        <span class="status-circle"></span> Perdido
      </div>
    `
  };

  versionSelect.addEventListener("change", function () {
    const selectedValue = versionSelect.value;
    versionText.innerHTML = versionContents[selectedValue] || "";
  });
});
// JavaScript to stack rectangles and show next on button click for paso-a-paso-test.html
let currentStep = 0;
const steps = document.querySelectorAll('.step-container');

function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });
    updateButtons();
}

function updateButtons() {
    const activeStep = steps[currentStep];
    const btnAnterior = activeStep.querySelector('.btn-anterior');
    const btnSiguiente = activeStep.querySelector('.btn-siguiente');
    if (btnAnterior) btnAnterior.style.display = currentStep === 0 ? 'none' : 'inline-block';
    if (btnSiguiente) btnSiguiente.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-block';
}

function attachButtonListeners() {
    steps.forEach((step, index) => {
        const btnAnterior = step.querySelector('.btn-anterior');
        const btnSiguiente = step.querySelector('.btn-siguiente');
        if (btnAnterior) {
            btnAnterior.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    updateSteps();
                }
            });
        }
        if (btnSiguiente) {
            btnSiguiente.addEventListener('click', () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });
        }
    });
}

attachButtonListeners();
updateSteps();
