const header = document.querySelector('header');

const maxAsteroids = 6; 
let activeAsteroids = 0; 

function createAsteroid() {
    if (activeAsteroids >= maxAsteroids) return;

    const asteroid = document.createElement('div');
    asteroid.classList.add('asteroid');

    const asteroidImage = document.createElement('img');
    asteroidImage.src = 'images/ASTEROID.png'; 
    asteroidImage.alt = 'Asteroid';
    asteroidImage.style.width = 'auto'; 
    asteroidImage.style.height = '50%'; 

    const randomHeight = Math.random() * 500 + 50; 
    const randomTop = Math.random() * (header.clientHeight)/4; 
    const randomAnimationDuration = Math.random() * 30 + 30; 

    asteroid.style.height = `${randomHeight}px`;
    asteroid.style.top = `${randomTop}px`;
    asteroid.style.animationDuration = `${randomAnimationDuration}s`;
    asteroid.style.left = '100%'; 

    activeAsteroids++;
    asteroid.appendChild(asteroidImage);
    header.appendChild(asteroid); 

    asteroid.addEventListener('animationend', () => {
        asteroid.remove();
        activeAsteroids--; 
    });
}

setInterval(createAsteroid, 5000); // control spawn rate
