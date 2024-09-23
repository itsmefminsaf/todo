import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trace | Track your daily task with Trace",
  description:
    "Trace is a on of best SaaS for listing and managing your tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen bg-gradient-to-br from-slate-700 to-stone-800 text-white">
        {children}
      </body>
    </html>
  );
}
