export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        <p className="mono-accent tracking-widest uppercase text-sm">
          IoT &amp; Electrical Engineering
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient leading-tight">
          Ken
        </h1>
        <p className="text-foreground-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Building intelligent hardware — from MCU firmware and RTOS kernels to
          precision PCB layouts and IoT edge systems.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="/projects"
            className="card-elevated px-6 py-3 text-sm font-medium hover:text-accent transition-colors"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="card-elevated px-6 py-3 text-sm font-medium hover:text-accent transition-colors"
          >
            Read Articles
          </a>
        </div>
      </div>
    </main>
  );
}
