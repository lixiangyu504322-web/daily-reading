const progress=document.querySelector('progress');
function updateProgress(){const range=document.documentElement.scrollHeight-innerHeight;progress.value=range>0?Math.min(100,100*scrollY/range):100;}
addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);document.addEventListener('toggle',updateProgress,true);updateProgress();
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('.toc a').forEach(a=>a.removeAttribute('aria-current'));document.querySelector(`.toc a[href="#${entry.target.id}"]`)?.setAttribute('aria-current','true');}}},{rootMargin:'-5% 0px -65% 0px'});
document.querySelectorAll('.chapter').forEach(section=>observer.observe(section));
