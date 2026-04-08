import { Navigation } from "./Navigation";

const navItems = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'posts', href: '/posts' },
]

export default function TheHeader() {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
}