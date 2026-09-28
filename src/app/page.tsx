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
    <div className="bright-pattern-bg pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto space-y-16">
      {/* Crisp White Hero Section with Minimal Accents */}
      <section className="space-y-8 pt-6 relative">
        {/* Status Badge & Nairobi Coordinates */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[#783fc6] text-xs font-mono font-semibold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8dc63f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8dc63f]"></span>
            </span>
            <span>AVAILABLE FOR HARDWARE PROJECTS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-mono shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#8dc63f]" />
            <span>1°17'S 36°49'E • NAIROBI, KE</span>
          </div>
        </div>

        {/* High-Contrast Crisp Editorial Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
            Architecting <span className="text-gradient-purple">Embedded Hardware</span> &amp; IoT Systems.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
            I am <strong className="text-zinc-900">Kennedy Odeyo Otieno</strong> — an Electrical &amp; IoT Engineer. I design real-time load tracking (Cargo-Care), industrial power meters (Oppie-Box), cold-chain BMS loggers, and edge cloud gateways.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <Link
            href="/projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#783fc6] text-white font-bold shadow-[0_4px_16px_rgba(120,63,198,0.3)] hover:bg-[#6631b0] hover:scale-[1.02] transition-all"
          >
            <span>Explore Engineering Builds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-zinc-200 text-zinc-800 hover:border-[#783fc6] hover:text-[#783fc6] transition-all shadow-sm"
          >
            <Terminal className="w-4 h-4 text-[#783fc6]" />
            <span>Lab Bench &amp; Bio</span>
          </Link>
        </div>
      </section>

      {/* Clean Telemetry Metric Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        {telemetryMetrics.map((metric, i) => (
          <div key={i} className="card-elevated p-5 text-center space-y-1 hover:border-[#783fc6]">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#783fc6] font-mono">
              {metric.count}
            </div>
            <div className="text-xs font-bold text-zinc-900 font-mono">{metric.label}</div>
            <div className="text-[11px] text-zinc-500 font-mono">{metric.desc}</div>
          </div>
        ))}
      </section>

      {/* Domain Expertise Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#783fc6]/10 text-[#783fc6] w-fit border border-[#783fc6]/20">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900">Embedded Systems &amp; RTOS</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            FreeRTOS multitasking, ESP32, STM32, ATmega328P, UART/SPI/I2C/OneWire protocols, and custom peripheral driver development.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#8dc63f]/15 text-[#65a30d] w-fit border border-[#8dc63f]/30">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900">Power &amp; Energy Metering</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Multi-phase AC/DC metering, renewable source integration, voltage/current transformer sensing, and onboard BMS battery chargers.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#0284c7]/10 text-[#0284c7] w-fit border border-[#0284c7]/20">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900">Cellular &amp; Cloud IoT</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            SIM800C GSM/GPRS telemetry, GPS location tracking, Azure Cloud edge gateways (Raspberry Pi), and Things Cloud IoT integration.
          </p>
        </div>
      </section>

      {/* Project Catalog Showcase */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-4">
          <div>
            <span className="mono-accent text-[#783fc6]">01 // FEATURED HARDWARE SHOWCASE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-1">Real-World Project Builds</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#783fc6] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pdfFeaturedHighlights.map((project, idx) => (
            <article key={idx} className="card-elevated p-7 flex flex-col justify-between space-y-6 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#783fc6]">
                  <span>{project.category}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#783fc6]/10 border border-[#783fc6]/20 font-semibold">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#783fc6] transition-colors">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-900 hover:text-[#783fc6] transition-colors shrink-0 ml-2"
                >
                  <span>Specs &amp; BOM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Testimonials */}
      <QuoteCarousel />
    </div>
  );
}
