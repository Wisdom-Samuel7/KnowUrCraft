"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // install react-icons

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl rounded-full px-8 py-3 shadow-sm border">
          {/* Logo */}
          <Link href="/" className="font-semibold tracking-tight text-sm">
            Knowurcraft
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-8 text-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className="relative">
                  <span
                    className={`transition ${
                      active ? "text-black" : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex px-5 py-2 bg-black text-white text-xs rounded-full"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg p-8 flex flex-col gap-6 z-50"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg ${
                    active ? "text-black font-semibold" : "text-gray-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="mt-auto px-5 py-2 bg-black text-white text-xs rounded-full inline-block text-center"
              onClick={() => setMenuOpen(false)}
            >
              Start Project
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
