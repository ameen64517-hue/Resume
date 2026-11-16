const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const root=document.documentElement,themeBtn=$('#themeBtn');
function setTheme(t){root.dataset.theme=t;themeBtn.textContent=t==='dark'?'☀️':'🌙';try{localStorage.setItem('theme',t)}catch(e){}}
let saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
setTheme(saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
themeBtn.onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');
$('#menuBtn').onclick=()=>$('#menu').classList.toggle('open');
$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
$('#yr').textContent=new Date().getFullYear();
// skill filter
$$('.chip').forEach(c=>c.onclick=()=>{
  $$('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');
  $$('.skill').forEach(s=>{s.classList.toggle('hide',c.dataset.f!=='all'&&s.dataset.c!==c.dataset.f);
    s.classList.remove('show');requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add('show')))});
});
// animate bars on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.3});
$$('.skill').forEach(s=>io.observe(s));
// typing effect
const words=['Python Developer','Web Developer','Project Manager','Problem Solver'];let w=0,i=0,del=false;
(function type(){const t=$('#typed'),cur=words[w];t.textContent=cur.slice(0,i);
  if(!del&&i++===cur.length){del=true;return setTimeout(type,1200)}
  if(del&&--i===0){del=false;w=(w+1)%words.length}
  setTimeout(type,del?40:90)})();
// copy email
$('#copyBtn').onclick=async()=>{const m='ameenclarice@gmail.com';
  try{await navigator.clipboard.writeText(m)}catch(e){}
  const t=$('#toast');t.textContent='Email copied!';t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)};
