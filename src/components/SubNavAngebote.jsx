// components/SubNavAngebote.jsx
import { Link, useLocation } from "react-router-dom"


export default function SubNavAngebote() {
  const location = useLocation()
  const currentPath = location.pathname

  const links = [
    { href: "/angebote/healing", label: "Healing Sessions" },
    { href: "/angebote/events", label: "Events & Performances" },
    { href: "/angebote/workshops", label: "Workshops" },
    { href: "/angebote/preise", label: "Preise" },
  ]

  return (
    <nav className="flex space-x-4 px-4 py-2 border-b border-gray-300">
      {links.map(link => (
        <Link
          key={link.href}
          to={link.href}
          className={`text-sm md:text-base px-2 py-1 transition-colors ${
            currentPath === link.href
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
