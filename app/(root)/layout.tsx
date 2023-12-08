import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Favicon from "../favicon.ico";

// Layout Components
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description:
    "Threads Clone using Next.js 14, Clerk authentication, TypeScript, MongoDB, TailwindCSS and Shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Footer />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
