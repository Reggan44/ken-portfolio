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
      <div className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold">
          <User className="w-3.5 h-3.5" />
          EMBEDDED SYSTEMS &amp; INTERNET OF THINGS (IOT) ENGINEER
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Kennedy Odeyo Otieno
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          I am an Embedded Systems and IoT Engineer specializing in real-world hardware bring-ups. My work spans real-time load manager tracking (Cargo-Care), industrial power metering and edge computing (Oppie-Box), cold-chain environmental sensing with BMS, and competitive IoT solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>+254-793036309</span>
          </a>
        </div>
      </div>

      {/* Hardware Systems & Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-bold">
          <Wrench className="w-4 h-4" />
          <span>01 // HARDWARE SYSTEMS &amp; EXPERTISE</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {labEquipment.map((equip, idx) => (
            <div
              key={idx}
              className="card-elevated p-5 space-y-1.5 hover:border-indigo-600 dark:hover:border-indigo-500"
            >
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                {equip.name}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
                {equip.spec}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accomplishments & Project History */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-bold">
          <Award className="w-4 h-4" />
          <span>02 // KEY HIGHLIGHTS &amp; COMPETITIONS</span>
        </div>
        <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 ml-2">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-zinc-950" />
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {item.role} <span className="text-zinc-500 dark:text-zinc-400 font-normal">({item.company})</span>
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

