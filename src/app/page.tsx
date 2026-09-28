import Link from "next/link";
import {
  Cpu,
  Zap,
  ArrowRight,
  Terminal,
  Radio,
  Activity,
  Layers,
  MapPin,
  Flame,
  Globe2,
} from "lucide-react";

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
];

const quickStats = [
  { count: "4+", label: "Deployed Hardware Builds" },
  { count: "240VAC", label: "Industrial AC & DC Metering" },
  { count: "< 12 µA", label: "Deep-Sleep System Current" },
  { count: "1st Place", label: "Kenya & East Africa (YESIST12)" },
];

export default function Home() {
  return (
    <div className="topo-grid-bg pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto space-y-24">
      {/* Immersive Hero Section (GeoHabari Style) */}
      <section className="space-y-8 pt-8 relative">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#783fc6]/15 border border-[#783fc6]/30 text-[#8dc63f] text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8dc63f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8dc63f]"></span>
          </span>
          <span>KENNEDY ODEYO OTIENO — EMBEDDED SYSTEMS &amp; IOT ENGINEER</span>
        </div>

        {/* Hero Title & Geo Coordinates */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f4f4f6] leading-[1.1]">
            Amplifying <span className="text-gradient-geo">African Hardware</span> &amp; IoT Solutions.
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1b5] max-w-2xl leading-relaxed">
            From Nairobi to the global stage — designing real-time load tracking (Cargo-Care), industrial power metering (Oppie-Box), cold-chain BMS devices, and edge telemetry gateways.
          </p>

          <div className="flex items-center gap-2 font-mono text-xs text-[#8dc63f] pt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>1.2921° S / 36.8219° E — NAIROBI, KENYA</span>
          </div>
        </div>

        {/* CTA Group */}
        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <Link
            href="/projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8dc63f] to-[#783fc6] text-[#040406] font-bold shadow-[0_0_25px_rgba(141,198,63,0.3)] hover:opacity-95 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#09090e] border border-[#1a1a27] hover:border-[#8dc63f]/50 text-[#f4f4f6] hover:text-[#8dc63f] transition-all"
          >
            <Terminal className="w-4 h-4 text-[#8dc63f]" />
            <span>Bio &amp; Contact Details</span>
          </Link>
        </div>
      </section>

      {/* GeoHabari-Inspired Animated Stats Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, i) => (
          <div key={i} className="card-elevated p-5 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-gradient-geo font-mono">
              {stat.count}
            </div>
            <div className="text-xs text-[#a1a1b5] font-mono">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Domain Expertise Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#8dc63f]/10 text-[#8dc63f] w-fit border border-[#8dc63f]/20">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#f4f4f6]">Embedded Systems &amp; RTOS</h3>
          <p className="text-xs text-[#a1a1b5] leading-relaxed">
            FreeRTOS multitasking, ESP32, STM32, ATmega328P, UART/SPI/I2C/OneWire protocols, and custom peripheral driver development.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#783fc6]/15 text-[#a766ff] w-fit border border-[#783fc6]/30">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#f4f4f6]">Power &amp; Energy Metering</h3>
          <p className="text-xs text-[#a1a1b5] leading-relaxed">
            Multi-phase AC/DC metering, renewable source integration, voltage/current transformer sensing, and onboard BMS battery chargers.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-xl bg-[#8dc63f]/10 text-[#8dc63f] w-fit border border-[#8dc63f]/20">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#f4f4f6]">Cellular &amp; Cloud IoT</h3>
          <p className="text-xs text-[#a1a1b5] leading-relaxed">
            SIM800C GSM/GPRS telemetry, GPS location tracking, Azure Cloud edge gateways (Raspberry Pi), and Things Cloud IoT integration.
          </p>
        </div>
      </section>

      {/* Featured Hardware Showcase */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-[#1a1a27] pb-4">
          <div>
            <span className="mono-accent text-[#8dc63f]">01 // FEATURED HARDWARE BUILDS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f4f4f6] mt-1">Real-World Engineering Archives</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#8dc63f] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pdfFeaturedHighlights.map((project, idx) => (
            <div key={idx} className="card-elevated p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8dc63f]">
                  <span>{project.category}</span>
                  <span className="px-2 py-0.5 rounded bg-[#8dc63f]/10 border border-[#8dc63f]/20">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#f4f4f6]">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a1a1b5] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1a27] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#666666]">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f4f4f6] hover:text-[#8dc63f] transition-colors shrink-0 ml-2"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
