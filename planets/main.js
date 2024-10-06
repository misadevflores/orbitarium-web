// Asumiendo que ya tienes configurado Three.js y los planetas están en la escena.

// Variables necesarias
let selectedPlanet = null;
let popupContainer = document.getElementById('popup-container');
let popupContent = document.getElementById('popup-content');
let closeBtn = document.getElementById('popup-close-btn');

// Función para detectar el clic en un planeta
function onPlanetClick(event) {
    event.preventDefault();
    
    // Raycaster para detectar intersección
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    // Convertir las coordenadas del ratón al espacio de Three.js
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Detectar objetos intersectados
    let intersects = raycaster.intersectObjects(planets); // Suponiendo que 'planets' es un array con los planetas

    if (intersects.length > 0) {
        // Obtener el planeta clicado
        selectedPlanet = intersects[0].object;
        
        // Mostrar el popup con la información del planeta
        showPlanetInfo(selectedPlanet.name);
    }
}

// Función para mostrar el popup
function showPlanetInfo(planetName) {
    popupContent.innerHTML = getPlanetInfo(planetName);  // Obtener la información del planeta
    popupContainer.style.display = 'block';              // Mostrar el popup
}

// Función para obtener la información del planeta (puedes personalizar la información)
function getPlanetInfo(planetName) {
    let planetInfo = {
        'Mercury': 'Mercury is the smallest planet in our solar system.',
        'Venus': 'Venus has a thick atmosphere that traps heat.',
        'Earth': 'Earth is the only planet known to support life.',
        'Mars': 'Mars is home to the tallest volcano in the solar system.',
        'Jupiter': 'Jupiter is the largest planet in our solar system.',
        'Saturn': 'Saturn is famous for its stunning ring system.',
        'Uranus': 'Uranus rotates on its side, making it unique.',
        'Neptune': 'Neptune has the strongest winds in the solar system.'
    };
    return planetInfo[planetName] || 'No information available for this planet.';
}

// Event listener para cerrar el popup
closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Añadir el listener para los clics en la escena
window.addEventListener('click', onPlanetClick);

// HTML necesario para el popup (asegúrate de incluir esto en tu archivo HTML)
/*
<div id="popup-container" style="display:none;">
  <div id="popup-content"></div>
  <button id="popup-close-btn">Close</button>
</div>
*/

// Estilos CSS recomendados:
/*
#popup-container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  z-index: 9999;
}

#popup-close-btn {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
*/
