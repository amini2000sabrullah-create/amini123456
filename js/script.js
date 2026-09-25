// header scroll state
const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>40)});

// mobile menu
const burger=document.getElementById('burgerBtn'),menu=document.getElementById('mobileMenu');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// scroll reveal
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// animated counters
const counters=document.querySelectorAll('.stat-num');
const cio=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target, target=+el.dataset.target; let cur=0;
      const step=Math.max(1,Math.floor(target/40));
      const tick=()=>{ cur+=step; if(cur>=target){el.textContent=target+'+';} else {el.textContent=cur; requestAnimationFrame(()=>setTimeout(tick,20));} };
      tick();
      cio.unobserve(el);
    }
  });
},{threshold:.5});
counters.forEach(c=>cio.observe(c));

// portfolio filter
const fbtns=document.querySelectorAll('.filter-btn'), fcards=document.querySelectorAll('.folio-card');
fbtns.forEach(b=>b.addEventListener('click',()=>{
  fbtns.forEach(x=>x.classList.remove('active')); b.classList.add('active');
  const f=b.dataset.f;
  fcards.forEach(c=>{ c.style.display=(f==='all'||c.dataset.cat===f)?'block':'none'; });
}));

// magnetic buttons
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',(e)=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.18}px,${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave',()=>{btn.style.transform='translate(0,0)'});
});

// contact form (no backend — friendly confirmation)
document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  document.getElementById('formMsg').textContent='درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.';
  e.target.reset();
});
