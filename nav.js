const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.mobile-menu');

navToggle.addEventListener('click', () => {
    const visibility = mainNav.getAttribute('data-visible');
    
if (visibility === "false" ) {
     mainNav.setAttribute('data-visible', true);
     navToggle.setAttribute('area-expanded', true);
} else if (visibility === "true" ) {
    mainNav.setAttribute('data-visible', false);
    navToggle.setAttribute('area-expanded',false);
}

});


