import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  { brand: "Solène Beauty", tag: "Beleza", result: "+412% engajamento", body: "Reposicionamento estético e calendário editorial multi-plataforma com produção interna." },
  { brand: "Vértex Café", tag: "F&B", result: "+2,3x receita DTC", body: "Funil de mídia paga + creators locais ligaram a marca ao ritual de manhã do público." },
  { brand: "Carmim Moda", tag: "Fashion", result: "+187k seguidores", body: "Conteúdo editorial mensal com diretor de arte dedicado e ciclo de lançamentos cadenciado." },
  { brand: "Norden Hotel", tag: "Hospitalidade", result: "+58% reservas diretas", body: "Storytelling de destino + campanhas geo-targeting tiraram a marca da dependência de OTAs." },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl text-graphite max-w-3xl text-balance leading-[1.05]"
          >
            Resultados reais para marcas <em className="text-gold">como a sua</em>.
          </motion.h2>
          <a href="#contato" className="text-sm font-medium text-graphite border-b border-gold pb-0.5 self-start">
            Ver mais cases →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.a
              key={c.brand}
              href="#contato"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group block rounded-3xl bg-card border border-border overflow-hidden hover:shadow-soft transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--beige) 0%, var(--gold) 50%, var(--darkbrown) 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-graphite/20 mix-blend-multiply" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full bg-offwhite/90 text-xs font-medium text-graphite">{c.tag}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <h3 className="font-display text-3xl md:text-4xl text-offwhite">{c.brand}</h3>
                  <ArrowUpRight size={28} className="text-offwhite group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-7">
                <div className="font-display text-2xl text-gold mb-2">{c.result}</div>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
