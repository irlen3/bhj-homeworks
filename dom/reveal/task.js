    const reveal = document.querySelectorAll('.reveal');
    let masReveal = Array.from(reveal);
    let lengthMas = masReveal.length;
    window.addEventListener('scroll', function() {
        for(let i=0; i<lengthMas; i++) {
            const elementTop = masReveal[i].getBoundingClientRect().top; 
            const elementBottom = masReveal[i].getBoundingClientRect().bottom; 
            const viewportHeight = window.innerHeight; // содержит текущую высоту видимой области внутри окна браузера 
        
            elementTop < viewportHeight && elementBottom > 0 ? masReveal[i].classList.add('reveal_active') : masReveal[i].classList.remove('reveal_active');
        }
        });
