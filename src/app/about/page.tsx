import Link from "next/link";
import {
  User,
  Cpu,
  Layers,
  Wrench,
  Award,
  Terminal,
  FileCheck,
  CheckCircle2,
  Mail,
  Code2,
  Globe,
  Phone,
} from "lucide-react";

const labEquipment = [
  { name: "Microcontrollers & SoCs", spec: "ESP32 (Wi-Fi/BLE), STM32 (Cortex-M), ATmega328P, Raspberry Pi 4" },
  { name: "Cellular & Telemetry", spec: "SIM800C GSM/GPRS, GPS modules, Sub-GHz RF, LoRaWAN concentrators" },
  { name: "Sensors & Energy", spec: "AHT30 Temp/Humidity, HX711 Load Cell, ZMPT101B Voltage, SCT-013 CT Current" },
  { name: "Power & Battery Management", spec: "Li-Ion BMS charging, MPPT Solar Controllers, Auto-Voltage Selector ICs" },
  { name: "Protocols & Storage", spec: "UART, SPI (Flash/SD), I2C (OLED/RTC/Sensors), OneWire, Wi-Fi Access Point" },
  { name: "Cloud Integration", spec: "Azure Cloud Gateway, GPRS TCP/IP, Things Cloud IoT Platform" },
];

const careerTimeline = [
  {
    period: "2024 — PRESENT",
    role: "Embedded Systems & IoT Engineer",
    company: "Hardware & Telemetry Solutions",
    details:
      "Designing battery-powered load tracking systems (Cargo-Care), multi-phase industrial power meters (Oppie-Box), cold chain telemetry tags with door sensors, and STM32 Battery Management Systems (BMS).",
  },
  {
    period: "GLOBAL FINALIST",
    role: "1st Place Winner (Kenya & East Africa Region)",
    company: "YESIST12 Global Finals (Malaysia)",
    details:
      "Awarded 1st place in Kenya and East Africa for Safe Safari IoT telemetry system using Things Cloud platform, advancing to the global finals in Malaysia.",
  },
];

export const metadata = {
  title: "About Kennedy Odeyo Otieno & Hardware Engineering",
  description:
    "Bio, contact details (kenodeyo@gmail.com, +254-793036309), hardware skills, and project history of Kennedy Odeyo Otieno.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Bio Header */}
      <div className="space-y-6 border-b border-[#1e293b] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          EMBEDDED SYSTEMS &amp; INTERNET OF THINGS (IOT) ENGINEER
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#ededed]">
          Kennedy Odeyo Otieno
        </h1>
        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl">
          I am an Embedded Systems and IoT Engineer specializing in real-world hardware bring-ups. My work spans real-time load manager tracking (Cargo-Care), industrial power metering and edge computing (Oppie-Box), cold-chain environmental sensing with BMS, and competitive IoT solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 text-[#ededed] hover:text-[#3b82f6] transition-all"
          >
            <Phone className="w-4 h-4 text-[#3b82f6]" />
            <span>+254-793036309</span>
          </a>
        </div>
      </div>

      {/* Hardware Systems & Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#3b82f6]">
          <Wrench className="w-4 h-4" />
          <span>01 // HARDWARE SYSTEMS &amp; EXPERTISE</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {labEquipment.map((equip, idx) => (
            <div
              key={idx}
              className="card-elevated p-5 space-y-1.5 hover:border-[#3b82f6]/40"
            >
              <div className="text-xs font-mono text-[#3b82f6] font-semibold">
                {equip.name}
              </div>
              <div className="text-xs text-[#a1a1aa] font-mono leading-relaxed">
                {equip.spec}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accomplishments & Project History */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#3b82f6]">
          <Award className="w-4 h-4" />
          <span>02 // KEY HIGHLIGHTS &amp; COMPETITIONS</span>
        </div>
        <div className="space-y-6 border-l-2 border-[#1e293b] pl-6 ml-2">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-4 border-[#050505]" />
              <div className="text-xs font-mono text-[#3b82f6]">
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-[#ededed]">
                {item.role} <span className="text-[#a1a1aa] font-normal">({item.company})</span>
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-2xl">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
