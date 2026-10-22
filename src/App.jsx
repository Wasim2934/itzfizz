import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Car from "./Car.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const metrics = [
  { value: "58%", label: "Increase in pick-up point use", tone: "lime" },
  { value: "27%", label: "Increase in pick-up point use", tone: "dark" },
  { value: "23%", label: "Decrease in customer phone calls", tone: "blue" },
  { value: "40%", label: "Decrease in customer phone calls", tone: "orange" },
];

function MetricCard({ value, label, tone, index }) {
  return (
    <article className={`metric-card metric-${tone}`} data-metric={index}>
      <strong>{value}</strong>
      <p>{label}</p>
    </article>
  );
}

export default function App() {
  const root = useRef(null);
  const hero = useRef(null);
  const car = useRef(null);
  const title = useRef(null);
  const road = useRef(null);
  const trail = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const letters = gsap.utils.toArray(".headline-letter", root.current);
    const cards = gsap.utils.toArray(".metric-card", root.current);

    // Intro motion: short, independent of the scroll-linked car movement.
    if (!reduceMotion) {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".eyebrow", { y: 12, autoAlpha: 0, duration: 0.65 })
        .from(letters, { yPercent: 110, autoAlpha: 0, stagger: 0.035, duration: 0.7 }, "-=0.35")
        .from(cards, { y: 22, autoAlpha: 0, stagger: 0.12, duration: 0.55 }, "-=0.25");
    }

    // Pin the scene. Scroll progress controls horizontal car travel; the page
    // itself remains in place until the car reaches the right side.
    const travel = () => Math.max(0, window.innerWidth - (car.current?.getBoundingClientRect().width || 360) - 20);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: () => `+=${Math.max(900, window.innerHeight * 1.65)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(car.current, { x: travel, ease: "none", duration: 1 }, 0)
      .to(trail.current, { scaleX: 1, ease: "none", transformOrigin: "left center", duration: 1 }, 0)
      .to(letters, { color: "#d0ff45", stagger: 0.025, ease: "none", duration: 0.42 }, 0.18)
      .to(".headline-wrap", { xPercent: -3, ease: "none", duration: 1 }, 0)
      .to(cards, { y: (i) => (i % 2 === 0 ? -10 : 10), ease: "none", stagger: 0.08, duration: 0.8 }, 0.12);

    // Make the scroll prompt fade away as soon as the user starts scrolling.
    gsap.to(".scroll-hint", {
      autoAlpha: 0,
      scrollTrigger: { trigger: hero.current, start: "top top", end: "+=180", scrub: true },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, { scope: root });

  const headline = "WELCOME ITZFIZZ";

  return (
    <main ref={root} className="site-shell">
      <section ref={hero} className="hero" aria-label="ITZFIZZ scroll animation">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="ITZFIZZ home">ITZ<span>FIZZ</span><i>®</i></a>
          <span className="topbar-note">MOVE FORWARD. THINK DIFFERENT.</span>
          <span className="topbar-index">SCROLL EXPERIENCE <b>01 / 01</b></span>
        </header>

        <div className="metrics metrics-top">
          {metrics.slice(0, 2).map((m, i) => <MetricCard key={m.value} {...m} index={i} />)}
        </div>

        <div className="headline-band">
          <div className="headline-wrap" ref={title}>
            <h1 aria-label={headline}>
              {headline.split("").map((letter, i) => (
                <span key={`${letter}-${i}`} className={`headline-letter ${letter === " " ? "word-gap" : ""}`} aria-hidden="true">
                  {letter === " " ? "\u00a0" : letter}
                </span>
              ))}
            </h1>
          </div>
          <span className="band-index">ITZFIZZ / EST. 2024</span>
        </div>

        <div className="road-stage" ref={road}>
          <div className="road-edge road-edge-top" />
          <div className="road-surface">
            <div className="road-dash" />
            <div ref={trail} className="green-trail" />
            <div className="road-glow" />
          </div>
          <div ref={car} className="car-position">
            <Car />
          </div>
          <span className="road-caption road-caption-left">BUILT TO MOVE</span>
          <span className="road-caption road-caption-right">PROGRESS IN MOTION →</span>
          <div className="road-edge road-edge-bottom" />
        </div>

        <div className="bottom-content">
          <div className="bottom-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> THE IMPACT, IN MOTION</span>
            <p>Small changes.<br /><em>Meaningful</em> momentum.</p>
            <span className="bottom-sub">A smarter last mile starts with a better experience.</span>
          </div>
          <div className="metrics metrics-bottom">
            {metrics.slice(2).map((m, i) => <MetricCard key={m.value} {...m} index={i + 2} />)}
          </div>
        </div>

        <div className="scroll-hint"><span className="scroll-line" /> SCROLL TO DRIVE <span className="scroll-arrow">↓</span></div>
        <footer className="hero-footer"><span>DESIGNED FOR THE NEXT MILE</span><span>SCROLL TO EXPLORE</span><span>© ITZFIZZ</span></footer>
      </section>
      <section className="afterword">
        <span className="eyebrow"><span className="eyebrow-dot" /> YOU MADE IT</span>
        <h2>Good things happen<br />when <em>everything</em> moves.</h2>
        <p>Built with React, Tailwind CSS, GSAP and ScrollTrigger.</p>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK TO TOP ↑</a>
      </section>
    </main>
  );
}