export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "We use Shopify OAuth to securely read your installed apps and revenue data. No passwords stored — only scoped read access."
    },
    {
      q: "What counts as a good ROI for an app?",
      a: "We flag any app costing more than 2% of the revenue it influences. You get a clear breakdown so you decide what to cut."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your dashboard at any time. No contracts, no questions."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Shopify stores doing $10K+/mo
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Paying for Shopify Apps<br />
          <span className="text-[#58a6ff]">That Don&apos;t Earn Their Keep</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your store in 60 seconds. See exactly which apps are costing you money vs. making you money — with real revenue data, not guesses.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No credit card games.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["$2,400", "avg. saved/yr by users"],
            ["60s", "to connect your store"],
            ["100%", "read-only Shopify access"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to audit your app stack.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Connect unlimited Shopify stores",
              "Real-time revenue vs. app cost dashboard",
              "ROI score per installed app",
              "Monthly cost-bloat alerts via email",
              "CSV export for your accountant"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Shopify App Cost Tracker. Not affiliated with Shopify Inc.
      </footer>
    </main>
  );
}
