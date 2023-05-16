const d = document;
const w = window;
const n = navigator;

let nav_respoonse = (btn, nav) => {
    $boton = d.querySelector(btn);
    $navegador = d.querySelector(nav);
    console.log($boton)
    console.log($navegador)
    d.addEventListener('DOMContentLoaded', (e) => {
        d.addEventListener('click', e => {

            if (e.target.matches('.hamburger *')) {
                $boton.classList.toggle('is-active');
                $navegador.classList.toggle('response-nav');
            }

        })

    })

}

nav_respoonse('.hamburger', '.navegador')


let carrusel = (contenedor, selector) => {
    let $contenedor = d.querySelector(contenedor)
    let $contenido = d.querySelectorAll(selector)
    let contador = 1;
    let intervalo = 7500;
    let width = $contenido[0].clientWidth
    console.log(width);
    console.log($contenido)
    d.addEventListener('DOMContentLoaded', () => {
        d.addEventListener('resize', e => {
            width = $contenido[0].clientWidth
        })

        let movimiento = () => {
            $contenedor.style.transform = `translateX(-${width * contador}px)`
            $contenedor.style.transition = `all 1s ease`
            contador += 1
        }
        setInterval(() => {
            movimiento();
            if (contador == $contenido.length + 1) {
                $contenedor.style.transform = `translateX(0px)`
                $contenedor.style.transition = `all .3s ease`
                contador = 1
            }
        }, intervalo);
    })



}
carrusel('.carrusel', '.info-carrusel')



const ScrollEspia = () => {

    const data = d.querySelectorAll('section[data-scroll]')
    const cb = (entries) => {

        entries.forEach(entri => {
            const id = entri.target.getAttribute("id")
            
            if (entri.isIntersecting) {
                console.log(id)
                d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add('active')
            } else {
                d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove('active')
            }

        })
    }



    const observer = new IntersectionObserver(cb, {
        rootMargin : '-280px'
    })
    data.forEach(ele => {
        observer.observe(ele)
    })

}
ScrollEspia()