const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainContainer = document.getElementById('mainContainer');
const thankYouDiv = document.getElementById('thankYou');
const music = document.getElementById('music');

let yesButtonSize = 16; // Tamaño inicial del botón "Sí"

// Función para aumentar el tamaño del botón "Sí" cuando se presiona "No"
noButton.addEventListener('click', () => {
    yesButtonSize += 5;
    yesButton.style.fontSize = `${yesButtonSize}px`;
});

// Función para mostrar la segunda ventana y reproducir la canción
yesButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    thankYouDiv.style.display = 'block';
    music.play();
});
