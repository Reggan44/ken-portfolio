import Link from "next/link";
import {
  Cpu,
  Zap,
  ArrowRight,
  Terminal,
  Radio,
  MapPin,
  Code2,
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
  { count: "4", label: "Deployed Systems", desc: "Cargo-Care, Oppie-Box, Temp Tag, Safe Safari" },
  { count: "240VAC", label: "Metering Precision", desc: "Industrial AC & DC Power Sensing" },
  { count: "< 12 µA", label: "Ultra-Low Sleep", desc: "Deep-Sleep System Power" },
  { count: "1st Place", label: "Hardware Hackathon", desc: "Kenya & East Africa (YESIST12)" },
];

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Ultra-Minimal Hero Section */}
      <section className="space-y-6 pt-4">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-600">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
            Available for Embedded &amp; IoT Projects
          </span>
          <span className="flex items-center gap-1 text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            Nairobi, Kenya
          </span>
        </div>

        {/* Concise Hero Headline */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
            Building Intelligent Embedded Hardware &amp; IoT Systems.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            I am <strong className="text-zinc-900">Kennedy Odeyo Otieno</strong> — an Electrical &amp; Embedded Systems Engineer. I specialize in real-time load manager tracking (Cargo-Care), industrial power metering (Oppie-Box), cold-chain loggers, and edge gateways.
          </p>
        </div>

        {/* Minimal Hero Actions */}
        <div className="flex flex-wrap gap-3 pt-1 font-mono text-xs">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-all shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:kenodeyo@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 font-medium transition-all shadow-sm"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </section>

      {/* Metric Telemetry Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        {telemetryMetrics.map((metric, i) => (
          <div key={i} className="card-elevated p-4 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-zinc-900 font-mono">
              {metric.count}
            </div>
            <div className="text-xs font-semibold text-zinc-800 font-mono">{metric.label}</div>
            <div className="text-[11px] text-zinc-500 font-mono">{metric.desc}</div>
          </div>
        ))}
      </section>

      {/* Domain Expertise Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">Embedded Systems &amp; RTOS</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            FreeRTOS multitasking, ESP32, STM32, ATmega328P, UART/SPI/I2C/OneWire protocols, and custom drivers.
          </p>
        </div>

        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">Power &amp; Energy Metering</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Multi-phase AC/DC metering, renewable integration, voltage/current transformers, and BMS chargers.
          </p>
        </div>

        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 w-fit">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">Cellular &amp; Cloud IoT</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            SIM800C GSM/GPRS telemetry, GPS location tracking, Azure Cloud edge gateways (Raspberry Pi), and Things Cloud.
          </p>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-3">
          <div>
            <span className="font-mono text-xs text-indigo-600 font-semibold uppercase tracking-wider">01 // FEATURED HARDWARE BUILDS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-0.5">Projects Showcase</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1 text-xs font-mono text-indigo-600 font-medium hover:underline"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pdfFeaturedHighlights.map((project, idx) => (
            <article key={idx} className="card-elevated p-6 flex flex-col justify-between space-y-4 group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-indigo-600 font-semibold">{project.category}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-900 font-medium hover:text-indigo-600 transition-colors shrink-0 ml-2"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <QuoteCarousel />
    </div>
  );
}
