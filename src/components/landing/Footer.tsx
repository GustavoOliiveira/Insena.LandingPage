import { Instagram, Linkedin, Youtube } from "lucide-react";
import logo from '../../assets/logo.png';

function SeuComponente() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="w-13 h-13 object-contain"
    />
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-beige-light/80 pt-20 pb-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-darkbrown">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <SeuComponente/>
            </div>
            <p className="max-w-sm text-beige-light/60">
              Agência de social marketing focada em crescimento mensurável para
              marcas que se levam a sério.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-darkbrown flex items-center justify-center hover:bg-gold hover:text-graphite hover:border-gold transition-colors"
                  aria-label="Redes sociais"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-offwhite mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-gold transition-colors">Estratégia</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Conteúdo</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Mídia paga</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Influência</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-offwhite mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:ola@Insena.social" className="hover:text-gold transition-colors">ola@Insena.social</a></li>
              <li>São Paulo · Lisboa</li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Solicitar proposta</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-beige-light/50">
          <p>© {new Date().getFullYear()} Insena. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacidade</a>
            <a href="#" className="hover:text-gold">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
