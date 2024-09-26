//navigation bar effect on scroll
// theme button
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=> {
document.body.classList.toggle("dark-theme");
themeBtn.classList.toggle("sun");

localStorage.setItem("saved-theme", getCurrentTheme());
localStorage.setItem("saved-icon", getCurrentIcon());

});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? 'dark' : 'light' ;

const getCurrentIcon = () => themeBtn.classList.contains('sun')? "sun" : 'moon';

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");


if(savedTheme){
  document.body.classList[savedTheme=== "dark" ? "add" : "remove"]('dark-theme');
  themeBtn.classList[savedIcon==='sun'?'add':'remove']('sun');
}
//skills sections
const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  const content = this.parentNode;
  content.classList.toggle('skills_open');
  content.classList.toggle('skills_close');
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});


//responsive navigation menu toggle

const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');
menuBtn.addEventListener('click',() =>{
  navigation.classList.add('active');
});

closeBtn.addEventListener('click',() =>{
  navigation.classList.remove('active');
});


navItems.forEach((navItem) =>{
  navItem.addEventListener('click', ()=>{
    navigation.classList.remove('active');
  });
});

//scroll reveal animations
//common reveal options to create reveal options
ScrollReveal({ 
  reset: true,
distance:'60px',
duration: 2500,
delay:100
});

//target elements,and specift options to  create reveal animations 
ScrollReveal().reveal('.home .info h2, .section-title-1, .section-title-2', {delay:500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p,.about-info .btn', {delay:600, origin:'right'});
ScrollReveal().reveal('.home .info .btn, .about-info', {delay:700, origin:'bottom'});
ScrollReveal().reveal('.media-icons, .contact-left ,.contact-right, .description,.info group', {dela:500, origin:'left', interval:200});
ScrollReveal().reveal('.home-img,.about-img,.skills_header,.foote-copyright', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.skills_data,.work,.about-group,.skills_data', {delay:400, origin:'right'});


