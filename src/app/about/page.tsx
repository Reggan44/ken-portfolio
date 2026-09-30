import Link from "next/link";
import Image from "next/image";
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
    period: "Jan 2026 — Present",
    role: "Electronics and IoT Assistant",
    company: "Drop Access Limited",
    details:
      "Building solar powered, static & mobile solutions for heat sensitive and perishable products. Zayed Sustainability Prize'26 Finalist.",
  },
  {
    period: "May 2025 — Nov 2025",
    role: "Engineering Intern - Enterprise IoT",
    company: "Safaricom PLC",
    details:
      "Hands-on training on Enterprise grade IoT solutions. Smart meters onboarding, backend development, and device engineering (designing PCBs for bespoke solutions).",
  },
  {
    period: "May 2024 — May 2025",
    role: "Engineering Apprentice - Product Development",
    company: "Elcom Networks",
    details:
      "Product Development focusing on Energy Metering Devices and Power Supplies.",
  },
  {
    period: "Jan 2024 — May 2024",
    role: "Engineering Apprentice - Embedded Systems",
    company: "Phinalabs Technologies",
    details:
      "Designed Printed Circuit Boards (PCBs). Developed firmware for custom boards and performed testing on various electronic units.",
  },
  {
    period: "Nov 2022 — Jan 2024",
    role: "Junior Embedded System Engineer",
    company: "Elcom Networks",
    details:
      "Research & Development. Developed firmware for electronic appliances, designed PCBs, performed lab testing, troubleshooting, and casing designs.",
  },
];

const educationList = [
  {
    degree: "Bsc. Electrical and Electronics Engineering",
    school: "Kenyatta University",
    period: "Sept 2019 — Jan 2025",
  },
  {
    degree: "Electrical, Electronics and Communications Engineering",
    school: "Udemy",
    period: "Certification",
  },
];

const certifications = [
  "Embedded-C Programming",
  "Data Science Global Summit 22.2",
  "Electric Vehicle Battery Management System",
  "RF/ Antenna Fundamentals",
  "Free RTOS",
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
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl">
            <Image
              src="/ken-profile.jpg"
              alt="Kennedy Odeyo Otieno"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold">
              <User className="w-3.5 h-3.5" />
              EMBEDDED SYSTEMS &amp; INTERNET OF THINGS (IOT) ENGINEER
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Kennedy Odeyo Otieno
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              I am Results driven, energetic and detailed oriented electrical and electronics engineer with strong background in embedded systems design, prototyping, analysis and troubleshooting electronic circuits. Passionate about contributing to innovative IoT projects. Good at optimizing processes to improve performance, and partnering with diverse teams
            </p>
          </div>
        </div>

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
          <Terminal className="w-4 h-4" />
          <span>02 // EXPERIENCE</span>
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
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-bold">
            <Award className="w-4 h-4" />
            <span>03 // EDUCATION</span>
          </div>
          <div className="space-y-6">
            {educationList.map((item, idx) => (
              <div key={idx} className="card-elevated p-5">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                  {item.period}
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {item.school}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.degree}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-bold">
            <FileCheck className="w-4 h-4" />
            <span>04 // CERTIFICATIONS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, idx) => (
              <span
                key={idx}
                className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-mono"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

