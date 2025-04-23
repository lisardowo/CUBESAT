/* YA ME CANSEEEE */
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

// aparece y desaparece las flashcards cuando se escrollea
window.addEventListener("load", function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% de la seccion visible
    };
//funcion para desaparecer y aparecer
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const rect = entry.target.querySelector(".color-rectangle");
            if (entry.isIntersecting) {
                rect.style.opacity = "1"; //cuando entre a la seccion muestra la flashcard
                rect.style.transform = "translateY(0)";
                rect.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            } else {
                rect.style.opacity = "0";// si no: oculta la flashcard
                rect.style.transform = "translateY(50px)";
                rect.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            }
        });
    };
//desaparecer los rectangulos al abrir la pagina
    const observer = new IntersectionObserver(callback, options);
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const rect = section.querySelector(".color-rectangle");
        if (rect) {
            //esconde los rectangulos al iniciar
            rect.style.opacity = "0";
            rect.style.transform = "translateY(50px)";
            observer.observe(section);
        }
    });
});
//no me voy a molestar en explicarlo, la mitad ni jala como deberia pero cumple su funcion
//PXGN