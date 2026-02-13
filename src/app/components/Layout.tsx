import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/rooms", label: "Rooms" },
    { path: "/banquet", label: "Banquet" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="size-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@grandvekasa.com" className="hidden sm:flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="size-4" />
              <span>info@grandvekasa.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <MapPin className="size-4" />
            <span>123 Luxury Avenue, City Center</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif tracking-wider text-primary">GRAND VEKASA</span>
              <span className="text-xs tracking-widest text-accent uppercase">Luxury & Elegance</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-wider transition-colors relative group ${
                    isActive(link.path) ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent transition-all ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-wider transition-colors ${
                      isActive(link.path) ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-accent">Grand Vekasa</h3>
              <p className="text-sm opacity-90">
                Experience luxury and elegance at its finest. A place where memories are made and dreams come true.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="opacity-90 hover:text-accent hover:opacity-100 transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                  <Phone className="size-4 mt-0.5 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="size-4 mt-0.5 flex-shrink-0" />
                  <span>info@grandvekasa.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                  <span>123 Luxury Avenue, City Center</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-lg mb-4">Hours</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>24/7 Reception</li>
                <li>Restaurant: 6 AM - 11 PM</li>
                <li>Banquet: By Appointment</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Hotel Grand Vekasa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
