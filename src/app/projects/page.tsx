import Link from "next/link";
import Image from "next/image";
import { Cpu, ArrowRight, Code2, ExternalLink, Filter } from "lucide-react";
import { client, PROJECTS_QUERY, urlFor } from "@/lib/sanity/client";

export const revalidate = 0;

// Real Projects Data with Actual Extracted PDF & GitHub Projects
const pdfProjects = [
  {
    _id: "cargo-care",
    title: "Cargo-Care: Load Manager & Tamper Tracking System",
    slug: "cargo-care-tracking-solution",
    tags: ["ESP32", "FreeRTOS", "SIM800C", "IoT", "GPS/GSM", "SPI/I2C/UART"],
    summary:
      "Battery-powered load tracking and manager solution. Monitors real-time weight changes from loading to dispatch with automated tamper SMS alerts, onboard OLED configuration UI, and dual Wi-Fi Access Point mode.",
    mainImage: "/projects/cargo_p1_img1.jpeg",
    specs: [
      { key: "Microcontroller", value: "ESP32 (Configured as Wi-Fi Access Point & Station)" },
      { key: "Cellular & Location", value: "SIM800C GSM/GPRS Module with GPS Location Tracking" },
      { key: "Telemetry Data", value: "Time, GPS Location, Load Weight, Battery Voltage, Tamper Alerts" },
      { key: "Protocols & Storage", value: "UART (GPS/GSM), SPI (SD Card Storage), I2C (OLED UI), Wi-Fi" },
      { key: "Operating System", value: "FreeRTOS Preemptive Kernel for Multitasking & Real-Time Response" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-09-01",
  },
  {
    _id: "matatu-blackbox",
    title: "ESP32 Wireless Blackbox for PSV Fleet Telemetry",
    slug: "esp32-wireless-blackbox-psv",
    tags: ["ESP32", "GPRS", "PSV / Matatu", "GPS", "OBD-II", "C++"],
    summary:
      "A wireless blackbox telemetry & vehicle monitoring unit engineered specifically for public service vehicle (Matatu) transit operators. Features real-time speed tracking, geo-fencing alerts, crash detection, and remote cloud logging over cellular GPRS.",
    mainImage: "/projects/cargo_p4_img2.jpeg",
    specs: [
      { key: "Target Vehicle", value: "PSV (Public Service Vehicles / Matatu Transit)" },
      { key: "Core Processor", value: "ESP32-S3 Dual-Core 240MHz MCU" },
      { key: "Wireless Gateway", value: "SIM800L / SIM7600 4G & GPRS Cellular Modem" },
      { key: "Sensor Integration", value: "GPS Location, 6-Axis Accelerometer (Crash Sensing), OBD-II Engine Bus" },
      { key: "Repository", value: "github.com/Kendeyo/ESP32basedBlackbox" },
    ],
    githubRepo: "https://github.com/Kendeyo/ESP32basedBlackbox",
    publishedAt: "2026-08-25",
  },
  {
    _id: "oppie-box",
    title: "Oppie-Box: Industrial Multi-Phase Power Metering & Edge Gateway",
    slug: "oppie-box-power-metering-gateway",
    tags: ["Atmega328P", "Raspberry Pi", "Azure Cloud", "Energy Metering", "OneWire/SPI"],
    summary:
      "AC/DC power metering and edge computing platform for renewable energy integration. Features dual onboard Atmega328P MCUs, Raspberry Pi cloud bridge, phase LED indicators, and external HMI.",
    mainImage: "/projects/cargo_p2_img1.jpeg",
    specs: [
      { key: "Embedded MCUs", value: "2x Atmega328P Microcontrollers (AC/DC Sensing)" },
      { key: "Edge Computing", value: "Raspberry Pi Integration for Local DSP & Azure Cloud Telemetry" },
      { key: "Telemetry", value: "Voltage, Current, Power Per Phase, Power Factor, Fault Detection" },
      { key: "Protocols", value: "OneWire (Sensors), SPI (LCD & Flash Memory), UART (Pi), I2C (RTC)" },
      { key: "Power Sources", value: "240VAC Mains + Renewable DC Input Ports" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-08-15",
  },

  {
    _id: "temp-tag",
    title: "Temperature Tag: Cold Chain Monitoring & BMS Solution",
    slug: "temperature-tag-cold-chain-bms",
    tags: ["ESP32", "Cold Chain", "BMS", "I2C/SPI/UART", "GPRS"],
    summary:
      "Cold chain temperature & humidity logging node with onboard battery management (BMS), magnetic door status sensor, automatic voltage source selection, and RGB status LEDs.",
    mainImage: "/projects/cargo_p3_img2.jpeg",
    specs: [
      { key: "Core Microcontroller", value: "ESP32 NodeMCU" },
      { key: "Sensors & RTC", value: "AHT30 Precision Temp/Humidity Sensor & I2C Real-Time Clock" },
      { key: "Cloud Connection", value: "TCP/IP Over SIM800C Gateway (GPRS Mode)" },
      { key: "Telemetry & Features", value: "Temp, Humidity, Signal RSSI, Battery Voltage, Door Cycle Count" },
      { key: "Power System", value: "Li-Ion BMS Charger + Auto Voltage Selector IC" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-07-20",
  },
  {
    _id: "safe-safari",
    title: "Safe Safari: Global YESIST12 Finalist Telemetry System",
    slug: "safe-safari-global-finalist-telemetry",
    tags: ["ThingsCloud", "IoT", "STM32", "Award Winner"],
    summary:
      "International competition-winning safety and machine control system. Awarded 1st place in Kenya & East Africa, representing the region at the Global YESIST12 Finals in Malaysia.",
    mainImage: "/projects/cargo_p4_img4.jpeg",
    specs: [
      { key: "Platform", value: "Things Cloud IoT Platform Integration" },
      { key: "Recognition", value: "1st Place Kenya/East Africa — Global YESIST12 Finals (Malaysia)" },
      { key: "Enclosure Rating", value: "IP65 Weatherproof Industrial Housing" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-06-10",
  },

  {
    _id: "paygo-solar",
    title: "PAYGO Solar Embedded Paywall & Teardowns",
    slug: "paygo-solar-embedded",
    tags: ["Cryptography", "Hardware Teardown", "PAYGO", "Solar"],
    summary:
      "Deep-dive teardown and cryptographic analysis of Pay-As-You-Go (PAYGO) solar controllers used in Sub-Saharan clean energy access, focusing on offline token authentication.",
    mainImage: "/projects/cargo_p2_img1.jpeg",
    specs: [
      { key: "Domain", value: "Sub-Saharan clean energy access" },
      { key: "Focus", value: "Offline cryptographic token verification via MCU" },
      { key: "Transaction Flow", value: "M-Pesa -> Cloud Token -> Keypad Entry -> Validation" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-04-20",
  },
  {
    _id: "inhouse-daq",
    title: "In-House Data Acquisition & Control Units",
    slug: "inhouse-daq",
    tags: ["PCB Design", "DAQ", "Firmware", "Industrial Monitoring"],
    summary:
      "End-to-end design, assembly, and validation of custom multi-board hardware systems tailored for industrial telemetry, data acquisition, and machine monitoring.",
    mainImage: "/projects/cargo_p3_img1.jpeg",
    specs: [
      { key: "Scope", value: "PCB design, embedded firmware, and platform integration" },
      { key: "Applications", value: "Host appliances, DAQ units, custom industrial control" },
      { key: "Lifecycle", value: "Prototype to Validation" },
    ],
    githubRepo: "https://github.com/Kendeyo",
    publishedAt: "2026-03-10",
  },
];

function getImageUrl(image: any): string {
  if (!image) return "/projects/cargo_p1_img1.jpeg";
  if (typeof image === "string") return image;
  try {
    return urlFor(image).url();
  } catch {
    return "/projects/cargo_p1_img1.jpeg";
  }
}

export const metadata = {
  title: "Projects & Hardware Builds | Kennedy Odeyo Otieno Portfolio",
  description:
    "Engineering portfolio of Kennedy Odeyo Otieno — Cargo-Care tracking, Oppie-Box power metering, Cold Chain Temp Tag, and BMS hardware.",
};

export default async function ProjectsPage() {
  let sanityProjects: any[] = [];
  try {
    sanityProjects = await client.fetch(PROJECTS_QUERY);
  } catch (err) {
    console.error("Failed to fetch projects from Sanity:", err);
  }

  // Combine Sanity projects at the top, avoiding duplicate slugs with pdfProjects
  const filteredPdfProjects = pdfProjects.filter(
    (pdf) => !sanityProjects.some((sp) => sp.slug === pdf.slug)
  );
  const projectsToDisplay = [...sanityProjects, ...filteredPdfProjects];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold">
          <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          HARDWARE &amp; EMBEDDED SYSTEMS ARCHIVE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Projects &amp; Board Bring-Ups
        </h1>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Comprehensive technical documentation and actual hardware images of builds by Kennedy Odeyo Otieno — custom PCBs, RTOS firmware, cellular IoT, and power metering.
        </p>
      </div>


      {/* Projects List */}
      <div className="grid grid-cols-1 gap-8">
        {projectsToDisplay.map((project: any) => (
          <article
            key={project._id}
            className="card-elevated p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 group hover:border-indigo-600 dark:hover:border-indigo-500"
          >
            {/* Image Preview Thumbnail */}
            <div className="md:col-span-4 relative h-48 sm:h-56 md:h-full min-h-[180px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Image
                src={getImageUrl(project.mainImage)}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="md:col-span-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(project.tags || []).map((t: string) => (
                    <span
                      key={t}
                      className="px-2 sm:px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-[10px] sm:text-[11px] font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Specs Grid */}
              {project.specs && project.specs.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 font-mono text-[11px] sm:text-xs">
                  {project.specs.slice(0, 4).map((spec: any, i: number) => (
                    <div
                      key={i}
                      className="p-2 sm:p-2.5 rounded bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2"
                    >
                      <span className="text-zinc-400 dark:text-zinc-500">{spec.key}:</span>
                      <span className="text-zinc-900 dark:text-zinc-200 font-semibold sm:text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  Published {project.publishedAt}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  <span>View Photos &amp; Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

