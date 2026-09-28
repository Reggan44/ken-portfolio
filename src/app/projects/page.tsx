import Link from "next/link";
import { Cpu, ArrowRight, Code2, ExternalLink, Filter } from "lucide-react";

// Real Projects Data extracted from Kennedy Odeyo Otieno's PDF Portfolio
const pdfProjects = [
  {
    _id: "cargo-care",
    title: "Cargo-Care: Load Manager & Tamper Tracking System",
    slug: "cargo-care-tracking-solution",
    tags: ["ESP32", "FreeRTOS", "SIM800C", "IoT", "GPS/GSM", "SPI/I2C/UART"],
    summary:
      "Battery-powered load tracking and manager solution. Monitors real-time weight changes from loading to dispatch with automated tamper SMS alerts, onboard OLED configuration UI, and dual Wi-Fi Access Point mode.",
    specs: [
      { key: "Microcontroller", value: "ESP32 (Configured as Wi-Fi Access Point & Station)" },
      { key: "Cellular & Location", value: "SIM800C GSM/GPRS Module with GPS Location Tracking" },
      { key: "Telemetry Data", value: "Time, GPS Location, Load Weight, Battery Voltage, Tamper Alerts" },
      { key: "Protocols & Storage", value: "UART (GPS/GSM), SPI (SD Card Storage), I2C (OLED UI), Wi-Fi" },
      { key: "Operating System", value: "FreeRTOS Preemptive Kernel for Multitasking & Real-Time Response" },
    ],
    githubRepo: "https://github.com",
    publishedAt: "2026-09-01",
  },
  {
    _id: "oppie-box",
    title: "Oppie-Box: Industrial Multi-Phase Power Metering & Edge Gateway",
    slug: "oppie-box-power-metering-gateway",
    tags: ["Atmega328P", "Raspberry Pi", "Azure Cloud", "Energy Metering", "OneWire/SPI"],
    summary:
      "AC/DC power metering and edge computing platform for renewable energy integration. Features dual onboard Atmega328P MCUs, Raspberry Pi cloud bridge, phase LED indicators, and external HMI.",
    specs: [
      { key: "Embedded MCUs", value: "2x Atmega328P Microcontrollers (AC/DC Sensing)" },
      { key: "Edge Computing", value: "Raspberry Pi Integration for Local DSP & Azure Cloud Telemetry" },
      { key: "Telemetry", value: "Voltage, Current, Power Per Phase, Power Factor, Fault Detection" },
      { key: "Protocols", value: "OneWire (Sensors), SPI (LCD & Flash Memory), UART (Pi), I2C (RTC)" },
      { key: "Power Sources", value: "240VAC Mains + Renewable DC Input Ports" },
    ],
    githubRepo: "https://github.com",
    publishedAt: "2026-08-15",
  },
  {
    _id: "temp-tag",
    title: "Temperature Tag: Cold Chain Monitoring & BMS Solution",
    slug: "temperature-tag-cold-chain-bms",
    tags: ["ESP32", "Cold Chain", "BMS", "I2C/SPI/UART", "GPRS"],
    summary:
      "Cold chain temperature & humidity logging node with onboard battery management (BMS), magnetic door status sensor, automatic voltage source selection, and RGB status LEDs.",
    specs: [
      { key: "Core Microcontroller", value: "ESP32 NodeMCU" },
      { key: "Sensors & RTC", value: "AHT30 Precision Temp/Humidity Sensor & I2C Real-Time Clock" },
      { key: "Cloud Connection", value: "TCP/IP Over SIM800C Gateway (GPRS Mode)" },
      { key: "Telemetry & Features", value: "Temp, Humidity, Signal RSSI, Battery Voltage, Door Cycle Count" },
      { key: "Power System", value: "Li-Ion BMS Charger + Auto Voltage Selector IC" },
    ],
    githubRepo: "https://github.com",
    publishedAt: "2026-07-20",
  },
  {
    _id: "safe-safari",
    title: "Safe Safari: Global YESIST12 Finalist Telemetry System",
    slug: "safe-safari-global-finalist-telemetry",
    tags: ["ThingsCloud", "IoT", "STM32", "Award Winner"],
    summary:
      "International competition-winning safety and machine control system. Awarded 1st place in Kenya & East Africa, representing the region at the Global YESIST12 Finals in Malaysia.",
    specs: [
      { key: "Platform", value: "Things Cloud IoT Platform Integration" },
      { key: "Recognition", value: "1st Place Kenya/East Africa — Global YESIST12 Finals (Malaysia)" },
      { key: "Enclosure Rating", value: "IP65 Weatherproof Industrial Housing" },
    ],
    githubRepo: "https://github.com",
    publishedAt: "2026-06-10",
  },
];

export const metadata = {
  title: "Projects & Hardware Builds | Kennedy Odeyo Otieno Portfolio",
  description:
    "Engineering portfolio of Kennedy Odeyo Otieno — Cargo-Care tracking, Oppie-Box power metering, Cold Chain Temp Tag, and BMS hardware.",
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
          Comprehensive documentation of real-world engineered builds by Kennedy Odeyo Otieno — featuring custom PCBs, RTOS firmware, cellular IoT, and power metering.
        </p>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#a1a1aa]">
        <div className="flex items-center gap-1.5 mr-2 text-[#ededed]">
          <Filter className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>Filter:</span>
        </div>
        {["ALL", "ESP32", "FreeRTOS", "Energy Metering", "Cold Chain", "GSM/GPS", "BMS"].map(
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
        {pdfProjects.map((project) => (
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
                    <span>Source Repository</span>
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
                <span>Read Full Technical Specs &amp; System Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
