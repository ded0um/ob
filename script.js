document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
 const revealEls=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});revealEls.forEach(el=>io.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
 const modal=document.querySelector('.photo-modal');
 if(modal){const modalImg=modal.querySelector('img');document.querySelectorAll('[data-enlarge]').forEach(img=>{img.addEventListener('click',()=>{modalImg.src=img.src;modalImg.alt=img.alt;modal.classList.add('open');modal.setAttribute('aria-hidden','false')})});const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src=''};modal.querySelector('button').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
 document.querySelectorAll('[data-share-facebook]').forEach(btn=>btn.addEventListener('click',()=>{const url=encodeURIComponent(window.location.href);window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'_blank','noopener,noreferrer,width=650,height=500')}));
});
