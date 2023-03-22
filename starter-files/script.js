// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
const div = document.getElementById("answer");
function respuesta () {
    fetch (API_ENDPOINT)
    .then(answer => {
        return answer.json();
    } )
    .then ( leerRespuesta => {
        console.log(leerRespuesta.answer);
        div.innerHTML=leerRespuesta.answer
    })
  
}

const button = document.getElementById("button");
button.addEventListener("click", respuesta);

/* "Requieres estudiar un poco más los temas y practicarlos para que al ir codeando puedas ir platicando contigo misma el problema y puedas ir recordaando si se te olvida algo"

Retroalimentación de Emmanuel Saucedo*/

