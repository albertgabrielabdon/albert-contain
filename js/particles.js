const particleContainer = document.querySelector('.particles');
const numParticles = 50; 

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 50 + 5; // size between 5 and 55
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particleContainer.appendChild(particle);
    
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particle.style.animationDelay = Math.random() * 3 + 's'; 
}
