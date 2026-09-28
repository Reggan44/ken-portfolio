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
} from "lucide-react";

const labEquipment = [
  { name: "Oscilloscope", spec: "Rigol MSO5074 4-Channel 350MHz (10 GSa/s)" },
  { name: "Logic Analyzer", spec: "Saleae Logic Pro 16 (100MHz Digital / 50MHz Analog)" },
  { name: "Power Supply", spec: "Korad KD3005P Programmable Precision DC Power (0-30V / 5A)" },
  { name: "Soldering & Rework", spec: "JBC CD-2BQE Station + Quick 861DW Hot Air Rework" },
  { name: "Thermal Imaging", spec: "FLIR E4 Macro Mode Thermal Camera for PCB Hotspot Analysis" },
  { name: "Spectrum Analyzer", spec: "TinySA Ultra 6GHz for Sub-GHz & 2.4GHz RF Harmonic Tuning" },
];

const careerTimeline = [
  {
    period: "2024 — PRESENT",
    role: "Senior Embedded Hardware Systems Architect",
    company: "Autonomous Robotics & Industrial IoT",
    details:
      "Leading 6-layer PCB bring-ups, STM32H7/ESP32-S3 firmware design, sub-100µA battery management circuits, and CAN-FD motor control loop optimization.",
  },
  {
    period: "2022 — 2024",
    role: "IoT Systems Engineer",
    company: "Smart Edge Telemetry Solutions",
    details:
      "Architected LoRaWAN gateways and cell-connected remote sensing nodes. Developed FreeRTOS drivers for low-noise sensor ADCs and onboard flash storage.",
  },
  {
    period: "2020 — 2022",
    role: "Junior Hardware Engineer",
    company: "Precision Power Labs",
    details:
      "Schematic capture, Altium footprint library management, thermal simulation, and prototype soldering for SMPS DC-DC power converters.",
  },
];

export const metadata = {
  title: "About Ken & Hardware Lab Specs | Portfolio",
  description:
    "Career timeline, bench test equipment, CAD/EDA toolchain, and engineering domain expertise of Ken (IoT & Electrical Engineer).",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Bio Header */}
      <div className="space-y-6 border-b border-[#1e293b] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          ELECTRICAL ENGINEER &amp; EMBEDDED SYSTEMS DEVELOPER
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#ededed]">
          About Ken
        </h1>
        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl">
          I am an Electrical and IoT Engineer passionate about turning high-level software requirements into robust hardware reality. My work bridges bare-metal microcontrollers, FreeRTOS kernels, multi-layer high-frequency PCB layouts, and industrial cloud integration.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          <a
            href="mailto:ken@example.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 text-[#ededed] hover:text-[#3b82f6] transition-all"
          >
            <Code2 className="w-4 h-4 text-[#3b82f6]" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      {/* Hardware Bench & Test Equipment */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#3b82f6]">
          <Wrench className="w-4 h-4" />
          <span>01 // HARDWARE BENCH &amp; TEST EQUIPMENT</span>
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

      {/* EDA & Firmware Toolchain */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#3b82f6]">
          <Cpu className="w-4 h-4" />
          <span>02 // EDA &amp; FIRMWARE TOOLCHAIN</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          {[
            { label: "PCB Layout", value: "KiCad 8.0 / Altium Designer" },
            { label: "Firmware C/C++", value: "GCC ARM / CMake / STM32Cube" },
            { label: "RTOS Kernels", value: "FreeRTOS / Zephyr RTOS" },
            { label: "RF Simulation", value: "openEMS / KiCad FEM" },
            { label: "Logic Analysis", value: "Saleae Logic / PulseView" },
            { label: "Version Control", value: "Git / GitHub Actions / CI" },
            { label: "Math & DSP", value: "MATLAB / Python NumPy" },
            { label: "3D Enclosures", value: "Autodesk Fusion 360" },
          ].map((tool, i) => (
            <div
              key={i}
              className="p-3 rounded bg-[#0a0a0a] border border-[#1e293b] space-y-1"
            >
              <div className="text-[#666666] text-[11px]">{tool.label}</div>
              <div className="text-[#ededed] font-semibold">{tool.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-sm text-[#3b82f6]">
          <Award className="w-4 h-4" />
          <span>03 // PROFESSIONAL EXPERIENCE</span>
        </div>
        <div className="space-y-6 border-l-2 border-[#1e293b] pl-6 ml-2">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-4 border-[#050505]" />
              <div className="text-xs font-mono text-[#3b82f6]">
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-[#ededed]">
                {item.role} <span className="text-[#a1a1aa] font-normal">@ {item.company}</span>
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
