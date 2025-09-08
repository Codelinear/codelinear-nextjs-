// app/components/CalendlyIframe.jsx  (Next.js/React)
// or src/components/CalendlyIframe.jsx

"use client"; // keep if you're in Next.js 13+ app router

export default function CalendlyIframe() {
  // Helpful for Calendly's embed_domain param (improves analytics/behaviour)
  const embedDomain =
    typeof window !== "undefined" ? window.location.hostname : "localhost";

  const url = new URL("https://calendly.com/codelinear/30min?month=2025-08");
  url.searchParams.set("embed_domain", embedDomain);
  url.searchParams.set("embed_type", "Inline");

  // Optional UI tweaks (uncomment if you want)
  // url.searchParams.set("hide_gdpr_banner", "1");
  // url.searchParams.set("primary_color", "2563eb"); // hex without '#'
  // url.searchParams.set("text_color", "111827");
  // url.searchParams.set("background_color", "ffffff");

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <iframe
        src={url.toString()}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a meeting"
        style={{ minHeight: 800 }}
      />
    </div>
  );
}
