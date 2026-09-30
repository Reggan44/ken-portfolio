import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Cpu,
  Code2,
  ExternalLink,
  Layers,
  FileText,
  CheckCircle2,
  Radio,
  Battery,
  ShieldAlert,
} from "lucide-react";
import { client, PROJECT_BY_SLUG_QUERY, urlFor } from "@/lib/sanity/client";

export const revalidate = 0;

// Real PDF Project Detail Database with Actual Image Galleries & GitHub Repos
const pdfProjectDetailData: Record<string, any> = {
  "cargo-care-tracking-solution": {
    title: "Cargo-Care: Load Manager & Tamper Tracking Solution",
    tags: ["ESP32", "FreeRTOS", "SIM800C", "IoT", "GPS/GSM", "SPI/I2C/UART"],
    publishedAt: "2026-09-01",
    summary:
      "This battery-powered device tracks the weight and GPS location of cargo carrying goods from loading to dispatch. In case the load is tampered with at any point, automated SMS alerts are dispatched to the owner's phone number. Features onboard OLED screen navigation buttons and dual Wi-Fi Access Point mode.",
    images: [
      { src: "/projects/cargo_p1_img1.jpeg", caption: "Cargo-Care PCB Hardware & OLED Interface" },
      { src: "/projects/cargo_p1_img2.jpeg", caption: "Battery-Powered Enclosure & Antenna Test" },
      { src: "/projects/cargo_p1_img3.jpeg", caption: "ESP32 Wi-Fi Access Point Connection Mode" },
      { src: "/projects/cargo_p1_img4.jpeg", caption: "CargoCare Web Configuration Interface" },
    ],
    specs: [
      { key: "Control Unit", value: "ESP32 (Configured as Wi-Fi Access Point for setup & configuration)" },
      { key: "Cellular & Location", value: "SIM800C GSM/GPRS Module with UART GPS Location Tracking" },
      { key: "Telemetry", value: "Real-time load weight, GPS coordinates, timestamp, tamper alerts" },
      { key: "Operating System", value: "FreeRTOS Preemptive Kernel for real-time multitasking" },
      { key: "Communication Protocols", value: "Wi-Fi (AP Config), UART (GPS/SIM800C), SPI (SD Storage), I2C (Display)" },
    ],
    bom: [
      { component: "ESP32-WROOM-32D", description: "Dual-core 32-bit LX6 Microcontroller with Wi-Fi & BLE", qty: 1, reference: "U1" },
      { component: "SIM800C", description: "Quad-band GSM/GPRS Module for SMS & Cellular Telemetry", qty: 1, reference: "U2" },
      { component: "HX711", description: "24-Bit Analog-to-Digital Converter for Load Cells", qty: 1, reference: "U3" },
      { component: "SSD1306 OLED", description: "128x64 I2C Graphic Display Module", qty: 1, reference: "DISP1" },
      { component: "MicroSD Socket", description: "SPI Interface SD Card Slot for Offline Data Logging", qty: 1, reference: "J1" },
    ],
    githubRepo: "https://github.com/Kendeyo",
  },
  "esp32-wireless-blackbox-psv": {
    title: "ESP32 Wireless Blackbox for PSV Fleet Telemetry",
    tags: ["ESP32", "GPRS", "PSV / Matatu", "GPS", "OBD-II", "C++"],
    publishedAt: "2026-08-25",
    summary:
      "A wireless blackbox telemetry & vehicle monitoring unit engineered specifically for public service vehicle (Matatu) transit operators. Features real-time speed tracking, geo-fencing alerts, crash detection, and remote cloud logging over cellular GPRS.",
    images: [
      { src: "/projects/cargo_p4_img2.jpeg", caption: "Pay-As-You-Go Machine Controller Unit with ESP-32S" },
      { src: "/projects/cargo_p4_img4.jpeg", caption: "Enclosed Weatherproof Telemetry Node Housing" },
      { src: "/projects/cargo_p4_img5.jpeg", caption: "Param Viewer HMI Interface & Telemetry" },
    ],
    specs: [
      { key: "Target Vehicle", value: "PSV (Public Service Vehicles / Matatu Transit)" },
      { key: "Core Processor", value: "ESP32-S3 Dual-Core 240MHz Microcontroller" },
      { key: "Wireless Gateway", value: "SIM800L / SIM7600 4G & GPRS Cellular Modem" },
      { key: "Sensor Integration", value: "GPS Location, 6-Axis Accelerometer (Crash Sensing), OBD-II Engine Bus" },
      { key: "Repository Link", value: "github.com/Kendeyo/ESP32basedBlackbox" },
    ],
    bom: [
      { component: "ESP32-S3-WROOM-1", description: "Dual-core 32-bit LX7 MCU with Vector Instructions", qty: 1, reference: "U1" },
      { component: "SIM7600E-H", description: "LTE Cat-4 / 3G / 2G / GNSS Module", qty: 1, reference: "U2" },
      { component: "MPU6050", description: "6-axis Motion Tracking Accelerometer & Gyroscope", qty: 1, reference: "U3" },
      { component: "MCP2515", description: "CAN Bus Controller with SPI Interface for OBD-II", qty: 1, reference: "U4" },
    ],
    githubRepo: "https://github.com/Kendeyo/ESP32basedBlackbox",
  },
  "oppie-box-power-metering-gateway": {
    title: "Oppie-Box: Industrial Power Measurement & Edge Gateway",
    tags: ["Atmega328P", "Raspberry Pi", "Azure Cloud", "Energy Metering", "OneWire/SPI"],
    publishedAt: "2026-08-15",
    summary:
      "Industrial AC and renewable DC power metering platform with Raspberry Pi edge processing integration. Transmits real-time multi-phase energy metrics, power factor, and fault diagnosis to Microsoft Azure Cloud.",
    images: [
      { src: "/projects/cargo_p2_img1.jpeg", caption: "Oppie-Box 3D PCB Layout Rendering" },
      { src: "/projects/cargo_p2_img2.jpeg", caption: "CAD Gerber Trace Routing & Power Planes" },
      { src: "/projects/cargo_p2_img3.jpeg", caption: "Internal Circuit Board & Phase Metering Component" },
      { src: "/projects/cargo_p2_img4.jpeg", caption: "Field Enclosure Installation & High-Voltage Terminals" },
    ],
    specs: [
      { key: "MCU Computing", value: "Dual Onboard Atmega328P Microcontrollers" },
      { key: "Edge Gateway", value: "Raspberry Pi Interface for Edge Analytics & Azure Cloud Sync" },
      { key: "Telemetry", value: "Voltage, current, power per phase, power factor, and phase fault detection" },
      { key: "Protocols", value: "OneWire (Sensory inputs), SPI (LCD & Flash), UART (Raspberry Pi), I2C (RTC)" },
      { key: "Human Interface", value: "External HMI + Internal Diagnostic LEDs & Phase Indicators" },
    ],
    bom: [
      { component: "ATmega328P-AU", description: "8-bit AVR MCU 32KB Flash 32-TQFP", qty: 2, reference: "U1, U2" },
      { component: "Raspberry Pi 4B", description: "Quad-core Cortex-A72 Edge Gateway & Azure Bridge", qty: 1, reference: "BOARD1" },
      { component: "ZMPT101B", description: "High-precision Voltage Transformer Sensor", qty: 3, reference: "T1-T3" },
      { component: "SCT-013-000", description: "Non-invasive AC Current Transformer Sensor 100A", qty: 3, reference: "CT1-CT3" },
      { component: "DS3231", description: "High-Accuracy I2C Real-Time Clock with TCXO", qty: 1, reference: "U3" },
    ],
    githubRepo: "https://github.com/Kendeyo",
  },
  "dt78-esp32-watch-firmware": {
    title: "DT78 Open-Source ESP32 Smartwatch Firmware",
    tags: ["ESP32", "Smartwatch", "C++", "Display Drivers", "Low Power"],
    publishedAt: "2026-08-01",
    summary:
      "Custom open-source firmware written in C++ for the DT78 smartwatch platform powered by ESP32. Features low-power deep sleep task scheduling, custom graphics UI pipeline, step counting, and BLE connectivity.",
    images: [
      { src: "/projects/cargo_p3_img1.jpeg", caption: "Unpopulated Custom Wearable PCB Top Layer" },
      { src: "/projects/cargo_p3_img2.jpeg", caption: "Assembled Temp Tag Circuit with Antenna & USB-C" },
      { src: "/projects/cargo_p3_img3.jpeg", caption: "Assembled Temp Tag Bottom Layer & BMS Charger" },
    ],
    specs: [
      { key: "Hardware Platform", value: "DT78 Wearable Smartwatch" },
      { key: "Microcontroller", value: "ESP32 Wi-Fi & Bluetooth SoC" },
      { key: "GUI & Display", value: "LVGL / Custom SPI TFT LCD Display Driver" },
      { key: "Power Management", value: "Ultra-Low Power (ULP) Coprocessor Sleep Routine" },
      { key: "Repository Link", value: "github.com/Kendeyo/dt78-esp32-firmware" },
    ],
    bom: [
      { component: "ESP32-PICO-D4", description: "System in Package (SiP) with Flash, Crystal & Antenna", qty: 1, reference: "U1" },
      { component: "ST7789V", description: "240x240 IPS Color Display Driver IC", qty: 1, reference: "DISP1" },
      { component: "BMA421", description: "Ultra-small 3-axis Acceleration Sensor for Pedometer", qty: 1, reference: "U2" },
    ],
    githubRepo: "https://github.com/Kendeyo/dt78-esp32-firmware",
  },
  "temperature-tag-cold-chain-bms": {
    title: "Temperature Tag: Cold Chain Monitoring & BMS Solution",
    tags: ["ESP32", "Cold Chain", "BMS", "I2C/SPI/UART", "GPRS"],
    publishedAt: "2026-07-20",
    summary:
      "Battery-powered cold chain logger measuring ambient temperature and humidity. Integrates door contact switch counting, onboard BMS battery charging, automatic voltage source selection, and multi-color RGB diagnostic LEDs.",
    images: [
      { src: "/projects/cargo_p3_img1.jpeg", caption: "Unpopulated Custom PCB Top Layer" },
      { src: "/projects/cargo_p3_img2.jpeg", caption: "Assembled Temp Tag Circuit with Antenna & USB-C" },
      { src: "/projects/cargo_p3_img3.jpeg", caption: "Assembled Temp Tag Bottom Layer & BMS Charger" },
      { src: "/projects/cargo_p3_img4.jpeg", caption: "TempTag Live Web Dashboard Interface" },
    ],
    specs: [
      { key: "Main Processor", value: "ESP32 NodeMCU Development Module" },
      { key: "Environmental Sensor", value: "AHT30 Precision I2C Temperature & Humidity Sensor" },
      { key: "Cellular Gateway", value: "SIM800C in GPRS Mode transmitting TCP/IP data packets" },
      { key: "BMS & Power", value: "Integrated Battery Management System & Auto Voltage Selector IC" },
      { key: "Protocols", value: "I2C (AHT30 & RTC), UART (SIM800C), SPI (Flash Memory Logging)" },
    ],
    bom: [
      { component: "ESP32 NodeMCU", description: "System Processing Unit & Wireless Transceiver", qty: 1, reference: "U1" },
      { component: "AHT30", description: "I2C Temperature (±0.3°C) & Humidity (±2% RH) Sensor", qty: 1, reference: "U2" },
      { component: "TP4056 + Protection", description: "1A Li-Ion Battery Charger with BMS Protection", qty: 1, reference: "U3" },
      { component: "SIM800C Module", description: "Cellular Modem for GPRS TCP/IP Server Transmission", qty: 1, reference: "U4" },
    ],
    githubRepo: "https://github.com/Kendeyo",
  },
  "safe-safari-global-finalist-telemetry": {
    title: "Safe Safari: Global YESIST12 Finalist Telemetry System",
    tags: ["ThingsCloud", "IoT", "STM32", "Award Winner"],
    publishedAt: "2026-06-10",
    summary:
      "Award-winning student engineering design competition project. Secured 1st place in Kenya and the East Africa region before advancing as a Global Finalist at the YESIST12 Finals in Malaysia using Things Cloud platform telemetry.",
    images: [
      { src: "/projects/cargo_p4_img1.jpeg", caption: "BMS System Board & Soldering Station Assembly" },
      { src: "/projects/cargo_p4_img2.jpeg", caption: "Pay-As-You-Go Machine Controller Unit with ESP-32S" },
      { src: "/projects/cargo_p4_img3.jpeg", caption: "Air Quality Device PCB Routing Diagram" },
      { src: "/projects/cargo_p4_img4.jpeg", caption: "Safe Safari Enclosed Weatherproof Telemetry Node" },
      { src: "/projects/cargo_p4_img5.jpeg", caption: "Param Viewer HMI Interface" },
    ],
    specs: [
      { key: "Cloud Architecture", value: "Things Cloud IoT Telemetry Platform" },
      { key: "Awards", value: "1st Place Kenya & East Africa Region / Global YESIST12 Finalist (Malaysia)" },
      { key: "Enclosure", value: "IP65 Weatherproof Industrial ABS Enclosure" },
    ],
    bom: [
      { component: "STM32F103C8T6", description: "ARM Cortex-M3 32-bit MCU (Blue Pill)", qty: 1, reference: "U1" },
      { component: "SIM800L", description: "Micro GSM/GPRS Breakout Module", qty: 1, reference: "U2" },
    ],
    githubRepo: "https://github.com/Kendeyo",
  },
};

function getImageUrl(image: any): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (image.src) return image.src;
  try {
    return urlFor(image).url();
  } catch {
    return "";
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: any = null;

  try {
    project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
  } catch (err) {
    console.error("Failed to fetch project detail from Sanity:", err);
  }

  if (!project) {
    project = pdfProjectDetailData[slug];
  }

  if (!project) {
    notFound();
  }

  const displayImages = project.gallery && project.gallery.length > 0
    ? project.gallery.map((img: any) => ({
        src: getImageUrl(img.asset || img),
        caption: img.caption || img.alt || project.title,
      }))
    : (project.images || []).map((img: any) => ({
        src: getImageUrl(img),
        caption: img.caption || project.title,
      }));

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects Archive</span>
      </Link>

      {/* Header */}
      <div className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="flex flex-wrap gap-2">
          {(project.tags || []).map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Links / Action Bar */}
        <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-medium transition-all shadow-sm"
            >
              <Code2 className="w-4 h-4" />
              <span>Source Code &amp; Hardware Layout</span>
            </a>
          )}
        </div>
      </div>

      {/* Actual Photo Gallery */}
      {displayImages && displayImages.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            <Layers className="w-4 h-4" />
            <span>01 // ACTUAL HARDWARE &amp; BOARD BRING-UP PHOTOS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayImages.map((img: any, i: number) => (
              <div key={i} className="card-elevated overflow-hidden group">
                <div className="relative h-64 w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Specifications Section */}
      {project.specs && project.specs.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            <Cpu className="w-4 h-4" />
            <span>02 // TECHNICAL SPECIFICATIONS &amp; ARCHITECTURE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
            {project.specs.map((spec: any, i: number) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex justify-between gap-3 shadow-sm"
              >
                <span className="text-zinc-400 dark:text-zinc-500">{spec.key}:</span>
                <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bill of Materials (BOM) */}
      {project.bom && project.bom.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            <FileText className="w-4 h-4" />
            <span>03 // BILL OF MATERIALS (PRIMARY HARDWARE)</span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-indigo-700 dark:text-indigo-400 font-bold">
                <tr>
                  <th className="p-3">Ref</th>
                  <th className="p-3">Component</th>
                  <th className="p-3">Description</th>
                  <th className="p-3 text-right">Qty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                {project.bom.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="p-3 text-indigo-600 dark:text-indigo-400 font-bold">{row.reference}</td>
                    <td className="p-3 font-semibold text-zinc-900 dark:text-zinc-100">{row.component}</td>
                    <td className="p-3">{row.description}</td>
                    <td className="p-3 text-right text-zinc-900 dark:text-zinc-100 font-bold">{row.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

