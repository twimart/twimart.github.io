import { useEffect, useRef } from 'react';

export default function NetworkMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const parent = canvas.parentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    let edges = [];
    let packets = [];
    const mouse = { x: -9999, y: -9999, inside: false };
    const cursor = { x: 0, y: 0, alpha: 0 };
    let t0 = performance.now();
    let visible = true;
    let io;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#38BDF8';
    const accent2 = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--color-accent2').trim() || '#818CF8';

    function hexToRgb(hex) {
      const h = hex.replace('#', '').trim();
      const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function build() {
      const count = Math.max(28, Math.min(56, Math.floor((w * h) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 1.6,
      }));
      edges = [];
      const maxDist = Math.min(180, Math.max(110, Math.hypot(w, h) * 0.09));
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) edges.push({ a: i, b: j, d });
        }
      }
      packets = edges.slice(0, Math.min(18, edges.length)).map((e) => ({
        a: e.a,
        b: e.b,
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.0035,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function tick() {
      if (!visible) {
        raf = 0;
        return;
      }
      const c1 = hexToRgb(accent());
      const c2 = hexToRgb(accent2());
      ctx.clearRect(0, 0, w, h);

      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));

          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (mouse.inside && dist < 160 && dist > 0.1) {
            n.x -= (dx / dist) * 0.12;
            n.y -= (dy / dist) * 0.12;
          }
        }
      }

      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const alpha = Math.max(0, 1 - d / 190) * 0.22;
        ctx.strokeStyle = `rgba(${c1.r},${c1.g},${c1.b},${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      if (!reduce && w >= 700) {
        for (const p of packets) {
          p.t += p.speed * p.dir;
          if (p.t > 1 || p.t < 0) p.dir *= -1;
          const a = nodes[p.a];
          const b = nodes[p.b];
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          const g = ctx.createRadialGradient(x, y, 0, x, y, 8);
          g.addColorStop(0, `rgba(${c2.r},${c2.g},${c2.b},0.95)`);
          g.addColorStop(1, `rgba(${c2.r},${c2.g},${c2.b},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${c1.r},${c1.g},${c1.b},0.7)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'destination-out';
      const mobile = w < 700;
      const fade = ctx.createRadialGradient(
        w / 2,
        h * (mobile ? 0.38 : 0.42),
        mobile ? 20 : 40,
        w / 2,
        h * (mobile ? 0.38 : 0.42),
        Math.min(w, h) * (mobile ? 0.78 : 0.48)
      );
      fade.addColorStop(0, mobile ? 'rgba(0,0,0,0.97)' : 'rgba(0,0,0,0.92)');
      fade.addColorStop(0.55, mobile ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.35)');
      fade.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      if (!reduce && !coarse) {
        const t = (performance.now() - t0) / 1000;
        cursor.alpha += ((mouse.inside ? 1 : 0) - cursor.alpha) * 0.14;
        if (mouse.inside) {
          cursor.x += (mouse.x - cursor.x) * 0.22;
          cursor.y += (mouse.y - cursor.y) * 0.22;
        }

        if (cursor.alpha > 0.02) {
          const sats = [];
          for (let i = 0; i < 8; i++) {
            const ang = (i / 8) * Math.PI * 2 + t * 0.35;
            const rad = 38 + Math.sin(t * 1.6 + i * 0.9) * 10;
            sats.push({
              x: cursor.x + Math.cos(ang) * rad,
              y: cursor.y + Math.sin(ang) * rad,
            });
          }

          ctx.save();
          ctx.globalAlpha = cursor.alpha;

          for (let i = 0; i < sats.length; i++) {
            const a = sats[i];
            const b = sats[(i + 1) % sats.length];
            ctx.strokeStyle = `rgba(${c1.r},${c1.g},${c1.b},0.55)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            if (i % 2 === 0) {
              const c = sats[(i + 3) % sats.length];
              ctx.strokeStyle = `rgba(${c2.r},${c2.g},${c2.b},0.28)`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(c.x, c.y);
              ctx.stroke();
            }
          }

          for (const s of sats) {
            ctx.strokeStyle = `rgba(${c1.r},${c1.g},${c1.b},0.22)`;
            ctx.beginPath();
            ctx.moveTo(cursor.x, cursor.y);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
          }

          for (const n of nodes) {
            const d = Math.hypot(n.x - cursor.x, n.y - cursor.y);
            if (d > 150 || d < 8) continue;
            ctx.strokeStyle = `rgba(${c2.r},${c2.g},${c2.b},${Math.max(0, 1 - d / 150) * 0.45})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(cursor.x, cursor.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }

          for (const s of sats) {
            ctx.fillStyle = `rgba(${c1.r},${c1.g},${c1.b},0.95)`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 2.1, 0, Math.PI * 2);
            ctx.fill();
          }

          const g = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 16);
          g.addColorStop(0, `rgba(${c2.r},${c2.g},${c2.b},0.9)`);
          g.addColorStop(1, `rgba(${c2.r},${c2.g},${c2.b},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(cursor.x, cursor.y, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(${c1.r},${c1.g},${c1.b},1)`;
          ctx.beginPath();
          ctx.arc(cursor.x, cursor.y, 2.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      raf = requestAnimationFrame(tick);
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.inside = mouse.x >= 0 && mouse.x <= r.width && mouse.y >= 0 && mouse.y <= r.height;
      if (mouse.inside && cursor.alpha < 0.05) {
        cursor.x = mouse.x;
        cursor.y = mouse.y;
      }
    };
    const onLeave = () => {
      mouse.inside = false;
    };
    const onVis = () => {
      const show = document.visibilityState === 'visible';
      if (show && visible && !raf) raf = requestAnimationFrame(tick);
      if (!show) visible = false;
      else visible = true;
    };

    resize();
    io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === 'visible';
      if (visible && !raf) raf = requestAnimationFrame(tick);
    }, { threshold: 0.05 });
    io.observe(parent);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);
    if (!coarse) {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('pointerleave', onLeave);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--color-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '640px',
          height: '640px',
          background: 'radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '28%',
          left: '68%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, var(--color-accent2-dim) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
