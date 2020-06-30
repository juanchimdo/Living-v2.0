# LIVING v2.0

https://juanchimdo.github.io/Living-v2.0/

Trabajo práctico del DOM para agregar y quitar sillas de la mesa

Cómo funciona:

A diferencia de la v1.0, en este caso quería crear y agregar las sillas al DOM mediante JS.
Para esto usé una hoja de estilo más precaria, ubiqué la mesa y sillas manualmente (position: absolute) con una clase particular para cada silla ('silla1', 'silla2', etc...).

Hay 2 funciones: una para agregar sillas y otra para borrar, creando o eliminando los elementos 'img' del DOM respectivamente.

El programa cuenta a su vez con una lista (array) en la cual se encuentran guardadas las clases (strings) utilizadas para ubicar las sillas (una clase por silla, con su ubicación única en el living)

Al agregar una silla, se selecciona aleatoriamente un elemento de la lista (una clase) y se le agrega a un elemento img, al cual previamente se le agrego src=silla.png. Luego se inserta dentro de un div ('living') que contiene las imágenes.

Además, se le agrega un id=silla. Este id es útil a la hora de quitar sillas, ya que podemos hacer una lista de las sillas existentes y extraer su clase para volver a agregarla en la lista original de clases (ver función quitarSilla).

Para quitar las sillas se selecciona aleatoriamente una silla existente (a traves de su id), se detecta su clase, se la vuelve a agregar a la lista de clases para usarse en un futuro y se elimina el elemento img del div.
