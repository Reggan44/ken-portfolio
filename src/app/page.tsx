import Link from "next/link";
import {
  Cpu,
  Zap,
  ArrowRight,
  Terminal,
  Radio,
  MapPin,
  Flame,
  Globe2,
  Award,
  Layers,
  Activity,
} from "lucide-react";
import { QuoteCarousel } from "@/components/QuoteCarousel";

const pdfFeaturedHighlights = [
  {
    title: "Cargo-Care: Load Manager & Tamper Tracker",
    category: "ESP32 / FREERTOS / GSM",
    specs: "FreeRTOS • SIM800C GPS/SMS • Wi-Fi AP • HX711 Load Cell",
    description:
      "Battery-powered weight and tamper tracking solution for goods in transit with real-time SMS alerts, onboard OLED UI, and dual Wi-Fi Access Point mode.",
    link: "/projects/cargo-care-tracking-solution",
    tag: "FreeRTOS / IoT",
  },
  {
    title: "Oppie-Box: Power Metering & Edge Gateway",
    category: "ATMEGA328P / RASPBERRY PI / AZURE",
    specs: "Dual ATmega328P • Edge Computing • AC/DC Metering",
    description:
      "Industrial multi-phase energy metering and fault diagnosis system with Raspberry Pi edge integration for Microsoft Azure Cloud telemetry.",
    link: "/projects/oppie-box-power-metering-gateway",
    tag: "Energy / Cloud",
  },
  {
    title: "Temperature Tag: Cold Chain Monitoring & BMS",
    category: "ESP32 / COLD CHAIN / BMS",
    specs: "AHT30 Temp/Humidity • BMS Charger • GPRS Gateway",
    description:
      "Precision cold chain environmental logger with magnetic door sensor counter, onboard BMS battery charger, and RGB diagnostic status LEDs.",
    link: "/projects/temperature-tag-cold-chain-bms",
    tag: "BMS / Sensors",
  },
  {
    title: "Safe Safari: Global YESIST12 Telemetry Unit",
    category: "THINGSCLOUD / IOT / COMPETITION",
    specs: "Things Cloud Platform • IP65 ABS • Global Finalist",
    description:
      "Award-winning safety telemetry node. Awarded 1st place in Kenya & East Africa, representing the region at the Global YESIST12 Finals in Malaysia.",
    link: "/projects/safe-safari-global-finalist-telemetry",
    tag: "1st Place Winner",
  },
];

const telemetryMetrics = [
  { count: "4", label: "Deployed Builds", desc: "Cargo-Care, Oppie-Box, Temp Tag, Safe Safari" },
  { count: "240VAC", label: "Metering Precision", desc: "Industrial AC & DC Power Sensing" },
  { count: "< 12 µA", label: "Ultra-Low Sleep", desc: "Deep-Sleep System Power" },
  { count: "1st Place", label: "Hardware Hackathon", desc: "Kenya & East Africa (YESIST12)" },
];

export default function Home() {
  return (
    <div className="topo-circuit-bg pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto space-y-20">
      {/* Refactored Hero Section with Topographic & Circuit Traces */}
      <section className="space-y-8 pt-6 relative">
        {/* Radar Status Badge & Nairobi Coordinates */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#783fc6]/15 border border-[#783fc6]/30 text-[#8dc63f] text-xs font-mono font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8dc63f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8dc63f]"></span>
            </span>
            <span>AVAILABLE FOR HARDWARE PROJECTS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#09090e] border border-[#1a1a27] text-[#a1a1b5] text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#8dc63f]" />
            <span>1°17'S 36°49'E • NAIROBI, KE</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f4f4f6] leading-[1.1]">
            Architecting <span className="text-gradient-geo">Embedded Hardware</span> &amp; IoT Intelligence.
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1b5] max-w-2xl leading-relaxed">
            I am <strong className="text-[#f4f4f6]">Kennedy Odeyo Otieno</strong> — an Electrical &amp; IoT Engineer. I design real-time load tracking systems (Cargo-Care), multi-phase industrial power meters (Oppie-Box), cold-chain BMS loggers, and edge cloud gateways.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <Link
            href="/projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8dc63f] to-[#783fc6] text-[#040406] font-bold shadow-[0_0_25px_rgba(141,198,63,0.35)] hover:scale-[1.02] transition-transform"
          >
            <span>Explore Engineering Builds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#09090e] border border-[#1a1a27] hover:border-[#8dc63f]/50 text-[#f4f4f6] hover:text-[#8dc63f] transition-all"
          >
            <Terminal className="w-4 h-4 text-[#8dc63f]" />
            <span>Lab Bench &amp; Bio</span>
          </Link>
        </div>
      </section>

      {/* Telemetry Metric Counters Bar (Hero to Projects Transition) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {telemetryMetrics.map((metric, i) => (
          <div key={i} className="card-elevated p-5 text-center space-y-1 hover:border-[#8dc63f]/50">
            <div className="text-2xl sm:text-3xl font-extrabold text-gradient-geo font-mono">
              {metric.count}
            </div>
            <div className="text-xs font-bold text-[#f4f4f6] font-mono">{metric.label}</div>
            <div className="text-[11px] text-[#a1a1b5] font-mono">{metric.desc}</div>
          </div>
        ))}
      </section>

      {/* Project Catalog & Cards (Magical Kenya Grid + Sofiyan Aesthetics) */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-[#1a1a27] pb-4">
          <div>
            <span className="mono-accent text-[#8dc63f]">01 // FEATURED HARDWARE SHOWCASE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f4f4f6] mt-1">Real-World Project Builds</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#8dc63f] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pdfFeaturedHighlights.map((project, idx) => (
            <article key={idx} className="card-elevated p-7 flex flex-col justify-between space-y-6 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8dc63f]">
                  <span>{project.category}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#8dc63f]/10 border border-[#8dc63f]/25 font-semibold">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#f4f4f6] group-hover:text-[#8dc63f] transition-colors">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
                <p className="text-xs text-[#a1a1b5] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1a27] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#666666]">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f4f4f6] hover:text-[#8dc63f] transition-colors shrink-0 ml-2"
                >
                  <span>Specs &amp; BOM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Testimonials & Quote Carousel (GeoHabari Light Canvas) */}
      <QuoteCarousel />
    </div>
  );
}
