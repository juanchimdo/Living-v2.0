window.onload = function () {
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')
    const living = this.document.querySelector('.living')

    let listaDeClases = ['silla1','silla2','silla3','silla4','silla5','silla6','silla7','silla8'] //LISTA CON LAS CLASES

    function agregarSilla () {
        const vacios = listaDeClases.length                               //CALCULO LA CANTIDAD DE ESPACIOS VACIOS
        if (vacios>0) {                                                   //ME ASEGURO NO AGREGAR MAS DE LO POSIBLE
            const random = Math.floor((Math.random() * vacios) + 1)-1     //GENERO NUMERO RANDOM ENTRE 1 Y LOS ESPACIOS VACIOS. LE RESTO -1 PARA USARLO EN LOS INDICES
            const silla = document.createElement('img')                   //CREO IMAGEN
            silla.src = 'silla.png'                                       //AGREGO SRC
            silla.id = 'silla'                                            //AGREGO ID
            silla.classList.add(listaDeClases[random])                    //LE AGREGO UNA DE LAS CLASES DE LA LISTA, ELEGIDA ALEATORIAMENTE
            listaDeClases.splice(random,1)                                //QUITO LA CLASE ELEGIDA DE LA LISTA
            living.append(silla)                                          //AGREGO LA SILLA AL DOM
        }
    }

    function quitarSilla () {
        const ocupadas = document.querySelectorAll('#silla').length                     //CALCULO LA CANTIDAD DE ESPACIO OCUPADOS
        if (ocupadas>0) {                                                               //ME ASEGURO NO QUITAR MAS DE LO POSIBLE
            const random = Math.floor((Math.random() * ocupadas) + 1)-1                 //GENERO UN NUMERO RANDOM ENTRE 1 Y LOS ESPACIOS OCUPADOS. LE RESTO -1 PARA USARLO COMO INDICE
            listaDeClases.push(document.querySelectorAll('#silla')[random].className)   //ELIJO UNA SE LAS SILLAS PRESENTES, DETECTO SU CLASE Y LA VUELVO A AGREGAR A LA LISTA DE CLASES
            document.querySelectorAll('#silla')[random].remove()                        //ELIMINO EL ELEMENTO DEL DOM
        }
    }

    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}
