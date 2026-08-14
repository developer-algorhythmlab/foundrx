import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme.jsx";

// Fires once when an element scrolls into view.
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Types out a headline made of segments; accent segments keep the gradient styling.
// segments: [{ text: "...", accent?: true }]
// start: when false, waits to begin typing (e.g. until scrolled into view)
export function Typewriter({ segments, speed = 46, startDelay = 300, ariaLabel, style, start = true }) {
  const { reduceMotion } = useTheme();
  const full = segments.reduce((n, s) => n + s.text.length, 0);
  const [count, setCount] = useState(reduceMotion ? full : 0);
  const [done, setDone] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setCount(full);
      setDone(true);
      return;
    }
    if (!start) {
      setCount(0);
      setDone(false);
      return;
    }
    setCount(0);
    setDone(false);
    let i = 0;
    let t;
    const step = () => {
      i += 1;
      setCount(i);
      if (i >= full) {
        setDone(true);
        return;
      }
      const typedChar = charAt(segments, i - 1);
      const extra = typedChar === "," ? 260 : Math.random() * 40;
      t = setTimeout(step, speed + extra);
    };
    t = setTimeout(step, startDelay);
    return () => clearTimeout(t);
  }, [full, speed, startDelay, reduceMotion, start]);

  let remaining = count;
  return (
    <span aria-label={ariaLabel} style={style}>
      <span aria-hidden="true">
        {segments.map((seg, idx) => {
          const shown = Math.max(0, Math.min(seg.text.length, remaining));
          remaining -= seg.text.length;
          const txt = seg.text.slice(0, shown);
          if (!txt) return null;
          return seg.accent ? (
            <span key={idx} className="accent">{txt}</span>
          ) : (
            <span key={idx}>{txt}</span>
          );
        })}
        {!done && <span className="type-caret blink" aria-hidden="true">&nbsp;</span>}
      </span>
    </span>
  );
}

function charAt(segments, index) {
  let n = index;
  for (const s of segments) {
    if (n < s.text.length) return s.text[n];
    n -= s.text.length;
  }
  return "";
}

// Wraps a container so its direct children animate in (staggered) when scrolled into view.
export function ScrollReveal({ children, className = "", threshold = 0.2, as: Tag = "div" }) {
  const [ref, inView] = useInView({ threshold });
  return (
    <Tag ref={ref} className={`${className} scroll-reveal${inView ? " in-view" : ""}`}>
      {children}
    </Tag>
  );
}


// Animate a number from 0 to `target`. `start` gates when it begins (e.g. on scroll-in).
export function useCountUp(target, duration = 1100, start = true) {
  const { reduceMotion } = useTheme();
  const [val, setVal] = useState(reduceMotion ? target : 0);
  const raf = useRef();

  useEffect(() => {
    if (reduceMotion) {
      setVal(target);
      return;
    }
    if (!start) {
      setVal(0);
      return;
    }
    let t0;
    const step = (t) => {
      if (t0 == null) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, reduceMotion, start]);

  return val;
}

// A number that counts up, with optional prefix/suffix and thousands grouping.
export function StatCounter({ value, prefix = "", suffix = "", comma = false, start = true, duration = 1500 }) {
  const v = useCountUp(value, duration, start);
  const rounded = Math.round(v);
  const text = comma ? rounded.toLocaleString("en-US") : String(rounded);
  return (
    <>
      {prefix}
      {text}
      {suffix}
    </>
  );
}

export function CountUp({ value, decimals = 0, suffix = "", prefix = "" }) {
  const v = useCountUp(value);
  return (
    <>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </>
  );
}

// A progress bar that grows from 0 to `value`% on mount.
export function AnimatedBar({ value, height = 8, color = "var(--grad-brand)", delay = 0, track = "var(--line)" }) {
  const { reduceMotion } = useTheme();
  const [w, setW] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setW(value);
      return;
    }
    const id = setTimeout(() => setW(value), 60 + delay);
    return () => clearTimeout(id);
  }, [value, delay, reduceMotion]);

  return (
    <div style={{ height, borderRadius: 999, background: track, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${w}%`,
          borderRadius: 999,
          background: color,
          transition: reduceMotion ? "none" : "width 1s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}
