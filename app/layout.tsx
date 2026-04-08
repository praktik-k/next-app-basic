import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "next-app-basic",
  description: "description to next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <TheHeader/>
        {children}
        <TheFooter/>
      </body>
    </html>
  );
}
