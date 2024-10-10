const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    cursorOutline.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 50, fill: "forwards" });

    cursorGlow.style.left = `${x - 30}px`; 
    cursorGlow.style.top = `${y - 30}px`; 
});

const sectionAbout = document.querySelector('.section-about');

sectionAbout.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = 0.2; 
});

sectionAbout.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = 0; 
});
