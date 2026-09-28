import Link from "next/link";
import {
  Cpu,
  Zap,
  ArrowRight,
  Terminal,
  Radio,
  ShieldAlert,
  Activity,
  Layers,
  Thermometer,
} from "lucide-react";

const pdfFeaturedHighlights = [
  {
    title: "Cargo-Care: Load Manager & Tamper Tracker",
    category: "ESP32 / RTOS / GSM",
    specs: "FreeRTOS • SIM800C GPS/SMS • Wi-Fi AP • HX711 Load Cell",
    description:
      "Battery-powered weight and tamper tracking solution for goods in transit with real-time SMS alerts and OLED configuration screen.",
    link: "/projects/cargo-care-tracking-solution",
    tag: "FreeRTOS / IoT",
  },
  {
    title: "Oppie-Box: Power Metering & Edge Gateway",
    category: "ATMEGA328P / RASPBERRY PI / AZURE",
    specs: "Dual ATmega328P • Edge Computing • AC/DC Metering",
    description:
      "Industrial multi-phase energy metering and fault diagnosis system with Raspberry Pi edge integration for Azure Cloud telemetry.",
    link: "/projects/oppie-box-power-metering-gateway",
    tag: "Energy / Cloud",
  },
  {
    title: "Temperature Tag: Cold Chain Monitoring & BMS",
    category: "ESP32 / COLD CHAIN / BMS",
    specs: "AHT30 Temp/Humidity • BMS Charger • GPRS Gateway",
    description:
      "Precision cold chain logger with door sensor counter, onboard BMS battery charger, and RGB status LEDs.",
    link: "/projects/temperature-tag-cold-chain-bms",
    tag: "BMS / Sensors",
  },
];

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          KENNEDY ODEYO OTIENO — EMBEDDED SYSTEMS &amp; IOT ENGINEER
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ededed] leading-[1.1]">
            Engineering <span className="text-gradient">Real-World IoT &amp; Embedded</span> Builds from Circuit to Cloud.
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed">
            I specialize in custom PCB hardware bring-ups, ESP32/STM32 FreeRTOS firmware, cellular GSM/GPS telemetry (Cargo-Care), multi-phase power metering (Oppie-Box), and cold-chain BMS systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
          >
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 text-[#ededed] hover:text-[#3b82f6] transition-all"
          >
            <Terminal className="w-4 h-4 text-[#3b82f6]" />
            <span>Bio &amp; Contact Details</span>
          </Link>
        </div>
      </section>

      {/* Domain Expertise Metrics / Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">Embedded Systems &amp; RTOS</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            FreeRTOS multitasking, ESP32, STM32, ATmega328P, UART/SPI/I2C/OneWire protocols, and custom peripheral drivers.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">Power &amp; Energy Metering</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            Multi-phase AC/DC metering, renewable source integration, voltage/current transformer sensing, and onboard BMS battery chargers.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">Cellular &amp; Cloud IoT</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            SIM800C GSM/GPRS telemetry, GPS location tracking, Azure Cloud edge gateways (Raspberry Pi), and Things Cloud IoT integration.
          </p>
        </div>
      </section>

      {/* Featured Hardware Projects Preview */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-[#1e293b] pb-4">
          <div>
            <span className="mono-accent">01 // FEATURED HARDWARE BUILDS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#ededed] mt-1">Real-World Project Archives</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#3b82f6] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pdfFeaturedHighlights.map((project, idx) => (
            <div key={idx} className="card-elevated p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#3b82f6]">
                  <span>{project.category}</span>
                  <span className="px-2 py-0.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#ededed]">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e293b]/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#666666]">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#ededed] hover:text-[#3b82f6] transition-colors shrink-0 ml-2"
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
