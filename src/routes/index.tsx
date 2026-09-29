import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CloudLightning,
  CloudRain,
  Cpu,
  Database,
  Gauge,
  Github,
  MapPin,
  Network,
  Plane,
  Radio,
  RadioTower,
  Satellite,
  ShieldAlert,
  Sprout,
  TriangleAlert,
  WifiOff,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import stormMap from "@/assets/vajradrishti-storm-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VajraDrishti — Edge-AI Weather Nowcasting | SIH 2026" },
      {
        name: "description",
        content:
          "VajraDrishti delivers hyperlocal 0–6 hour probabilistic warnings for thunderstorms, hail, and cloudbursts—even without cloud connectivity.",
      },
      { property: "og:title", content: "VajraDrishti — Hyperlocal storm vision, even without the cloud." },
      {
        property: "og:description",
        content: "An edge-first, multi-source weather nowcasting platform built for India's last mile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problemItems = [
  {
    icon: Gauge,
    title: "Rapid Convective Initiation",
    copy: "Traditional NWP models update too slowly for storms that intensify in minutes.",
    stat: "< 10 min",
    label: "onset window",
  },
  {
    icon: MapPin,
    title: "No Hyperlocal Alerting",
    copy: "District-level warnings miss the village, farm, runway, or rail corridor at risk.",
    stat: "1–3 km",
    label: "needed precision",
  },
  {
    icon: CloudRain,
    title: "Extreme Event Blindspot",
    copy: "Standard CNNs smooth away the intense rainfall peaks that define cloudbursts.",
    stat: ">100",
    label: "mm/hr extremes",
  },
  {
    icon: WifiOff,
    title: "Connectivity Gaps",
    copy: "Remote areas lose radar feeds and internet precisely when storms strike hardest.",
    stat: "0 cloud",
    label: "required on edge",
  },
];

const innovations = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Physics-Informed Diffusion",
    copy: "Preserves extreme amplitudes instead of averaging away cloudburst signatures above 100 mm/hr.",
    tag: "Extreme-aware",
  },
  {
    number: "02",
    icon: CloudLightning,
    title: "Cloudburst-Specific Head",
    copy: "Tracks reflectivity spikes above 45 dBZ in under 10 minutes and sudden VIL jumps.",
    tag: "Rapid detection",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Explainable AI",
    copy: "Makes every warning auditable with live contribution weights from radar, satellite, and lightning.",
    tag: "Decision trust",
  },
  {
    number: "04",
    icon: ShieldAlert,
    title: "Graceful Degradation",
    copy: "Automatically reweights satellite and camera signals whenever ground radar becomes unavailable.",
    tag: "Fault tolerant",
  },
  {
    number: "05",
    icon: Network,
    title: "Federated Learning",
    copy: "Edge nodes strengthen the global model without centralizing sensitive or bandwidth-heavy raw data.",
    tag: "Privacy first",
  },
  {
    number: "06",
    icon: RadioTower,
    title: "Multi-Channel Alerting",
    copy: "Delivers warnings through SMS, WhatsApp API, LoRa mesh, and an on-site siren in parallel.",
    tag: "Last-mile ready",
  },
];

const impacts = [
  { icon: ShieldAlert, title: "Safer response", copy: "Earlier action for localized cloudbursts and flash flooding." },
  { icon: Sprout, title: "Rural protection", copy: "Decision support helps farmers alter harvest and field operations." },
  { icon: Plane, title: "Transport safety", copy: "Operational visibility for aviation and rail corridors." },
  { icon: Network, title: "State-wide scale", copy: "One modular framework, from a VajraBox to regional deployment." },
];

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((current) => (current <= 0 ? initialSeconds : current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [initialSeconds]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs].map((value) => value.toString().padStart(2, "0")).join(":");
}

function Index() {
  const countdown = useCountdown(42 * 60 + 15);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="VajraDrishti home">
            <span className="brand-mark" aria-hidden="true"><Zap /></span>
            <span className="font-display text-base font-bold tracking-normal md:text-lg">VajraDrishti</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#problem">Problem</a>
            <a className="nav-link" href="#solution">Solution</a>
            <a className="nav-link" href="#architecture">Architecture</a>
            <a className="nav-link" href="#impact">Impact</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs font-medium text-signal sm:flex">
              <span className="status-dot" /> System online
            </span>
            <span className="border-l border-border pl-3 font-mono text-[11px] text-muted-foreground">SIH26084</span>
          </div>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden pt-16 md:min-h-[820px]">
        <img
          src={stormMap}
          alt="Satellite visualization of a severe storm system over India"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="map-grid absolute inset-0 opacity-30" />
        <div className="radar-sweep absolute right-[3%] top-[14%] hidden aspect-square w-[55vw] max-w-[790px] rounded-full lg:block" aria-hidden="true" />
        <div className="storm-track absolute right-[17%] top-[37%] hidden lg:block" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-end gap-10 px-5 pb-10 md:px-8 md:pb-14 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-16">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="eyebrow"><span className="status-dot" /> Smart India Hackathon 2026</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">वज्र दृष्टि</span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-normal sm:text-6xl lg:text-[76px]">
              Edge-AI nowcasting for <span className="text-signal">extreme weather.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              0–6 hour probabilistic warnings for thunderstorms, hail, and cloudbursts at 1–3 km resolution. Operating offline, when it matters most.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("demo")} className="h-12 rounded-sm px-6 text-sm font-bold">
                View live demo <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("architecture")} className="h-12 rounded-sm border-foreground/25 bg-background/25 px-6 text-sm font-bold backdrop-blur-sm hover:bg-foreground/10">
                Read technical paper
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-foreground/15 pt-5 text-xs text-muted-foreground">
              <span><strong className="mr-2 font-mono text-foreground">06 HR</strong>forecast horizon</span>
              <span><strong className="mr-2 font-mono text-foreground">1–3 KM</strong>spatial resolution</span>
              <span><strong className="mr-2 font-mono text-foreground">EDGE</strong>cloud optional</span>
            </div>
          </div>

          <div id="demo" className="telemetry-panel justify-self-end">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"><Radio className="h-4 w-4 text-signal" /> Live cell telemetry</div>
              <span className="alert-chip"><TriangleAlert className="h-3 w-3" /> severe</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
              <div className="p-4">
                <p className="data-label">Storm arrival</p>
                <p className="mt-1 font-mono text-3xl font-semibold text-warning sm:text-4xl">{countdown}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">ETA · Ward 14, Nashik</p>
              </div>
              <div className="p-4">
                <p className="data-label">Nowcast confidence</p>
                <p className="mt-1 font-mono text-3xl font-semibold text-foreground sm:text-4xl">87<span className="text-base text-signal">%</span></p>
                <div className="mt-2 h-1 overflow-hidden bg-muted"><div className="h-full w-[87%] bg-signal" /></div>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border">
              <Metric label="Reflectivity" value="52" unit="dBZ" />
              <Metric label="Rain rate" value="118" unit="mm/h" />
              <Metric label="Motion" value="ENE" unit="24 km/h" />
            </div>
            <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[10px] text-muted-foreground">
              <span>FUSED · 4/4 SOURCES</span><span>UPDATED 04s AGO</span>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => scrollTo("problem")} className="absolute bottom-7 right-8 hidden text-muted-foreground transition-colors hover:text-foreground xl:block" aria-label="Scroll to problem statement"><ArrowDown /></button>
      </section>

      <section id="problem" className="section-shell bg-surface">
        <div className="section-heading">
          <div><p className="section-kicker">01 / The challenge</p><h2>Severe weather moves faster than today’s warning systems.</h2></div>
          <p>India’s most damaging convective events form at neighborhood scale, while operational forecasts remain too coarse, slow, or connected to reach the last mile.</p>
        </div>
        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {problemItems.map((item) => (
            <article key={item.title} className="problem-cell">
              <item.icon className="h-6 w-6 text-warning" />
              <h3>{item.title}</h3><p>{item.copy}</p>
              <div className="mt-8 border-t border-border pt-4"><strong>{item.stat}</strong><span>{item.label}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="solution" className="section-shell">
        <div className="section-heading">
          <div><p className="section-kicker">02 / The system</p><h2>One intelligence layer. Two deployment modes.</h2></div>
          <p>VajraDrishti fuses the complete atmospheric picture, while VajraBox keeps that intelligence running locally when networks fail.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
          <article className="solution-pane bg-background">
            <div className="solution-index">A</div><Satellite className="h-8 w-8 text-signal" />
            <p className="section-kicker mt-8">Cloud intelligence</p><h3>VajraDrishti Software</h3>
            <p>Radar, INSAT-3D/3DR, lightning, and all-sky camera data converge inside a physics-informed diffusion engine.</p>
            <div className="source-flow">
              {["RADAR", "INSAT", "LIGHTNING", "CAMERA"].map((source) => <span key={source}>{source}</span>)}
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-signal"><BrainCircuit /> Physics-informed fusion engine <ChevronRight className="ml-auto" /></div>
          </article>
          <article className="solution-pane bg-background">
            <div className="solution-index">B</div><Cpu className="h-8 w-8 text-warning" />
            <p className="section-kicker mt-8">Edge resilience</p><h3>VajraBox Device</h3>
            <p>A portable Jetson Orin Nano or Raspberry Pi 5 runs distilled intelligence locally—without depending on the cloud.</p>
            <div className="device-visual">
              <div className="device-core"><Zap /><span>INT8</span></div>
              <span className="device-signal signal-one" /><span className="device-signal signal-two" /><span className="device-signal signal-three" />
            </div>
            <div className="mt-8 flex flex-wrap gap-2">{["LOCAL SIREN", "LORA MESH", "SMS"].map((tag) => <span key={tag} className="tech-tag"><Check /> {tag}</span>)}</div>
          </article>
        </div>
      </section>

      <section className="section-shell bg-surface">
        <div className="section-heading">
          <div><p className="section-kicker">03 / Core innovations</p><h2>Built for extremes—not average weather.</h2></div>
          <p>Each layer addresses a failure mode found in conventional forecasting and centralized warning infrastructure.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {innovations.map((item) => (
            <article key={item.number} className="innovation-card group">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">{item.number}</span><item.icon className="h-5 w-5 text-signal transition-transform duration-300 group-hover:scale-110" /></div>
              <h3>{item.title}</h3><p>{item.copy}</p><span className="innovation-tag">{item.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section-shell">
        <div className="section-heading">
          <div><p className="section-kicker">04 / Technical architecture</p><h2>From atmospheric data to action at the edge.</h2></div>
          <p>Research-grade training becomes an optimized field model, then turns forecast probabilities into resilient alerts.</p>
        </div>
        <div className="architecture-flow mt-14">
          <ArchitectureStage number="01" icon={Database} label="Cloud training" title="Build the weather foundation" items={["PyTorch / JAX", "ERA5 + IMDAA", "NCUM / NEPS-G"]} />
          <FlowArrow label="MODEL" />
          <ArchitectureStage number="02" icon={Cpu} label="Edge deployment" title="Compress without compromise" items={["Knowledge Distillation", "INT8 Quantization", "TensorRT / ONNX"]} />
          <FlowArrow label="INFERENCE" />
          <ArchitectureStage number="03" icon={RadioTower} label="Alert engine" title="Reach every last mile" items={["WebSocket Dashboard", "REST API", "GPIO Siren / LoRa"]} />
        </div>
        <div className="mt-8 grid border border-border lg:grid-cols-[1fr_1.4fr]">
          <div className="p-6 md:p-8"><p className="section-kicker">Explainability trace · Cell MH-042</p><h3 className="mt-3 font-display text-2xl font-bold">Why this alert triggered</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Every operational warning includes a transparent feature contribution breakdown for human verification.</p></div>
          <div className="grid grid-cols-2 gap-6 border-t border-border p-6 sm:grid-cols-4 lg:border-l lg:border-t-0 lg:p-8">
            <Contribution label="Radar" value="34%" width="w-[34%]" />
            <Contribution label="Cloud-top temp" value="22%" width="w-[22%]" />
            <Contribution label="Lightning" value="18%" width="w-[18%]" />
            <Contribution label="Other signals" value="26%" width="w-[26%]" />
          </div>
        </div>
      </section>

      <section id="impact" className="section-shell impact-section">
        <div className="section-heading">
          <div><p className="section-kicker text-signal">05 / National impact</p><h2>Earlier warnings. Stronger decisions. Fewer losses.</h2></div>
          <p>Designed for the institutions and communities that carry the real cost of India’s extreme weather.</p>
        </div>
        <div className="mt-12 grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item) => <article key={item.title} className="impact-cell"><item.icon /><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-foreground/15 pt-10 lg:flex-row lg:items-end">
          <div><p className="font-mono text-xs uppercase tracking-widest text-signal">The mission</p><p className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Hyperlocal storm vision,<br />even without the cloud.</p></div>
          <Button onClick={() => scrollTo("demo")} className="h-12 rounded-sm px-6 font-bold">Explore the live system <ArrowRight /></Button>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div className="flex items-center gap-4"><span className="brand-mark"><Zap /></span><div><p className="font-display font-bold">VajraDrishti <span className="font-normal text-muted-foreground">× DassandCo</span></p><p className="mt-1 text-xs text-muted-foreground">Smart India Hackathon 2026 · Problem Statement SIH26084</p></div></div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-muted-foreground" aria-label="Footer navigation">
            <a className="footer-link" href="#architecture"><Github /> GitHub Repository</a>
            <a className="footer-link" href="#demo">Demo Video</a>
            <a className="footer-link" href="#solution">IMD / MOSDAC Data APIs</a>
            <a className="footer-link" href="#top">Contact Us</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function Metric({ label, value, unit }: { label: string; value: string; unit: string }) {
  return <div className="p-4"><p className="data-label">{label}</p><p className="mt-2 font-mono text-xl font-semibold">{value}</p><p className="font-mono text-[9px] uppercase text-muted-foreground">{unit}</p></div>;
}

function ArchitectureStage({ number, icon: Icon, label, title, items }: { number: string; icon: typeof Database; label: string; title: string; items: string[] }) {
  return <article className="architecture-stage"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">{number}</span><Icon className="h-6 w-6 text-signal" /></div><p className="section-kicker mt-8">{label}</p><h3>{title}</h3><ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul></article>;
}

function FlowArrow({ label }: { label: string }) {
  return <div className="flow-arrow"><span>{label}</span><ArrowRight /></div>;
}

function Contribution({ label, value, width }: { label: string; value: string; width: string }) {
  return <div><div className="flex items-baseline justify-between gap-2"><span className="text-xs text-muted-foreground">{label}</span><strong className="font-mono text-sm">{value}</strong></div><div className="mt-3 h-1 bg-muted"><div className={`h-full bg-signal ${width}`} /></div></div>;
}