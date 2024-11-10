import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Sidebar } from '@/Components/Sidebar/index'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Desenvolvido por Douglas Lobo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased"
      )}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
