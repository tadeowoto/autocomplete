 

const inputElement = document.querySelector('#main-input');
const textoSugerencia = document.querySelector('#sugerencia');
const palabras = [
    "hola", "mundo", "amigo", "amor", "casa", "perro", "gato", "familia", "trabajo", "escuela",
    "mañana", "noche", "tarde", "día", "sol", "luna", "estrella", "agua", "fuego", "tierra",
    "aire", "viento", "mar", "cielo", "árbol", "flor", "hoja", "vida", "muerte", "felicidad",
    "tristeza", "esperanza", "fuerza", "valor", "honor", "libertad", "paz", "guerra", "arte",
    "música", "poesía", "literatura", "ciencia", "historia", "tecnología", "ciudad", "pueblo",
    "campo", "montaña", "río", "lago", "bosque", "playa", "desierto", "amigo", "vecino",
    "compañero", "hermano", "hermana", "padre", "madre", "hijo", "hija", "abuelo", "abuela",
    "tío", "tía", "primo", "prima", "sobrino", "sobrina", "niño", "niña", "hombre", "mujer",
    "joven", "viejo", "anciano", "adulto", "bebé", "chico", "chica", "muchacho", "muchacha"
];


inputElement.addEventListener('input', (event) => {
    const valorInput = event.target.value.toLowerCase();
    const sugerencias = palabras.filter(palabra => palabra.startsWith(valorInput));
    console.log(sugerencias.length);
    if(sugerencias.length === palabras.length){
        textoSugerencia.innerHTML = 'esperando palabra ;)'
    }else{
        textoSugerencia.innerHTML = sugerencias;
    }
});


