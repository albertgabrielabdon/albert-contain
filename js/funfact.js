const funFactsElement = document.getElementById('fun-facts');
    const facts = [
        "I love coding! (sometimes)",
        "My sister is addicted to BINI.",
        "Buhay ay di Karera.",
        "I broke my computer once thanks to inefficient code.",
        "I'm also getting a lot of Moo Deng recently.",
        "I am confused.",
        "I have a long test tomorrow.",
        "I like Laufey, Charlie Burg, and NIKI - among others."
    ]; 
    let factIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < facts[factIndex].length) {
            funFactsElement.textContent += facts[factIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // typing speed
        } else {
            setTimeout(removeText, 2000); 
        }
    }

    function removeText() {
        if (charIndex > 0) {
            funFactsElement.textContent = facts[factIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(removeText, 50); // deleting speed
        } else {
            // Move to the next fact
            factIndex = (factIndex + 1) % facts.length; 
            setTimeout(typeText, 500); 
        }
    }

    window.onload = typeText;