import Link from "next/link";
import { Cpu, ArrowRight, Code2, ExternalLink, Filter } from "lucide-react";

// Mock/Fallback Projects Data (used when Sanity dataset is unpopulated)
const sampleProjects = [
  {
    _id: "p1",
    title: "Dual-Core STM32H7 Motor FOC Vector Controller",
    slug: "stm32-foc-controller",
    tags: ["MCU", "RTOS", "PCB", "Power Electronics"],
    summary:
      "6-layer high-current PCB designed for brushless DC motor Field Oriented Control (FOC) operating at 48V/50A with dual-core lockstep protection.",
    specs: [
      { key: "MCU Architecture", value: "STM32H747XI (Cortex-M7 @ 480MHz + Cortex-M4 @ 240MHz)" },
      { key: "Operating Voltage", value: "24V – 60V DC Nominal (72V Transient Peak)" },
      { key: "Continuous Current", value: "50A RMS per phase (Active Thermal Management)" },
      { key: "Firmware Kernel", value: "FreeRTOS Preemptive with Hard-Real-Time Interrupt Priority" },
    ],
    githubRepo: "https://github.com",
    schematicUrl: "https://github.com",
    publishedAt: "2026-08-15",
  },
  {
    _id: "p2",
    title: "Industrial LoRaWAN Gateway & Sub-GHz Node",
    slug: "lorawan-industrial-gateway",
    tags: ["IoT", "PCB", "Sub-GHz RF", "Solar Energy"],
    summary:
      "Ultra-low power remote environmental monitoring system with SX1302 concentrator, satellite failover backup, and solar energy harvesting.",
    specs: [
      { key: "RF Transceiver", value: "Semtech SX1302 / SX1250 Sub-GHz Concentrator" },
      { key: "Frequency Bands", value: "868 MHz / 915 MHz ISM Band" },
      { key: "Power Source", value: "Integrated MPPT Solar Charger + LiFePO4 Cell" },
      { key: "Deep Sleep Power", value: "< 12 µA System Standby Current" },
    ],
    githubRepo: "https://github.com",
    cadUrl: "https://github.com",
    publishedAt: "2026-07-22",
  },
  {
    _id: "p3",
    title: "Precision Analog Bio-Impedance Measurement Front-End",
    slug: "precision-bio-impedance-frontend",
    tags: ["PCB", "Analog", "MCU", "DSP"],
    summary:
      "Four-wire kelvin bio-impedance measurement circuit featuring low-noise instrumentation amplifiers and hardware IQ demodulation.",
    specs: [
      { key: "Signal Frequency", value: "1 kHz – 500 kHz Programmable Sine Generator" },
      { key: "ADC Resolution", value: "24-bit Delta-Sigma ADC (128 kSPS)" },
      { key: "Dynamic Range", value: "115 dB Signal-to-Noise Ratio (SNR)" },
    ],
    githubRepo: "https://github.com",
    publishedAt: "2026-06-10",
  },
];

export const metadata = {
  title: "Projects & Hardware Bring-Ups | Ken Portfolio",
  description:
    "Engineering portfolio of MCU firmware, multi-layer PCB design, RTOS kernels, and wireless IoT nodes.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-[#1e293b] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          HARDWARE &amp; EMBEDDED SYSTEMS ARCHIVE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#ededed]">
          Projects &amp; Board Bring-Ups
        </h1>
        <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
          Comprehensive documentation of engineered hardware — schematic designs, PCB layouts, firmware algorithms, and validation specs.
        </p>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#a1a1aa]">
        <div className="flex items-center gap-1.5 mr-2 text-[#ededed]">
          <Filter className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>Filter:</span>
        </div>
        {["ALL", "MCU", "RTOS", "PCB", "IoT", "Analog", "Power Electronics"].map(
          (tag, i) => (
            <button
              key={tag}
              className={`px-3 py-1.5 rounded-full border transition-colors ${
                i === 0
                  ? "bg-[#3b82f6]/20 border-[#3b82f6]/40 text-[#3b82f6]"
                  : "bg-[#0a0a0a] border-[#1e293b] hover:border-[#3b82f6]/40 hover:text-[#ededed]"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-8">
        {sampleProjects.map((project) => (
          <article
            key={project._id}
            className="card-elevated p-8 space-y-6 group hover:border-[#3b82f6]/40"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1e293b]/60 pb-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-[#ededed] group-hover:text-[#3b82f6] transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
                {project.schematicUrl && (
                  <a
                    href={project.schematicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Schematic</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              {project.summary}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded bg-[#0a0a0a] border border-[#1e293b]/40 flex justify-between gap-2"
                >
                  <span className="text-[#666666]">{spec.key}:</span>
                  <span className="text-[#ededed] font-medium text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#3b82f6] hover:underline"
              >
                <span>Read Full Technical Documentation &amp; BOM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
