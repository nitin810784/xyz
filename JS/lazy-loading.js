document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll("img.lazy"),t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let a=e.target;a.src=a.dataset.src,a.classList.remove("lazy"),a.classList.add("lazy-loaded"),t.unobserve(a)}})});e.forEach(e=>{t.observe(e)})});