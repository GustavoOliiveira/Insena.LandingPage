import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from '../../assets/logoDourada.png';

function SeuComponente() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="w-13 h-13 object-contain"
    />
  );
}

const links = [
  { label: "Início", href: "#top" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Blog", href: "#blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-offwhite/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <SeuComponente/>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-darkbrown hover:text-graphite transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-gold after:w-0 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-graphite text-offwhite text-sm font-medium hover:bg-darkbrown transition-colors"
        >
          Proposta gratuita
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-graphite"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-offwhite border-t border-border"
        >
          <ul className="container-px py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-graphite"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-5 py-3 rounded-full bg-graphite text-offwhite text-sm font-medium"
              >
                Proposta gratuita
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
