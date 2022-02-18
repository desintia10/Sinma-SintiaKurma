const navSlide = () => {
    const titik = document.querySelector('.titik');
    const nav = document.querySelector('.ul-kurma');
    const navLinks = document.querySelectorAll('.ul-kurma li');

    
    titik.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

         //Animated link
            navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         });

         //titik animation
         titik.classList.toggle('toggle');
    });

   
}

navSlide();