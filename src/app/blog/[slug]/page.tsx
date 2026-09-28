import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, BookOpen, Share2 } from "lucide-react";

// Mock Blog Article Database
const blogPosts: Record<string, any> = {
  "foc-vector-math-fixed-point": {
    title: "Deriving FOC Motor Vector Equations & Fast Fixed-Point Math",
    tags: ["Embedded", "Math", "FOC", "C++"],
    publishedAt: "2026-09-10",
    readTime: "8 min read",
    summary:
      "A mathematical deep-dive into Clarke & Park transforms, space vector PWM duty calculation, and implementation in Q15/Q31 fixed-point C++ for ARM Cortex-M DSP instructions.",
    content: `
### Introduction to Field Oriented Control (FOC)

Field Oriented Control decouples the stator current of a 3-phase brushless motor into torque-producing ($I_q$) and flux-producing ($I_d$) components.

#### 1. Clarke Transformation (Direct & Quadrature)
Converts 3-phase currents ($I_a, I_b, I_c$) into 2-axis stationary frame ($\alpha, \beta$):

$$I_\\alpha = I_a$$

$$I_\\beta = \\frac{1}{\\sqrt{3}} (I_a + 2I_b)$$

#### 2. Park Transformation (Stationary to Rotating Frame)
Rotates the stationary $\\alpha, \\beta$ reference frame into the rotor position angle $\\theta$:

$$I_d = I_\\alpha \\cos\\theta + I_\\beta \\sin\\theta$$

$$I_q = -I_\\alpha \\sin\\theta + I_\\beta \\cos\\theta$$

### C++ Q31 Fixed-Point Optimization

For microcontrollers lacking a floating-point unit (FPU), or to run inside a 20kHz interrupt loop, fixed-point math is mandatory:

\`\`\`cpp
// Fast Q31 Park Transform Implementation
typedef int32_t q31_t;

void Park_Transform_Q31(q31_t i_alpha, q31_t i_beta, q31_t sin_theta, q31_t cos_theta, q31_t *i_d, q31_t *i_q) {
    // Perform 64-bit multiplication and scale down by 31 bits
    int64_t d_temp = ((int64_t)i_alpha * cos_theta) + ((int64_t)i_beta * sin_theta);
    int64_t q_temp = -((int64_t)i_alpha * sin_theta) + ((int64_t)i_beta * cos_theta);

    *i_d = (q31_t)(d_temp >> 31);
    *i_q = (q31_t)(q_temp >> 31);
}
\`\`\`

### Key Takeaways
1. **Interrupt Latency**: Fixed-point transforms execute in under 45 clock cycles on ARM Cortex-M4 DSP cores.
2. **Phase Margin**: Maintaining high PWM update rates guarantees smooth low-speed torque control.
`,
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] hover:text-[#3b82f6] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Articles</span>
      </Link>

      {/* Header */}
      <div className="space-y-6 border-b border-[#1e293b] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#ededed] leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#3b82f6]" />
            {post.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Article Body */}
      <article className="prose prose-invert max-w-none space-y-6 text-[#ededed] text-base leading-relaxed font-sans">
        <div className="p-4 rounded border border-[#3b82f6]/30 bg-[#3b82f6]/5 text-xs font-mono text-[#a1a1aa]">
          <strong className="text-[#3b82f6]">ABSTRACT:</strong> {post.summary}
        </div>

        <div className="space-y-6 text-[#a1a1aa]">
          <h3 className="text-xl font-bold text-[#ededed]">
            Field Oriented Control Fundamentals
          </h3>
          <p>
            Field Oriented Control decouples the stator current of a 3-phase brushless motor into torque-producing (Iq) and flux-producing (Id) components using vector transforms.
          </p>

          {/* Code Block Example */}
          <div className="p-4 rounded-lg bg-[#0a0a0a] border border-[#1e293b] font-mono text-xs text-[#ededed] space-y-2">
            <div className="text-[#3b82f6] font-semibold">// Q31 Fast Fixed-Point Park Transform</div>
            <pre className="text-emerald-400 overflow-x-auto">
{`typedef int32_t q31_t;

void Park_Transform_Q31(q31_t i_alpha, q31_t i_beta, q31_t sin_theta, q31_t cos_theta, q31_t *i_d, q31_t *i_q) {
    int64_t d_temp = ((int64_t)i_alpha * cos_theta) + ((int64_t)i_beta * sin_theta);
    int64_t q_temp = -((int64_t)i_alpha * sin_theta) + ((int64_t)i_beta * cos_theta);

    *i_d = (q31_t)(d_temp >> 31);
    *i_q = (q31_t)(q_temp >> 31);
}`}
            </pre>
          </div>
        </div>
      </article>
    </div>
  );
}
