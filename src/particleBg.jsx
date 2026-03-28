import { useEffect, useRef } from "react";

const CONFIG = {
  count:      20,    // safe range: 40–80
  speedScale: 1,
  minSize:    50,     // radius in px (larger = visible without blur)
  maxSize:    80,
  minOpacity: 0.35,
  maxOpacity: 0.40,
};
/* ─────────────────────────────────────────────*/
 
function rand(a, b) {
  return a + Math.random() * (b - a);
}
 
function makeParticle(W, H) {
  return {
    x:          rand(0, W),
    y:          rand(0, H),
    r:          rand(CONFIG.minSize, CONFIG.maxSize),
    vx:         rand(-1, 1) * CONFIG.speedScale,
    vy:         rand(-1, 1) * CONFIG.speedScale,
    opacity:    rand(CONFIG.minOpacity, CONFIG.maxOpacity),
    pulse:      rand(0, Math.PI * 2),
    pulseSpeed: rand(0.003, 0.012),
    hue:        Math.random() > 0.5 ? "210,195,255" : "180,160,255",
  };
}
 
// Fakes the soft blur look using a radial gradient — zero GPU cost
function drawParticle(ctx, p) {
  p.pulse += p.pulseSpeed;
  const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
 
  const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
  grad.addColorStop(0,   `rgba(235,225,255,${alpha})`);
  grad.addColorStop(0.3, `rgba(${p.hue},${alpha * 0.6})`);
  grad.addColorStop(1,   `rgba(${p.hue},0)`);
 
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
}
 
export default function ParticleBackground({ children, style, className }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], animId: null, W: 0, H: 0 });
 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d", { alpha: true });
    const state  = stateRef.current;
 
    // Cap at 2× so retina screens don't render at 3× unnecessarily
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
 
    function init() {
      const rect = canvas.parentElement.getBoundingClientRect();
      state.W = rect.width;
      state.H = rect.height;
      canvas.width  = state.W * dpr;
      canvas.height = state.H * dpr;
      canvas.style.width  = `${state.W}px`;
      canvas.style.height = `${state.H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.particles = Array.from(
        { length: CONFIG.count },
        () => makeParticle(state.W, state.H)
      );
    }
 
    function tick() {
      const { W, H, particles } = state;
      ctx.clearRect(0, 0, W, H);
 
      for (const p of particles) {
        drawParticle(ctx, p);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r)    p.x = W + p.r;
        if (p.x > W + p.r) p.x = -p.r;
        if (p.y < -p.r)    p.y = H + p.r;
        if (p.y > H + p.r) p.y = -p.r;
      }
 
      state.animId = requestAnimationFrame(tick);
    }
 
    // Debounce resize — avoids hammering init on every pixel
    let resizeTimer;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    }
 
    init();
    tick();
    window.addEventListener("resize", handleResize);
 
    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
 
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to right, #17153b, #2e236c)",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}