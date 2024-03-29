const mainNav = document.querySelector('.main-nav');



const navToggle = document.querySelector('.mobile-menu');

navToggle.addEventListener('click', () => {
    //const mobileLink = document.querySelectorAll('.mobile-link');
    //const  mobileNav= mobileLink.getAttribute('data-open');
   
const visibility = mainNav.getAttribute('data-visible')
    
if (visibility === "false" ) {
     mainNav.setAttribute('data-visible', true);
     navToggle.setAttribute('aria-expanded', true);
     
   
     
} else if (visibility === "true" ) {
    mainNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded',false);
  
    
}


   
});










    //const closeLink= document.querySelectorAll('#mobile-link');
  //closeLink.addEventListener('click', (e) => {
    //const closeMenu = closeLink.setAttribute('area-expanded', false);
   // if (closeMenu === 'false'){
       // navToggle.close(); }


  //});




