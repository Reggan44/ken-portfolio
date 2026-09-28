import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Cpu,
  Code2,
  ExternalLink,
  Layers,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Mock Project Database for detail rendering
const projectData: Record<string, any> = {
  "stm32-foc-controller": {
    title: "Dual-Core STM32H7 Motor FOC Vector Controller",
    tags: ["MCU", "RTOS", "PCB", "Power Electronics"],
    publishedAt: "2026-08-15",
    summary:
      "6-layer high-current PCB designed for brushless DC motor Field Oriented Control (FOC) operating at 48V/50A with dual-core lockstep protection.",
    specs: [
      { key: "Microcontroller", value: "STM32H747XI (Cortex-M7 @ 480MHz + Cortex-M4 @ 240MHz)" },
      { key: "Supply Voltage", value: "24V – 60V DC (72V Transient Peak protection)" },
      { key: "Phase Current", value: "50A RMS Continuous (100A Peak 5-sec rating)" },
      { key: "Switching Frequency", value: "20 kHz PWM with synchronized ADC phase current sampling" },
      { key: "Inverter Topology", value: "3-Phase Half-Bridge with Optically Isolated Gate Drivers" },
      { key: "Firmware Kernel", value: "FreeRTOS with hard real-time motor control task @ 20kHz" },
      { key: "Communication", value: "Isolated CAN-FD (5 Mbps) & RS-485 Modbus" },
    ],
    bom: [
      { component: "STM32H747XIH6", description: "Dual-core ARM Cortex-M7/M4 MCU, TFBGA240", qty: 1, reference: "U1" },
      { component: "DRV8353RS", description: "3-Phase Smart Gate Driver with SPI interface", qty: 1, reference: "U2" },
      { component: "IAUC120N04S6N013", description: "40V 120A MOSFET 1.3 mΩ, OptiMOS-6", qty: 6, reference: "Q1-Q6" },
      { component: "INA240A2PWR", description: "High-Port PWM-Rejection Current Sense Amp", qty: 3, reference: "U3-U5" },
      { component: "SN65HVD230", description: "3.3V CAN Bus Transceiver with ESD Protection", qty: 1, reference: "U6" },
    ],
    githubRepo: "https://github.com",
    schematicUrl: "https://github.com",
    cadUrl: "https://github.com",
  },
  "lorawan-industrial-gateway": {
    title: "Industrial LoRaWAN Gateway & Sub-GHz Node",
    tags: ["IoT", "PCB", "Sub-GHz RF", "Solar Energy"],
    publishedAt: "2026-07-22",
    summary:
      "Ultra-low power remote environmental monitoring system with SX1302 concentrator, satellite failover backup, and solar energy harvesting.",
    specs: [
      { key: "RF Concentrator", value: "Semtech SX1302 / SX1250 Sub-GHz Concentrator" },
      { key: "Bands", value: "868 MHz (EU) / 915 MHz (US) ISM Bands" },
      { key: "Power Management", value: "MPPT Solar Controller (BQ25713) + LiFePO4 Battery" },
      { key: "Standby Power", value: "< 12 µA System Deep-Sleep" },
    ],
    bom: [
      { component: "SX1302IMLTRT", description: "Digital Baseband Chip for LoRa Gateway", qty: 1, reference: "U1" },
      { component: "ESP32-S3-WROOM-1", description: "Wi-Fi + BLE 5.0 MCU Module with 8MB PSRAM", qty: 1, reference: "U2" },
      { component: "BQ25713RSNR", description: "Buck-Boost NVDC Solar Charge Controller", qty: 1, reference: "U3" },
    ],
    githubRepo: "https://github.com",
    cadUrl: "https://github.com",
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] hover:text-[#3b82f6] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects Archive</span>
      </Link>

      {/* Title & Metadata Header */}
      <div className="space-y-6 border-b border-[#1e293b] pb-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#ededed] leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Links / Action Bar */}
        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.schematicUrl && (
            <a
              href={project.schematicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 text-[#ededed] hover:text-[#3b82f6] transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#3b82f6]" />
              <span>Schematic (PDF)</span>
            </a>
          )}
          {project.cadUrl && (
            <a
              href={project.cadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#0a0a0a] border border-[#1e293b] hover:border-[#3b82f6]/50 text-[#ededed] hover:text-[#3b82f6] transition-all"
            >
              <Layers className="w-4 h-4 text-[#3b82f6]" />
              <span>KiCad / STEP Files</span>
            </a>
          )}
        </div>
      </div>

      {/* Technical Specifications Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-mono text-[#3b82f6]">
          <Cpu className="w-4 h-4" />
          <span>01 // HARDWARE SPECIFICATIONS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
          {project.specs.map((spec: any, i: number) => (
            <div
              key={i}
              className="p-3 rounded bg-[#0a0a0a] border border-[#1e293b] flex justify-between gap-3"
            >
              <span className="text-[#666666]">{spec.key}:</span>
              <span className="text-[#ededed] font-medium text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bill of Materials (BOM) Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-mono text-[#3b82f6]">
          <FileText className="w-4 h-4" />
          <span>02 // BILL OF MATERIALS (CRITICAL PARTS)</span>
        </div>
        <div className="overflow-x-auto rounded border border-[#1e293b] bg-[#0a0a0a]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="border-b border-[#1e293b] bg-[#121212] text-[#3b82f6]">
              <tr>
                <th className="p-3">Ref</th>
                <th className="p-3">Component</th>
                <th className="p-3">Description</th>
                <th className="p-3 text-right">Qty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]/50 text-[#a1a1aa]">
              {project.bom.map((row: any, i: number) => (
                <tr key={i} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="p-3 text-[#3b82f6]">{row.reference}</td>
                  <td className="p-3 font-semibold text-[#ededed]">{row.component}</td>
                  <td className="p-3">{row.description}</td>
                  <td className="p-3 text-right text-[#ededed]">{row.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Design Narrative / MDX Content Block Placeholder */}
      <section className="space-y-4 border-t border-[#1e293b] pt-8">
        <div className="flex items-center gap-2 text-sm font-mono text-[#3b82f6]">
          <CheckCircle2 className="w-4 h-4" />
          <span>03 // BRING-UP &amp; VALIDATION NOTES</span>
        </div>
        <div className="card-elevated p-6 space-y-4 text-sm text-[#a1a1aa] leading-relaxed font-sans">
          <p>
            The main challenge during initial board bring-up was controlling ground bounce during 50A phase switching transitions. By implementing dedicated Kelvin sense traces directly to the shunt resistors and separating signal ground from power ground planes via a single point star connection under the INA240 current sense ICs, SNR improved by 14 dB.
          </p>
          <div className="p-4 rounded bg-[#0a0a0a] border border-[#3b82f6]/30 font-mono text-xs text-[#ededed] space-y-2">
            <div className="text-[#3b82f6] font-semibold">// PWM Interrupt Handler Logic</div>
            <code>
              {`void TIM1_UP_IRQHandler(void) {
    if (TIM1->SR & TIM_SR_UIF) {
        ADC1_Trigger_Phase_Current_Sample();
        FOC_Calculate_Park_Transforms();
        TIM1->SR = ~TIM_SR_UIF;
    }
}`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
