import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Cost Tracker — Know Your ROI",
  description: "Analyze your Shopify app subscriptions against store revenue. Identify cost bloat and see real ROI per app. Built for stores doing $10K+ monthly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e7269676-393f-4eac-a109-2020b5c7ed65"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
