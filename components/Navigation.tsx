'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLink {
  label: string,
  href: string,
}

interface Props {
  navLinks: NavLink[]
}

export const Navigation = ({ navLinks } : Props) => {
  const pathName = usePathname()

  console.log('navLink', navLinks);
  

  return (
    <>
      {
        navLinks.map((item: NavLink) => {
          const isActive = pathName === item.href

          return <div key={item.label}><Link style={{ color: isActive ? 'red' : 'green' }} href={item.href}>{item.label}</Link></div>
        })
      }
    </>
  )
}