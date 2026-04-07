import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "next-app-basic | about",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ul>
        <li><Link href='/about/contacts'>contacts</Link></li>
        <li><Link href='/about/team'>team</Link></li>
      </ul>
      <div>
        {children}
      </div>
    </div>
  );
}