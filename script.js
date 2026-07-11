// script.js
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.2});

sections.forEach(section=>{
  section.style.opacity='0';
  section.style.transform='translateY(40px)';
  section.style.transition='all .8s ease';
  observer.observe(section);
});

const year=document.getElementById('year');
if(year){
  year.textContent=new Date().getFullYear();
}

console.log('Portfolio Loaded Successfully');
