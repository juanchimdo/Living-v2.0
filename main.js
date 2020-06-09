window.onload = function () {
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')

    let listaDeClases = ['silla1','silla2','silla3','silla4','silla5','silla6','silla7','silla8'] 

    function agregarSilla () {
        const vacios = listaDeClases.length
        if (vacios>0) {
            const random = Math.floor((Math.random() * vacios) + 1)-1
            const silla = document.createElement('img')
            silla.src = 'silla.png'
            silla.id = 'silla'
            silla.classList.add(listaDeClases[random])
            listaDeClases.splice(random,1)
            living.append(silla)
        }
    }

    function quitarSilla () {
        const ocupadas = document.querySelectorAll('#silla').length
        if (ocupadas>0) {
            const random = Math.floor((Math.random() * ocupadas) + 1)-1
            listaDeClases.push(document.querySelectorAll('#silla')[random].className)
            document.querySelectorAll('#silla')[random].remove()
        }
    }

    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}
