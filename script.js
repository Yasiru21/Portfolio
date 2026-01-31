const hamMenu = document.getElementById('hamMenu');
 const navigationLinks= document.querySelector('.links-nav') ;
 const contactForm =document.getElementById('contactForm') ;
const skills = document.querySelectorAll('.skill');

hamMenu.addEventListener('click',() => {
  navigationLinks.classList.toggle ('active') ;
  
    hamMenu.innerHTML = navigationLinks.classList.contains('active') 
  
        ? '<i class="fas fa-times"></i>' 
        :'<i class="fas fa-bars"></i>' ;
});

document.addEventListener('click', (e) => {
  
    if(!e.target.closest('.navbar-container') && navigationLinks.classList.contains('active'))
    {
      navigationLinks.classList.remove('active');
      
        hamMenu.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  
    anchor.addEventListener('click', function(e){
      
      e.preventDefault() ;
        
        const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo ({
                top:targetElement.offsetTop - 80,
                behavior:'smooth'
            }) ;
        }
      
    });
  
});

skills.forEach(skill =>{
    const skillLevel = skill.getAttribute('data-level');
    const skillBar=skill.querySelector('.skill-level') ;
    
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
              setTimeout(() => {
                
                     skillBar.style.width =`${skillLevel}%`;
                }, 200) ;
              observer.unobserve(entry.target) ;
            }
        });
    }, { threshold: 0.5 }) ;
    observer.observe(skill) ;
});
 
contactForm.addEventListener('submit', (e) => {
  
    e.preventDefault();
    
    const submitButton= contactForm.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = 'Message Sent!';
    submitButton.style.background = '#27ae60';
    
    contactForm.reset();
    
    setTimeout(() => {
      submitButton.innerHTML = originalText;
      
        submitButton.style.background ='';
    }, 3000) ;
});

window.addEventListener ('load', () =>  {
  
    document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s' ;
    
    setTimeout(()=> {
      document.body.style.opacity = '1' ;
    }, 100)
  ;
});