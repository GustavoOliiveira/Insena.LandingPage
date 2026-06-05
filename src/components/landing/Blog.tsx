import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Ferramentas", title: "11 alternativas ao Canva que vão repaginar seu conteúdo", excerpt: "Da curva ao polimento — opções que escalam com o time criativo." },
  { tag: "Mídia paga", title: "Instant Experience: o formato que reabilita o Facebook Ads", excerpt: "Por que ainda vale apostar — e como rodar criativos que convertem." },
  { tag: "Educacional", title: "5 ângulos para atrair Gen Z para sua marca", excerpt: "O que funciona quando a audiência cresceu nativa nas redes." },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl text-graphite max-w-3xl text-balance leading-[1.05]"
          >
            Insights & <em className="text-gold">leitura</em>.
          </motion.h2>
          <a href="#" className="text-sm font-medium text-graphite border-b border-gold pb-0.5 self-start">
            Ver blog completo →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-soft transition-all"
            >
              <div
                className="aspect-[5/3]"
                style={{
                  background: `linear-gradient(${135 + i * 20}deg, var(--beige) 0%, var(--gold) 100%)`,
                }}
              />
              <div className="p-7">
                <span className="text-xs uppercase tracking-wider text-gold">{p.tag}</span>
                <h3 className="mt-3 font-display text-xl text-graphite leading-snug group-hover:text-darkbrown transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-graphite font-medium">
                  Ler <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
