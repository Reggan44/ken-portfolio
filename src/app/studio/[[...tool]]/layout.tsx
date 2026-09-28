import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ken Portfolio — Sanity Studio",
  description: "Content management studio for Ken's IoT portfolio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" id="sanity-studio">
      {children}
    </div>
  );
}
