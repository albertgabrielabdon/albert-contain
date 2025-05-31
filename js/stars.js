document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container');
  
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
  
      const size = Math.random() * 2 + 1; // size between 1 and 3
      const top = Math.random() * 100; // pos from 0% to 100%
      const left = Math.random() * 100; // pos from 0% to 100%
  
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
  
      starsContainer.appendChild(star);
  
    }
  
    function createShootingStar() {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
  

      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 2 + 1; 
  
      shootingStar.style.top = `${top}%`;
      shootingStar.style.left = `${left}%`;
      shootingStar.style.animation = `shoot ${duration}s linear infinite`;
  
      starsContainer.appendChild(shootingStar);
    }
  
    for (let i = 0; i < 70; i++) { // no of stars as needed, 300 if old, 100 if new.
      createStar();
    }
  
    // create shooting stars
    for (let i = 0; i < 10; i++) { // no of shooting stars
      createShootingStar();
    }
  
    // Add glow class to h1
    const headers = document.querySelectorAll('h1');
    headers.forEach(header => {
      header.classList.add('glow');
    });

  });
