import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, BookOpen, Share2 } from "lucide-react";
import { client, POST_BY_SLUG_QUERY } from "@/lib/sanity/client";

// Mock Blog Article Database
const blogPosts: Record<string, any> = {
  "simulating-10k-iot-devices": {
    title: "Simulating monitoring 10k deployed IoT devices at scale",
    tags: ["IoT", "Grafana", "InfluxDB", "Python"],
    publishedAt: "2026-05-10",
    readTime: "3 min read",
    summary:
      "Stack breakdown for real-time device management at scale. Using InfluxDB for time-series storage, Grafana for visualization, and Python scripts for the devices.",
    content: (
      <div className="space-y-4">
        <p>✨ Simulating monitoring 10k deployed IoT devices at scale for real time device management.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">The Stack:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>InfluxDB</strong> (for time series storage) 📂</li>
          <li><strong>Grafana</strong> (for visualization) 📊</li>
          <li><strong>Python script</strong> for the devices 🤖</li>
        </ul>
        <p>Simulating device telemetry at this scale is crucial to ensure that your backend can handle the data ingestion pipeline before deploying physical hardware. We wrote a Python script to emulate 10,000 distinct IoT nodes publishing data payloads simultaneously. InfluxDB effortlessly ingested the time-series metric data, while Grafana provided a beautiful and responsive dashboard for real-time visualization of device health, latency, and data trends.</p>
      </div>
    ),
  },
  "cellular-iot-fundamentals": {
    title: "Cellular IoT Fundamentals: LTE-M, NBIoT & Power Savings",
    tags: ["Cellular", "LTE-M", "NBIoT", "MQTT"],
    publishedAt: "2026-06-12",
    readTime: "5 min read",
    summary:
      "Key learnings from Nordic Semiconductor's course. Deep dive into 3GPP releases, PSM & eDRX power saving, RCC protocols, and securing UDP/TCP connections with DTLS/TLS.",
    content: (
      <div className="space-y-4">
        <p>💡 Finished the course on Cellular IoT Fundamentals by Nordic Semiconductor.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Key Topics Understood:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>LTE-M and NBIoT releases by 3GPP</strong>, and their differences in terms of bandwidth, uplink and downlink, and latency on IoT applications.</li>
          <li><strong>Use cases of LTE-M and NBIoT</strong> and how to determine which suits a certain application.</li>
          <li><strong>Power savings techniques</strong>: Deep dive into PSM and eDRX on Cellular modems.</li>
          <li><strong>Radio Resource Control (RCC)</strong> Protocol.</li>
          <li><strong>Transport layers and application layers</strong> used on user equipment (MQTT on TCP and COAP on UDP) with examples when using IP packets.</li>
          <li><strong>Securing connections</strong>: Implementation of TLS on MQTT and DTLS on UDP.</li>
          <li><strong>GNSS and LTE usage</strong> on modems simultaneously.</li>
        </ol>
        <p>Understanding these concepts is the key to building reliable, low-power cellular telemetry nodes that can last for years in the field.</p>
      </div>
    ),
  },
  "iot-chronicles-field-lessons": {
    title: "IoT Chronicles: Lessons from the field 📝✍️",
    tags: ["Field Experience", "Hardware", "Debugging"],
    publishedAt: "2026-06-25",
    readTime: "6 min read",
    summary:
      "Building a one-off device is easy, but scaling brings unanticipated challenges. Notes on connectivity issues, field failures, unexpected freezing, and battery drain.",
    content: (
      <div className="space-y-4">
        <p>Many devices off-the-shelf only solve generic problems. Special cases require custom builds due to specific use cases.</p>
        <p>💡 Building a one-off device is easy, but scaling it to multiples in the field brings challenges you couldn't anticipate. Here are my lessons from the field:</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">1️⃣ Initiating Operational Change</h3>
        <p>Installing these devices for customers requires a change of behavior, workflows, and accountabilities around the new visibility, insights, and analysis those sensors create. You find that the technology part is adopted well but not the operations part. Training customers on usage can come in handy.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">2️⃣ Connectivity Issues</h3>
        <p>You have devices working well in the lab. Then suddenly you are dealing with concrete walls, metallic structures, underground locations... all factors that make GPS and sometimes cellular connections a problem. Adding those On-board LEDs for connection status can truly save a lot of time on field debugging & device diagnostics.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">3️⃣ Field Failures in Deployed Devices</h3>
        <p>You don't have logs that you can read directly from the deployed unit, apart from the telemetry structure sent to the server. This can become a nightmare especially on a unit that is hundreds/thousands of kilometers away and doesn't have OTA updates. SMS feature can be a great aid for this. Send a text to the device and it returns the logs you need in case connectivity is not the issue. The text can also be structured to put the device in maintenance mode and stream debug logs.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">4️⃣ Unexpected "Freezing"</h3>
        <p>Sometimes a device can perform well under test, and completely becomes a brick days after being deployed. Normal hardware resets work well, but these kinds are recalled. Sometimes when recalled there is 0 reproduce of the incident. You just sigh, smile and wonder.</p>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">5️⃣ Battery Issues</h3>
        <p>&quot;This can last 5 years&quot; suddenly results in &quot;lasted only a few months&quot;. Reason? Reconnectivity attempts especially on poor networks. Modems are usually power hungry and drain the juice off those batteries real quick in battery-powered applications. Suddenly the power calculations done in the device development phase become redundant.</p>
        <p className="pt-4 italic">These challenges make the fun part of it all. Because I learn a lot from them.</p>
      </div>
    ),
  },
};

export const revalidate = 0;

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = null;

  try {
    post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  } catch (err) {
    console.error("Failed to fetch blog post detail from Sanity:", err);
  }

  if (!post) {
    post = blogPosts[slug];
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Articles</span>
      </Link>

      {/* Header */}
      <div className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {(post.tags || []).map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            {post.publishedAt}
          </span>
          {post.readTime && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {post.readTime}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Article Body */}
      <article className="space-y-6 text-zinc-800 dark:text-zinc-200 text-base leading-relaxed font-sans">
        {(post.summary || post.excerpt) && (
          <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/60 dark:bg-indigo-950/30 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <strong className="text-indigo-600 dark:text-indigo-400 font-bold">ABSTRACT:</strong> {post.summary || post.excerpt}
          </div>
        )}

        <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
          {post.content}
        </div>
      </article>
    </div>
  );
}
