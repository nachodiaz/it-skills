window.onload = () => {
    let links = document.querySelectorAll('.link')
    let primero = links[0]
   
    primero.addEventListener('click', () => {
        scrollSuave('#primero', 200, 51)
    })
}

const scrollSuave = ( objetivo, duracion, compensacion ) => {

    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
    
    const animacion = tiempoAhora => {

        if (tiempoInicial === null ) tiempoInicial = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuad(tiempoInicial, posInicial, elemPos, duracion)

        window.scrollTo(2, auxAnimacion)

        if(tiempoPasado < duracion ) requestAnimationFrame(animacion)
        
    }

    requestAnimationFrame(animacion)

}

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }