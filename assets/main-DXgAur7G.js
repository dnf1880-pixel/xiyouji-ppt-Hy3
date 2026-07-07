(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();class c{constructor(){this.currentIndex=0,this.slides=[],this.totalSlides=0,this.viewport=document.getElementById("ppt-viewport"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.progressBarFill=document.getElementById("progressBarFill"),this.pageIndicator=document.getElementById("pageIndicator"),this.init(),this.initWindowMessage()}init(){this.loadSlides(),this.bindEvents(),this.initializePage(),this.updateUI(),this.updateViewportScale()}initWindowMessage(){window.addEventListener("message",t=>{if(!t.data||typeof t.data!="object")return;const{type:s,data:i}=t.data;s==="childrenstart"?(this.prevBtn.style.visibility="hidden",this.nextBtn.style.visibility="hidden",this.progressBarFill.style.visibility="hidden",this.pageIndicator.style.visibility="hidden"):s==="childrenstop"&&(this.prevBtn.style.visibility="visible",this.nextBtn.style.visibility="visible",this.progressBarFill.style.visibility="visible",this.pageIndicator.style.visibility="visible")})}initializePage(){const t=new URLSearchParams(window.location.search);let s=t.get("page");if(!s){s="1",t.set("page","1");const l=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",l)}const i=parseInt(s,10),e=i-1;if(!isNaN(i)&&e>=0&&e<this.totalSlides)this.slides[0]&&this.slides[0].classList.remove("active"),this.currentIndex=e,this.slides[e]&&this.slides[e].classList.add("active");else{console.warn(`无效的页码参数: ${s}，将显示第 1 页`),t.set("page","1");const l=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",l)}}loadSlides(){if(typeof window.slideDataMap>"u"){console.error("未找到 slideDataMap");return}const t=Array.from(window.slideDataMap.keys()).sort((s,i)=>s-i);if(this.totalSlides=t.length,this.totalSlides===0){console.warn("slideDataMap 为空，没有幻灯片可加载");return}t.forEach((s,i)=>{const e=document.createElement("div");e.className="slide",i===0&&e.classList.add("active");const l=window.slideDataMap.get(s);if(!l||typeof l!="string"){this.totalSlides--,console.error(`未找到页码 ${s} 的内容, 或者页码 ${s} 的内容为空`);return}const a=document.createElement("div");a.innerHTML=l.trim(),e.appendChild(a),this.viewport.appendChild(e),this.slides.push(e)})}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),document.addEventListener("keydown",s=>{s.key==="ArrowLeft"?this.prevSlide():s.key==="ArrowRight"||s.key===" "?(s.preventDefault(),this.nextSlide()):s.key==="Home"?this.goToSlide(0):s.key==="End"&&this.goToSlide(this.totalSlides-1)});let t=0;this.viewport.addEventListener("touchstart",s=>{t=s.touches[0].clientX}),this.viewport.addEventListener("touchend",s=>{const i=s.changedTouches[0].clientX,e=t-i;Math.abs(e)>50&&(e>0?this.nextSlide():this.prevSlide())}),window.addEventListener("resize",()=>this.updateViewportScale())}prevSlide(){this.currentIndex>0&&this.goToSlide(this.currentIndex-1)}nextSlide(){this.currentIndex<this.totalSlides-1&&this.goToSlide(this.currentIndex+1)}goToSlide(t){t<0||t>=this.totalSlides||(this.slides[this.currentIndex].classList.remove("active"),this.currentIndex=t,this.slides[this.currentIndex].classList.add("active"),this.updateUrlPage(t+1),this.updateUI())}updateUrlPage(t){const s=new URLSearchParams(window.location.search);s.set("page",t.toString());const i=`${window.location.pathname}?${s.toString()}`;window.history.replaceState({},"",i)}updateUI(){if(this.totalSlides===0){this.prevBtn.disabled=!0,this.nextBtn.disabled=!0,this.progressBarFill.style.width="0%",this.pageIndicator.textContent="制作中";return}this.prevBtn.disabled=this.currentIndex===0,this.nextBtn.disabled=this.currentIndex===this.totalSlides-1;const t=(this.currentIndex+1)/this.totalSlides*100;this.progressBarFill.style.width=`${t}%`,this.pageIndicator.textContent=`${this.currentIndex+1} / ${this.totalSlides}`}updateViewportScale(){const e=window.innerWidth-40,l=window.innerHeight-40,a=e/1440,r=l/810,d=Math.min(a,r,1);this.viewport.style.transform=`scale(${d})`,console.log(`窗口: ${window.innerWidth}x${window.innerHeight}, 缩放: ${d.toFixed(3)}`)}}class n{constructor(){this.validRoutes=["/","/index.html"],this.checkRoute()}checkRoute(){const t=window.location.pathname;if(t.includes("404.html"))return;this.validRoutes.some(i=>i==="/"?t==="/"||t==="/index.html":t===i)||(console.warn(`Invalid route detected: ${t}, redirecting to 404`),window.location.href="/404.html")}addRoute(t){this.validRoutes.includes(t)||this.validRoutes.push(t)}isValidRoute(t){return this.validRoutes.includes(t)}}window.addEventListener("DOMContentLoaded",()=>{new n,new c});window.slideDataMap.set(2,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="absolute top-0 right-0 w-1/2 h-full opacity-10">
    <svg viewBox="0 0 600 810" class="w-full h-full">
      <ellipse cx="400" cy="200" rx="250" ry="150" fill="#e8e4dc" opacity="0.5"/>
      <ellipse cx="350" cy="500" rx="200" ry="120" fill="#ddd8ce" opacity="0.4"/>
      <ellipse cx="450" cy="700" rx="180" ry="100" fill="#d5d0c6" opacity="0.3"/>
    </svg>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-48 opacity-10">
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" class="w-full h-full">
      <path d="M0,200 Q120,120 240,160 T480,100 T720,140 T960,80 T1200,120 T1440,90 L1440,200 Z" fill="#4a4a4a"/>
    </svg>
  </div>

  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex">
    <div class="w-48 flex flex-col items-center justify-center">
      <div class="w-px h-32 mb-6" style="background: linear-gradient(to bottom, transparent, #8b7355, transparent);"></div>
      <div class="w-3 h-1 rounded-full mb-1" style="background: #8b7355;"></div>
      <div class="w-px h-24 mb-1" style="background: #8b7355;"></div>
      <div class="w-3 h-1 rounded-full mb-1" style="background: #8b7355;"></div>
      <div class="w-px h-24 mb-1" style="background: #8b7355;"></div>
      <div class="w-3 h-1 rounded-full mb-6" style="background: #8b7355;"></div>
      <div class="w-px h-32" style="background: linear-gradient(to bottom, #8b7355, transparent);"></div>
    </div>

    <div class="flex-1 flex flex-col justify-center pl-8">
      <div class="mb-14">
        <div class="flex items-end gap-6">
          <span class="text-7xl font-light" style="color: #9E2A2B; font-family: 'Noto Serif SC', serif;">目录</span>
          <div class="flex items-center gap-3 pb-3">
            <div class="w-16 h-px" style="background: #C9A227;"></div>
            <span class="text-sm tracking-widest" style="color: #C9A227;">CONTENTS</span>
          </div>
        </div>
      </div>

      <div class="space-y-5">
        <div class="flex items-center">
          <div class="w-20 text-center"><span class="text-3xl" style="color:#C9A227; font-family:'Ma Shan Zheng',serif;">壹</span></div>
          <div class="flex-1 flex items-center gap-4 py-4 border-b" style="border-color:#e0d3b3;">
            <h3 class="text-2xl" style="color:#3D3128; font-family:'Noto Serif SC',serif;">取经之路</h3>
            <span class="text-base" style="color:#7a6a52;">剧情简介</span>
            <div class="flex-1 h-px" style="background: linear-gradient(to right, #C9A227, transparent);"></div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-20 text-center"><span class="text-3xl" style="color:#C9A227; font-family:'Ma Shan Zheng',serif;">贰</span></div>
          <div class="flex-1 flex items-center gap-4 py-4 border-b" style="border-color:#e0d3b3;">
            <h3 class="text-2xl" style="color:#3D3128; font-family:'Noto Serif SC',serif;">人物篇</h3>
            <span class="text-base" style="color:#7a6a52;">师徒 · 妖魔 · 天庭 · 西方</span>
            <div class="flex-1 h-px" style="background: linear-gradient(to right, #C9A227, transparent);"></div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-20 text-center"><span class="text-3xl" style="color:#C9A227; font-family:'Ma Shan Zheng',serif;">叁</span></div>
          <div class="flex-1 flex items-center gap-4 py-4 border-b" style="border-color:#e0d3b3;">
            <h3 class="text-2xl" style="color:#3D3128; font-family:'Noto Serif SC',serif;">西游感悟</h3>
            <span class="text-base" style="color:#7a6a52;">取经即修心</span>
            <div class="flex-1 h-px" style="background: linear-gradient(to right, #C9A227, transparent);"></div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-20 text-center"><span class="text-3xl" style="color:#C9A227; font-family:'Ma Shan Zheng',serif;">肆</span></div>
          <div class="flex-1 flex items-center gap-4 py-4 border-b" style="border-color:#e0d3b3;">
            <h3 class="text-2xl" style="color:#3D3128; font-family:'Noto Serif SC',serif;">结语</h3>
            <span class="text-base" style="color:#7a6a52;">山高水长</span>
            <div class="flex-1 h-px" style="background: linear-gradient(to right, #C9A227, transparent);"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-32 flex items-start justify-center pt-20">
      <div class="w-14 h-14 flex items-center justify-center" style="border:2px solid #9E2A2B;">
        <span class="text-lg" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">录</span>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(1,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden" style="background: url('/assets/images/page-1.png') center/cover no-repeat;">
  <div class="absolute inset-0" style="background-color: rgba(28,12,12,0.42);"></div>
  <div class="absolute bottom-0 left-0 right-0 h-60" style="background-color: rgba(18,8,8,0.55);"></div>

  <div class="absolute top-16 right-24 w-16 h-16 flex items-center justify-center text-2xl font-bold" style="border:2px solid #C9A227; background-color: rgba(158,42,43,0.85); color:#F3E3B8; font-family:'Ma Shan Zheng',serif; writing-mode: vertical-rl;">游</div>

  <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-20">
    <div class="flex items-center justify-center gap-6 mb-10">
      <div class="w-24 h-px" style="background:#C9A227;"></div>
      <div class="w-3 h-3 rounded-full" style="background:#C9A227;"></div>
      <div class="w-24 h-px" style="background:#C9A227;"></div>
    </div>
    <h1 class="text-[7rem] font-bold mb-6 tracking-[0.15em] leading-none" style="color:#F3E3B8; font-family:'Ma Shan Zheng',serif; text-shadow:0 4px 24px rgba(0,0,0,0.6);">西游记</h1>
    <p class="text-3xl mb-8 tracking-[0.35em]" style="color:#EAD9A8; font-family:'Noto Serif SC',serif; text-shadow:0 2px 12px rgba(0,0,0,0.6);">古典四大名著之一</p>
    <div class="text-xl tracking-[0.25em] mb-10" style="color:#F0E2BC; font-family:'Noto Serif SC',serif;">一部取经史 · 一条修心路</div>
    <div class="text-base tracking-[0.3em]" style="color:#D9C9A0;">踏平坎坷成大道，斗罢艰险又出发</div>
    <div class="absolute bottom-10 text-lg tracking-[0.3em]" style="color:#EAD9A8;">吴承恩 · 明</div>
  </div>
</div>
`);window.slideDataMap.set(3,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <div class="absolute bottom-0 left-0 w-full h-1/3 opacity-10" style="background: radial-gradient(ellipse at bottom, #1a1a1a 0%, transparent 60%);"></div>
    <div class="absolute top-20 left-16 opacity-25">
      <svg width="50" height="25" viewBox="0 0 60 30">
        <path d="M10,15 Q20,10 30,15 Q20,12 10,15" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
        <path d="M35,18 Q45,13 55,18 Q45,15 35,18" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
      </svg>
    </div>
    <div class="flex items-center justify-center h-full">
      <div class="text-center z-10 px-20">
        <div class="mb-8">
          <div class="inline-flex items-center gap-3">
            <div class="w-6 h-px" style="background:#C9A227;"></div>
            <span class="text-lg tracking-widest" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">第一卷 · 壹</span>
            <div class="w-6 h-px" style="background:#C9A227;"></div>
          </div>
        </div>
        <h1 class="text-6xl font-bold mb-6 tracking-wide" style="color:#3D3128; font-family:'Ma Shan Zheng',serif; line-height:1.3;">取经之路</h1>
        <p class="text-xl tracking-[0.3em]" style="color:#7a6a52; font-family:'Noto Serif SC',serif;">剧情简介</p>
      </div>
    </div>
    <div class="absolute bottom-16 right-16 w-14 h-14 opacity-70 transform rotate-12" style="background: linear-gradient(135deg, #9E2A2B 0%, #6e1a1b 100%); clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
      <div class="w-full h-full flex items-center justify-center"><span class="text-xs text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">西</span></div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(6,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <div class="absolute bottom-0 left-0 w-full h-1/3 opacity-10" style="background: radial-gradient(ellipse at bottom, #1a1a1a 0%, transparent 60%);"></div>
    <div class="absolute top-20 left-16 opacity-25">
      <svg width="50" height="25" viewBox="0 0 60 30">
        <path d="M10,15 Q20,10 30,15 Q20,12 10,15" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
        <path d="M35,18 Q45,13 55,18 Q45,15 35,18" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
      </svg>
    </div>
    <div class="flex items-center justify-center h-full">
      <div class="text-center z-10 px-20">
        <div class="mb-8">
          <div class="inline-flex items-center gap-3">
            <div class="w-6 h-px" style="background:#C9A227;"></div>
            <span class="text-lg tracking-widest" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">第二卷 · 贰</span>
            <div class="w-6 h-px" style="background:#C9A227;"></div>
          </div>
        </div>
        <h1 class="text-6xl font-bold mb-6 tracking-wide" style="color:#3D3128; font-family:'Ma Shan Zheng',serif; line-height:1.3;">人物篇</h1>
        <p class="text-xl tracking-[0.3em]" style="color:#7a6a52; font-family:'Noto Serif SC',serif;">师徒 · 妖魔 · 天庭 · 西方</p>
      </div>
    </div>
    <div class="absolute bottom-16 right-16 w-14 h-14 opacity-70 transform rotate-12" style="background: linear-gradient(135deg, #9E2A2B 0%, #6e1a1b 100%); clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
      <div class="w-full h-full flex items-center justify-center"><span class="text-xs text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">游</span></div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(15,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <div class="absolute bottom-0 left-0 w-full h-1/3 opacity-10" style="background: radial-gradient(ellipse at bottom, #1a1a1a 0%, transparent 60%);"></div>
    <div class="absolute top-20 left-16 opacity-25">
      <svg width="50" height="25" viewBox="0 0 60 30">
        <path d="M10,15 Q20,10 30,15 Q20,12 10,15" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
        <path d="M35,18 Q45,13 55,18 Q45,15 35,18" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
      </svg>
    </div>
    <div class="flex items-center justify-center h-full">
      <div class="text-center z-10 px-20">
        <div class="mb-8">
          <div class="inline-flex items-center gap-3">
            <div class="w-6 h-px" style="background:#C9A227;"></div>
            <span class="text-lg tracking-widest" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">第三卷 · 叁</span>
            <div class="w-6 h-px" style="background:#C9A227;"></div>
          </div>
        </div>
        <h1 class="text-6xl font-bold mb-6 tracking-wide" style="color:#3D3128; font-family:'Ma Shan Zheng',serif; line-height:1.3;">西游感悟</h1>
        <p class="text-xl tracking-[0.3em]" style="color:#7a6a52; font-family:'Noto Serif SC',serif;">取经即修心</p>
      </div>
    </div>
    <div class="absolute bottom-16 right-16 w-14 h-14 opacity-70 transform rotate-12" style="background: linear-gradient(135deg, #9E2A2B 0%, #6e1a1b 100%); clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
      <div class="w-full h-full flex items-center justify-center"><span class="text-xs text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">悟</span></div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(18,`
<div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
  <div class="absolute -top-[5%] -left-[5%] w-[300px] h-[300px] rounded-full" style="background: radial-gradient(circle, rgba(40, 40, 40, 0.08) 0%, transparent 70%);"></div>
  <div class="absolute -bottom-[8%] -right-[8%] w-[400px] h-[400px] rounded-full" style="background: radial-gradient(circle, rgba(40, 40, 40, 0.06) 0%, transparent 70%);"></div>
  <div class="absolute top-[15%] left-[8%] w-[180px] h-[8px] -rotate-[8deg]" style="background: linear-gradient(90deg, transparent 0%, rgba(40, 40, 40, 0.15) 50%, transparent 100%);"></div>
  <div class="absolute bottom-[18%] right-[10%] w-[200px] h-[6px] rotate-[5deg]" style="background: linear-gradient(90deg, transparent 0%, rgba(40, 40, 40, 0.12) 50%, transparent 100%);"></div>

  <div class="absolute top-[12%] right-[10%] w-[70px] h-[70px] border-2 flex items-center justify-center -rotate-[5deg]" style="border-color:#9E2A2B; background-color: rgba(158,42,43,0.10);">
    <div class="text-[18px] font-bold leading-tight tracking-[2px]" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">谢<br/>谢</div>
  </div>

  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col justify-center">
    <div class="text-center max-w-[80%] mx-auto">
      <h1 class="text-[68px] mb-10 font-normal tracking-[10px] relative" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">山高自有客行路</h1>
      <div class="flex items-center justify-center gap-5 mb-9">
        <div class="w-[100px] h-[2px]" style="background: linear-gradient(to right, transparent, #C9A227);"></div>
        <div class="w-[8px] h-[8px] rounded-full" style="background:#C9A227;"></div>
        <div class="w-[100px] h-[2px]" style="background: linear-gradient(to left, transparent, #C9A227);"></div>
      </div>
      <p class="text-[26px] leading-relaxed tracking-[4px] mb-10" style="color:#3D3128; font-family:'Noto Serif SC',serif;">水深自有渡船人</p>
      <p class="text-[18px] tracking-[3px]" style="color:#7a6a52; font-family:'Noto Serif SC',serif;">《西游记》 · 中国古典四大名著</p>
    </div>
  </div>
</div>
`);window.slideDataMap.set(7,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-16">
    <div class="w-[45%] h-full flex flex-col justify-center">
      <div class="overflow-hidden rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);">
        <img src="/assets/images/page-7.png" alt="取经团队" width="560" height="420" class="w-full h-full object-cover" />
      </div>
      <p class="text-[14px] mt-4 text-center" style="color:#9b8a6c;">取经五众 · 工笔重彩立绘</p>
    </div>

    <div class="w-[1px] h-80" style="background: linear-gradient(to bottom, transparent, #C9A227, transparent);"></div>

    <div class="flex-1 space-y-5">
      <div>
        <h2 class="text-[40px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">取经五众·各司其职</h2>
        <p class="text-[17px] leading-relaxed" style="color:#3D3128;">
          师徒四众加白龙马，性格迥异却互补成军——<span style="color:#9E2A2B; font-weight:600;">互补即战力</span>。
        </p>
      </div>
      <div class="space-y-3 pt-1">
        <div class="flex items-start gap-4">
          <span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span>
          <p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">唐僧</span>：师父 · 定方向、守初心</p>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span>
          <p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">孙悟空</span>：大徒 · 破难题、战妖魔</p>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span>
          <p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">猪八戒</span>：二徒 · 调气氛、添烟火</p>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span>
          <p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">沙僧</span>：三徒 · 稳执行、担重负</p>
        </div>
        <div class="flex items-start gap-4">
          <span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span>
          <p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">白龙马</span>：脚力 · 驮经卷、伴长途</p>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(5,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex px-20 py-12 gap-16 relative z-10">
    <div class="w-[360px] flex flex-col justify-center">
      <h2 class="text-[38px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">取经档案<br/>数字里的西游</h2>
      <div class="w-20 h-[1px] mb-6" style="background:#C9A227;"></div>
      <p class="text-[16px] leading-relaxed mb-8" style="color:#3D3128;">
        一部神魔小说，体量惊人。用六个数字，读懂这场跨越万里的修行之旅。
      </p>
      <p class="text-[15px] italic" style="color:#9b8a6c;">"九九归一，方得圆满"</p>
    </div>

    <div class="flex-1 flex flex-col justify-center">
      <div class="grid grid-cols-3 gap-x-10 gap-y-9">
        <div class="flex flex-col">
          <div class="text-[44px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">100<span class="text-[20px] ml-1">回</span></div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">全书篇幅</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">章回体神魔小说</p>
        </div>
        <div class="flex flex-col">
          <div class="text-[44px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">81<span class="text-[20px] ml-1">难</span></div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">劫数考验</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">九九归一方圆满</p>
        </div>
        <div class="flex flex-col">
          <div class="text-[44px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">14<span class="text-[20px] ml-1">年</span></div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">取经历时</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">自贞观至归唐</p>
        </div>
        <div class="flex flex-col">
          <div class="text-[40px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">十万八千里</div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">行程万里</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">长安直至天竺</p>
        </div>
        <div class="flex flex-col">
          <div class="text-[44px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">5<span class="text-[20px] ml-1">人</span></div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">取经团队</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">师徒四众加白龙马</p>
        </div>
        <div class="flex flex-col">
          <div class="text-[44px] font-bold leading-none" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">1<span class="text-[20px] ml-1">心</span></div>
          <p class="text-[17px] mt-2" style="color:#3D3128; font-weight:600;">修心主题</p>
          <p class="text-[14px] mt-1" style="color:#7a6a52;">万难皆源于心</p>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-[14px]" style="color:#9b8a6c;">数字背后，是一程修行，一部传奇</div>
</div>
`);window.slideDataMap.set(4,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center px-20 py-12 gap-14 relative z-10">
    <div class="w-[470px] flex flex-col justify-center space-y-6">
      <div>
        <h2 class="text-[38px] font-bold mb-5" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">西行取经·九九八十一难</h2>
        <div class="flex items-center gap-3 mb-5">
          <div class="w-16 h-0.5" style="background:#C9A227;"></div>
          <div class="w-1.5 h-1.5 rounded-full" style="background:#9E2A2B;"></div>
        </div>
      </div>
      <p class="text-[16px] leading-relaxed tracking-wide" style="color:#3D3128;">
        《西游记》百回神魔小说，唐僧师徒自长安出发西天取经，历经千难终成正果，是中国浪漫主义文学的巅峰之作。
      </p>
      <div class="space-y-4 pt-2">
        <div class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div>
          <p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">大闹天宫</span>：前传，悟空反抗天庭，被压五行山五百年。</p>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div>
          <p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">拜师启程</span>：贞观年间，玄奘奉旨西行，沿途收徒结伴。</p>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div>
          <p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">九九归真</span>：途中降妖除魔，灵山受经，修成正果。</p>
        </div>
      </div>
      <div class="inline-block w-10 h-10 opacity-60 transform rotate-8" style="background:#9E2A2B; clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
        <div class="w-full h-full flex items-center justify-center"><span class="text-[12px] text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">游</span></div>
      </div>
    </div>
    <div class="flex-1 h-[540px] flex items-center justify-center">
      <img src="/assets/images/page-4.png" alt="取经路线图" width="760" height="506" class="max-w-full max-h-full object-contain rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);" />
    </div>
  </div>
  <div class="absolute bottom-6 right-20 text-[14px]" style="color:#9b8a6c;">自长安至天竺 · 写意取经路线图</div>
</div>
`);window.slideDataMap.set(8,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-14">
    <div class="w-[55%] space-y-7">
      <div class="space-y-3">
        <h2 class="text-[40px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">孙悟空·齐天大圣</h2>
        <div class="w-20 h-[1px]" style="background:#C9A227;"></div>
      </div>
      <p class="text-[18px] leading-loose tracking-wide" style="color:#3D3128;">
        花果山石猴，自封齐天大圣，神通广大、忠勇嫉恶，是全书当之无愧的灵魂人物。
      </p>
      <div class="space-y-4 mt-6">
        <div class="flex items-start gap-5">
          <div class="w-8 h-[1px] mt-3" style="background:#C9A227;"></div>
          <div><p class="text-[18px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">神通</p><p class="text-[16px]" style="color:#7a6a52;">七十二变、筋斗云、火眼金睛、如意金箍棒</p></div>
        </div>
        <div class="flex items-start gap-5">
          <div class="w-8 h-[1px] mt-3" style="background:#C9A227;"></div>
          <div><p class="text-[18px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">性格</p><p class="text-[16px]" style="color:#7a6a52;">桀骜不驯、忠勇嫉恶、重情重义</p></div>
        </div>
        <div class="flex items-start gap-5">
          <div class="w-8 h-[1px] mt-3" style="background:#C9A227;"></div>
          <div><p class="text-[18px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">经历</p><p class="text-[16px]" style="color:#7a6a52;">大闹天宫 → 被压五行山 → 护唐僧西行</p></div>
        </div>
        <div class="flex items-start gap-5">
          <div class="w-8 h-[1px] mt-3" style="background:#C9A227;"></div>
          <div><p class="text-[18px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">弧光</p><p class="text-[16px]" style="color:#7a6a52;">从野性齐天大圣到斗战胜佛，象征反抗与觉醒</p></div>
        </div>
      </div>
    </div>
    <div class="flex-1 h-full flex items-center">
      <div class="w-full overflow-hidden rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.28);">
        <img src="/assets/images/page-8.png" alt="孙悟空" width="460" height="690" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(9,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-16">
    <div class="w-[42%] h-full flex items-center">
      <div class="w-full overflow-hidden rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);">
        <img src="/assets/images/page-9.png" alt="唐僧" width="450" height="600" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="flex-1 space-y-7">
      <div>
        <h2 class="text-[40px] font-bold mb-5" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">唐僧·金蝉圣僧</h2>
        <div class="w-24 h-[1px] mb-6" style="background:#C9A227;"></div>
        <p class="text-[18px] leading-loose tracking-wide" style="color:#3D3128;">
          金蝉子转世，大唐高僧玄奘，奉唐王之命西天取经，是团队的定海神针与精神领袖。
        </p>
      </div>
      <div class="space-y-5">
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">身份</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">金蝉子转世，大唐高僧玄奘</p>
        </div>
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">使命</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">奉唐王之命，西天求取真经</p>
        </div>
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">性格与意义</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">慈悲为怀却肉眼凡胎，常错怪悟空；团队的精神核心</p>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute top-16 right-16 w-24 h-24">
    <div class="absolute top-0 right-0 w-10 h-[1px]" style="background:rgba(158,42,43,0.25);"></div>
    <div class="absolute top-0 right-0 w-[1px] h-10" style="background:rgba(158,42,43,0.25);"></div>
  </div>
</div>
`);window.slideDataMap.set(10,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-16">
    <div class="flex-1 space-y-8">
      <div>
        <h2 class="text-[40px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">猪八戒·天蓬元帅</h2>
        <div class="w-24 h-1 mb-6" style="background:#C9A227;"></div>
        <p class="text-[14px] tracking-wide" style="color:#9b8a6c;">Zhu Bajie · The Pigsy</p>
      </div>
      <div class="space-y-5">
        <p class="text-[18px] leading-relaxed tracking-wide" style="color:#3D3128;">
          天蓬元帅因调戏嫦娥被贬下界，错投猪胎，是全书喜剧担当，也是"人性"最真实的投射。
        </p>
        <div class="grid grid-cols-3 gap-8 pt-4">
          <div class="text-center space-y-3">
            <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style="background:rgba(158,42,43,0.08);">
              <span class="text-[22px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">谪</span>
            </div>
            <p class="text-[15px]" style="color:#3D3128;">天蓬被贬</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style="background:rgba(158,42,43,0.08);">
              <span class="text-[22px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">相</span>
            </div>
            <p class="text-[15px]" style="color:#3D3128;">猪相憨态</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style="background:rgba(158,42,43,0.08);">
              <span class="text-[22px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">心</span>
            </div>
            <p class="text-[15px]" style="color:#3D3128;">凡心烟火</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[460px] h-[480px] flex items-center justify-center relative">
      <div class="w-full h-full rounded-lg overflow-hidden" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);">
        <img src="/assets/images/page-10.png" alt="猪八戒" width="460" height="480" class="w-full h-full object-cover" />
      </div>
      <div class="absolute bottom-4 right-4 w-12 h-12 opacity-70 transform rotate-12" style="background:#9E2A2B; clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
        <div class="w-full h-full flex items-center justify-center"><span class="text-[12px] text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">戒</span></div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(11,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="absolute top-12 right-20 opacity-10">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="8" fill="#9E2A2B"/>
      <circle cx="40" cy="20" r="6" fill="#C9A227"/>
      <circle cx="40" cy="60" r="6" fill="#C9A227"/>
      <circle cx="20" cy="40" r="6" fill="#C9A227"/>
      <circle cx="60" cy="40" r="6" fill="#C9A227"/>
    </svg>
  </div>
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center px-20 py-12 gap-14 relative z-10">
    <div class="w-[450px] h-[480px] flex items-center justify-center">
      <img src="/assets/images/page-11.png" alt="沙僧" width="450" height="480" class="max-w-full max-h-full object-contain rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);" />
    </div>
    <div class="flex-1 space-y-6">
      <div>
        <h2 class="text-[38px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">沙僧·卷帘大将</h2>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-20 h-0.5" style="background:#C9A227;"></div>
          <div class="w-1.5 h-1.5 rounded-full" style="background:#9E2A2B;"></div>
        </div>
        <p class="text-[14px] tracking-wide" style="color:#9b8a6c;">Sha Wujing · The Sand Monk</p>
      </div>
      <div class="space-y-5">
        <p class="text-[16px] leading-relaxed tracking-wide" style="color:#3D3128;">
          天庭卷帘大将，失手打碎琉璃盏被贬流沙河，后随唐僧西行，是团队最可靠的稳定器。
        </p>
        <div class="grid grid-cols-3 gap-6 pt-2">
          <div class="space-y-2">
            <div class="h-1 w-full" style="background:linear-gradient(to right, rgba(158,42,43,0.3), transparent);"></div>
            <p class="text-[16px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">来历</p>
            <p class="text-[14px]" style="color:#7a6a52;">卷帘大将贬凡</p>
          </div>
          <div class="space-y-2">
            <div class="h-1 w-full" style="background:linear-gradient(to right, rgba(158,42,43,0.3), transparent);"></div>
            <p class="text-[16px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">形象</p>
            <p class="text-[14px]" style="color:#7a6a52;">红发虬髯</p>
          </div>
          <div class="space-y-2">
            <div class="h-1 w-full" style="background:linear-gradient(to right, rgba(158,42,43,0.3), transparent);"></div>
            <p class="text-[16px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">象征</p>
            <p class="text-[14px]" style="color:#7a6a52;">踏实本分</p>
          </div>
        </div>
      </div>
      <div class="inline-block mt-2 w-10 h-10 opacity-60 transform rotate-8" style="background:#9E2A2B; clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
        <div class="w-full h-full flex items-center justify-center"><span class="text-[12px] text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">僧</span></div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(12,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col px-24 py-12 relative z-10">
    <div class="text-center mb-8">
      <h2 class="text-[38px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">妖魔图谱·劫难之源</h2>
      <div class="w-32 h-[1px] mx-auto mb-5" style="background:#C9A227;"></div>
      <p class="text-[18px] leading-loose tracking-wide max-w-3xl mx-auto" style="color:#3D3128;">
        八十一难，多半源于妖魔。多数妖怪竟是神佛坐骑下界为患——暗讽之中，别有一番深意。
      </p>
    </div>
    <div class="flex-1 flex items-center gap-14">
      <div class="w-72 h-72 flex items-center justify-center">
        <img src="/assets/images/page-12.png" alt="妖魔" width="288" height="288" class="max-w-full max-h-full object-contain rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.3);" />
      </div>
      <div class="flex-1">
        <div class="flex gap-4">
          <div class="w-[1px] h-full" style="background:rgba(158,42,43,0.2);"></div>
          <div class="space-y-4">
            <div><p class="text-[22px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">白骨精</p><p class="text-[16px]" style="color:#7a6a52;">三变诱僧，引出"三打白骨精"</p></div>
            <div><p class="text-[22px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">牛魔王</p><p class="text-[16px]" style="color:#7a6a52;">悟空结拜兄长，火焰山霸主</p></div>
            <div><p class="text-[22px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">铁扇公主</p><p class="text-[16px]" style="color:#7a6a52;">芭蕉扇主，"三借芭蕉扇"</p></div>
            <div><p class="text-[22px] font-bold mb-1" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">红孩儿</p><p class="text-[16px]" style="color:#7a6a52;">三昧真火，终为善财童子</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(13,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-16">
    <div class="w-[45%] h-full flex flex-col justify-center">
      <div class="overflow-hidden rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);">
        <img src="/assets/images/page-13.png" alt="天庭" width="560" height="420" class="w-full h-full object-cover" />
      </div>
      <p class="text-[14px] mt-4 text-center" style="color:#9b8a6c;">凌霄宝殿 · 三界秩序</p>
    </div>
    <div class="w-[1px] h-80" style="background: linear-gradient(to bottom, transparent, #C9A227, transparent);"></div>
    <div class="flex-1 space-y-5">
      <div>
        <h2 class="text-[40px] font-bold mb-4" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">天庭诸神·三界秩序</h2>
        <p class="text-[17px] leading-relaxed" style="color:#3D3128;">
          天庭掌管三界秩序，也是悟空反抗的对象——威严与僵化，并存其间。
        </p>
      </div>
      <div class="space-y-3 pt-1">
        <div class="flex items-start gap-4"><span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span><p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">玉皇大帝</span>：三界至尊，凌霄殿主</p></div>
        <div class="flex items-start gap-4"><span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span><p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">太上老君</span>：道教尊神，炼丹炼器</p></div>
        <div class="flex items-start gap-4"><span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span><p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">二郎神</span>：听调不听宣，曾擒悟空</p></div>
        <div class="flex items-start gap-4"><span class="text-[20px]" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">·</span><p class="text-[16px] pt-1" style="color:#3D3128;"><span style="font-weight:600;">王母娘娘</span>：蟠桃会主，宴邀群仙</p></div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(14,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center gap-16">
    <div class="w-[42%] h-full flex items-center">
      <div class="w-full overflow-hidden rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.25);">
        <img src="/assets/images/page-14.png" alt="西天佛界" width="450" height="600" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="flex-1 space-y-7">
      <div>
        <h2 class="text-[40px] font-bold mb-5" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">西天佛界·慈悲引渡</h2>
        <div class="w-24 h-[1px] mb-6" style="background:#C9A227;"></div>
        <p class="text-[18px] leading-loose tracking-wide" style="color:#3D3128;">
          佛界是取经的终极归宿与救赎，慈悲引渡，普度众生。
        </p>
      </div>
      <div class="space-y-5">
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">如来佛祖</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">西天之主，法力无边，曾镇压悟空于五行山</p>
        </div>
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">观音菩萨</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">取经策划者，全程护持，慈悲救苦</p>
        </div>
        <div class="space-y-1">
          <h4 class="text-[20px] font-bold" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">弥勒佛</h4>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">笑口常开，收伏黄眉童儿</p>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute top-16 right-16 w-24 h-24">
    <div class="absolute top-0 right-0 w-10 h-[1px]" style="background:rgba(158,42,43,0.25);"></div>
    <div class="absolute top-0 right-0 w-[1px] h-10" style="background:rgba(158,42,43,0.25);"></div>
  </div>
</div>
`);window.slideDataMap.set(16,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex items-center px-20 py-12 gap-14 relative z-10">
    <div class="w-[470px] flex flex-col justify-center space-y-6">
      <div>
        <h2 class="text-[38px] font-bold mb-5" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">取经即修心</h2>
        <div class="flex items-center gap-3 mb-5">
          <div class="w-16 h-0.5" style="background:#C9A227;"></div>
          <div class="w-1.5 h-1.5 rounded-full" style="background:#9E2A2B;"></div>
        </div>
      </div>
      <p class="text-[16px] leading-relaxed tracking-wide" style="color:#3D3128;">
        "心生种种魔生，心灭种种魔灭。"外在的八十一难，说到底是一场内心的修行。
      </p>
      <div class="space-y-4 pt-2">
        <div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div><p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">修心隐喻</span>：万难皆源于心，降魔先降己。</p></div>
        <div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div><p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">三教合流</span>：儒释道并存，明代思想交融。</p></div>
        <div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:#9E2A2B;"></div><p class="text-[16px]" style="color:#3D3128;"><span style="color:#9E2A2B; font-weight:600;">成长弧光</span>：从野性难驯到觉行圆满。</p></div>
      </div>
      <div class="inline-block w-10 h-10 opacity-60 transform rotate-8" style="background:#9E2A2B; clip-path: polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%);">
        <div class="w-full h-full flex items-center justify-center"><span class="text-[12px] text-white font-bold" style="font-family:'Ma Shan Zheng',serif;">心</span></div>
      </div>
    </div>
    <div class="flex-1 h-[540px] flex items-center justify-center">
      <img src="/assets/images/page-16.png" alt="禅意山水" width="760" height="506" class="max-w-full max-h-full object-contain rounded-md" style="box-shadow:0 8px 30px rgba(60,20,20,0.22);" />
    </div>
  </div>
</div>
`);window.slideDataMap.set(17,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col justify-between px-24 py-16 relative z-10">
    <div class="text-center">
      <h2 class="text-[42px] font-bold tracking-wider" style="color:#9E2A2B; font-family:'Noto Serif SC',serif;">现代启示·西游与我们</h2>
      <div class="w-32 h-[1px] mx-auto mt-5" style="background:#C9A227;"></div>
    </div>
    <div class="grid grid-cols-3 gap-14 max-w-5xl mx-auto">
      <div class="text-center space-y-4">
        <p class="text-[42px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">团队</p>
        <div class="h-14 w-[1px] mx-auto" style="background:rgba(158,42,43,0.2);"></div>
        <div class="space-y-2">
          <p class="text-[18px]" style="color:#3D3128; font-weight:600;">性格互补</p>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">唐僧定方向、悟空破局、<br/>八戒调和、沙僧执行</p>
        </div>
      </div>
      <div class="text-center space-y-4">
        <p class="text-[42px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">毅力</p>
        <div class="h-14 w-[1px] mx-auto" style="background:rgba(158,42,43,0.2);"></div>
        <div class="space-y-2">
          <p class="text-[18px]" style="color:#3D3128; font-weight:600;">直面难关</p>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">八十一难不退缩，<br/>难而不弃，韧者行远</p>
        </div>
      </div>
      <div class="text-center space-y-4">
        <p class="text-[42px] font-bold" style="color:#9E2A2B; font-family:'Ma Shan Zheng',serif;">初心</p>
        <div class="h-14 w-[1px] mx-auto" style="background:rgba(158,42,43,0.2);"></div>
        <div class="space-y-2">
          <p class="text-[18px]" style="color:#3D3128; font-weight:600;">守住目标</p>
          <p class="text-[16px] leading-relaxed" style="color:#7a6a52;">乱云飞渡仍向西天，<br/>方得真经</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p class="text-[16px] tracking-wide" style="color:#7a6a52;">
        经典之所以不朽，是因为它照见的，也是我们自己的人生
      </p>
    </div>
  </div>
</div>
`);
