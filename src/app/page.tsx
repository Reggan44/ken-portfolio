import Link from "next/link";
import {
  Cpu,
  Zap,
  ArrowRight,
  Terminal,
  Radio,
} from "lucide-react";

const featuredHighlights = [
  {
    title: "High-Frequency STM32 Motor Controller",
    category: "PCB & FIRMWARE",
    specs: "FOC Vector Control • 48V / 50A • FreeRTOS",
    description:
      "Custom 6-layer high-current PCB designed for brushless DC motor FOC control with dual-core lockstep STM32H7.",
    link: "/projects/stm32-foc-controller",
    tag: "MCU / RTOS",
  },
  {
    title: "Industrial LoRaWAN Gateway Node",
    category: "IOT / RF DESIGN",
    specs: "SX1302 Concentrator • Sub-GHz RF • Solar Powered",
    description:
      "Ultra-low power remote environmental monitoring system with satellite backup & sub-GHz long range telemetry.",
    link: "/projects/lorawan-industrial-gateway",
    tag: "IoT / PCB",
  },
];

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          AVAILABLE FOR HARDWARE CONSULTING &amp; FULL-TIME ROLES
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ededed] leading-[1.1]">
            Architecting <span className="text-gradient">Hardware &amp; Embedded</span> Systems from Silicon to Cloud.
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed">
            I am Ken — an Electrical &amp; IoT Systems Engineer. I specialize in custom multi-layer PCB layout, bare-metal C/C++, FreeRTOS firmware, and low-latency wireless communication.
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
            <span>Lab Specs &amp; Tech Stack</span>
          </Link>
        </div>
      </section>

      {/* Domain Expertise Metrics / Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">Embedded Systems</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            Bare-metal C/C++, STM32, ESP32, FreeRTOS multi-threading, custom bootloaders, and low-level peripheral drivers (SPI, I2C, CAN-FD, UART).
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">High-Speed PCB Design</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            Multi-layer schematic capture &amp; PCB layout in KiCad/Altium, impedance matching, power integrity, and thermal management for dense boards.
          </p>
        </div>

        <div className="card-elevated p-6 space-y-3">
          <div className="p-3 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] w-fit">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#ededed]">IoT &amp; Wireless RF</h3>
          <p className="text-xs text-[#a1a1aa] leading-relaxed">
            LoRaWAN, BLE mesh, Sub-GHz communication protocols, MQTT/TLS data pipelines, and ultra-low-power battery energy harvesting node architecture.
          </p>
        </div>
      </section>

      {/* Featured Hardware Projects Preview */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-[#1e293b] pb-4">
          <div>
            <span className="mono-accent">01 // FEATURED HARDWARE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#ededed] mt-1">Recent Bring-Ups &amp; Build Logs</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#3b82f6] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredHighlights.map((project, idx) => (
            <div key={idx} className="card-elevated p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#3b82f6]">
                  <span>{project.category}</span>
                  <span className="px-2 py-0.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#ededed]">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e293b]/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#666666]">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#ededed] hover:text-[#3b82f6] transition-colors"
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
