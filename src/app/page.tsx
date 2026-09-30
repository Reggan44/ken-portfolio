import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Zap,
  ArrowRight,
  Radio,
  MapPin,
} from "lucide-react";
import { QuoteCarousel } from "@/components/QuoteCarousel";

const pdfFeaturedHighlights = [
  {
    title: "Cargo-Care: Load Manager & Tamper Tracker",
    category: "ESP32 / FREERTOS / GSM",
    specs: "FreeRTOS • SIM800C GPS/SMS • Wi-Fi AP • HX711 Load Cell",
    description:
      "Battery-powered weight and tamper tracking solution for goods in transit with real-time SMS alerts, onboard OLED UI, and dual Wi-Fi Access Point mode.",
    link: "/projects/cargo-care-tracking-solution",
    tag: "FreeRTOS / IoT",
  },
  {
    title: "Oppie-Box: Power Metering & Edge Gateway",
    category: "ATMEGA328P / RASPBERRY PI / AZURE",
    specs: "Dual ATmega328P • Edge Computing • AC/DC Metering",
    description:
      "Industrial multi-phase energy metering and fault diagnosis system with Raspberry Pi edge integration for Microsoft Azure Cloud telemetry.",
    link: "/projects/oppie-box-power-metering-gateway",
    tag: "Energy / Cloud",
  },
  {
    title: "Temperature Tag: Cold Chain Monitoring & BMS",
    category: "ESP32 / COLD CHAIN / BMS",
    specs: "AHT30 Temp/Humidity • BMS Charger • GPRS Gateway",
    description:
      "Precision cold chain environmental logger with magnetic door sensor counter, onboard BMS battery charger, and RGB diagnostic status LEDs.",
    link: "/projects/temperature-tag-cold-chain-bms",
    tag: "BMS / Sensors",
  },
  {
    title: "Safe Safari: Global YESIST12 Telemetry Unit",
    category: "THINGSCLOUD / IOT / COMPETITION",
    specs: "Things Cloud Platform • IP65 ABS • Global Finalist",
    description:
      "Award-winning safety telemetry node. Awarded 1st place in Kenya & East Africa, representing the region at the Global YESIST12 Finals in Malaysia.",
    link: "/projects/safe-safari-global-finalist-telemetry",
    tag: "1st Place Winner",
  },
];

const linkedinActivity = [
  {
    title: "Safaricom PLC Internship & Microsoft ADC Hackathon",
    date: "August 2026",
    content: "Reflecting on an incredible software engineering internship at Safaricom PLC and an intense Hackathon at Microsoft ADC. Learned massive lessons about scalable systems, AI, and enterprise software.",
    link: "https://www.linkedin.com/in/kennedy-odeyo-otieno-42772a1b6/",
    tag: "Career Update",
  },
  {
    title: "IEEE YESIST12 Grand Finale in Malaysia",
    date: "July 2026",
    content: "Our team, SafeSafari, represented Kenya and East Africa at the global finals in Malaysia! Presented our IoT safety telemetry unit on a global stage.",
    link: "https://www.linkedin.com/in/kennedy-odeyo-otieno-42772a1b6/",
    tag: "Achievement",
  },
  {
    title: "Hardware Teardowns: PAYGO Solar Controllers",
    date: "June 2026",
    content: "Reverse engineering offline Pay-As-You-Go solar controllers used in Sub-Saharan Africa. Deep dive into cryptographic token decoding via M-Pesa.",
    link: "https://www.linkedin.com/in/kennedy-odeyo-otieno-42772a1b6/",
    tag: "Reverse Engineering",
  },
];

const telemetryMetrics = [
  { count: "4", label: "Deployed Systems", desc: "Cargo-Care, Oppie-Box, Temp Tag, Safe Safari" },
  { count: "240VAC", label: "Metering Precision", desc: "Industrial AC & DC Power Sensing" },
  { count: "< 12 µA", label: "Ultra-Low Sleep", desc: "Deep-Sleep System Power" },
  { count: "1st Place", label: "Hardware Hackathon", desc: "Kenya & East Africa (YESIST12)" },
];

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 pt-4">
        {/* Availability & Location */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available for Embedded &amp; IoT Work
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            Nairobi, Kenya
          </span>
        </div>

        {/* Hero Headline */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Building Intelligent Embedded Hardware &amp; IoT Systems.
            </h1>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Hi, I am <strong className="text-zinc-950 dark:text-zinc-100">Kennedy Odeyo Otieno</strong> — an Electrical &amp; Embedded Systems Engineer. I specialize in real-time load manager tracking (Cargo-Care), industrial power metering (Oppie-Box), cold-chain loggers, and edge gateways.
            </p>
          </div>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap gap-3 pt-1 font-mono text-xs">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 font-medium transition-all shadow-xs"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:kenodeyo@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 font-medium transition-all shadow-xs"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </section>

      {/* Metric Telemetry Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        {telemetryMetrics.map((metric, i) => (
          <div key={i} className="card-elevated p-4 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 font-mono">
              {metric.count}
            </div>
            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 font-mono">{metric.label}</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 font-mono">{metric.desc}</div>
          </div>
        ))}
      </section>

      {/* Domain Expertise Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Embedded Systems &amp; RTOS</h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            FreeRTOS multitasking, ESP32, STM32, ATmega328P, UART/SPI/I2C/OneWire protocols, and custom drivers.
          </p>
        </div>

        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Power &amp; Energy Metering</h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Multi-phase AC/DC metering, renewable integration, voltage/current transformers, and BMS chargers.
          </p>
        </div>

        <div className="card-elevated p-5 space-y-2">
          <div className="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 w-fit">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Cellular &amp; Cloud IoT</h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            SIM800C GSM/GPRS telemetry, GPS location tracking, Azure Cloud edge gateways (Raspberry Pi), and Things Cloud.
          </p>
        </div>
      </section>

      {/* Recent Activity & Insights */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">01 // LATEST INSIGHTS &amp; UPDATES</span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">Recent Activity</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/kennedy-odeyo-otieno-42772a1b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            <span>Follow on LinkedIn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {linkedinActivity.map((activity, idx) => (
            <article key={idx} className="card-elevated p-5 flex flex-col justify-between space-y-3 group hover:border-indigo-600 dark:hover:border-indigo-500">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{activity.date}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    {activity.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  <a href={activity.link} target="_blank" rel="noopener noreferrer">{activity.title}</a>
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {activity.content}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-900 dark:text-zinc-100 font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>Read Post</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">02 // FEATURED HARDWARE BUILDS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">Projects Showcase</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pdfFeaturedHighlights.map((project, idx) => (
            <article key={idx} className="card-elevated p-6 flex flex-col justify-between space-y-4 group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{project.category}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  {project.specs}
                </span>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-900 dark:text-zinc-100 font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 ml-2"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <QuoteCarousel />
    </div>
  );
}
