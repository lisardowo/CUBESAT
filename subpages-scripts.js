// Toggle functionality for custom large rectangle menu in Versiones.html

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



