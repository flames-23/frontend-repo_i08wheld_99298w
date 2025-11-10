import { Menu, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold tracking-tight">VoxAura Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
              <PhoneCall className="h-4 w-4" /> Book a demo
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
                <PhoneCall className="h-4 w-4" /> Book a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
