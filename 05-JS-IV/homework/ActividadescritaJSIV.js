ActividadescritaJSIV
/* Un objeto es una estructura que contiene informacion acerca de un tema, la cual esta organizada en distintas
propiedades, cada una de ellas con un valor propio segun el tema, formando asi los pares clave:valor */
/* Una propiedad, o clave, o key, es una palabra que identifica un aspecto del objeto */
/* Un metodo, es una funcion que se encuentra dentro de un objeto en forma de propiedad. Nos permite 
correr subrutinas, pedazos de codigo, invocando la funcion como una propiedad del objeto. */
/*El bucle for...in, es la forma de recorrer, de iterar, todas las propiedades de un objeto.*/
/*La notacion de puntos es la forma mas facil de invocar una cierta propiedad de algun objeto, solo
hay que hacer objeto.propiedad1() y nos devolvera su valor. Por otro lado la notacion de corchetes funciona
 haciendo objeto[propiedad1], lo que nos devuelve su valor.
La ventaja de esto es que si nosotros en el global definimos una variable con el mismo nombre que la propiedad
podemos hacer, si var i = propiedad1, entonces objeto[i] nos devuelve el valor de propiedad1; pero si 
en ese mismo caso hacemos objeto.i(), nos va a devolver undefined, ya que esta forma toma literal que i es como
se llama la propiedad a invocar y se va a buscar dentro del objeto la propiedad i, que seguramente no este 
definida. No entiende que nosotros queremos hacer referencia al valor de la variable i, sino que entiende que 
buscamos la propiedad que se llama i */  