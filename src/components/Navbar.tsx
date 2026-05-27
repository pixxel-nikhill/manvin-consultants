"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Consultation", href: "/consultation" },
  { label: "Vendors", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useLayoutEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="nav"
        style={{
          padding: isMobile
            ? scrolled ? "0.3rem 1.2rem" : "0.4rem 1.2rem"
            : scrolled ? "0.4rem 4rem" : "0.6rem 4rem",
        }}
      >
        <Link href="/" className="logo">
          <Image
            src="/Final-logo.jpeg"
            alt="Manvin Consultants Logo"
            width={400}
            height={178}
            className="logo-img"
            style={{
              objectFit: 'contain',
              height: '150px',
              width: 'auto',
              filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.6)) brightness(1.05)',
            }}
          />
        </Link>

        <div className="nav-pages">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-page-btn${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          {!isMobile && (
            <a
              className="nav-wa"
              href="https://wa.me/919928977014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="nav-wa-dot"></div>
              WhatsApp
            </a>
          )}
          {!isMobile && (
            <Link href="/contact" className="nav-cta">
              Enquire Now
            </Link>
          )}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-menu-link${pathname === link.href ? " active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <a
          className="btn-gold"
          href="https://wa.me/919928977014"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "1.5rem" }}
        >
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
