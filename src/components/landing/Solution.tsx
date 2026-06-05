import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Estratégias baseadas em dados, modeladas aos seus objetivos",
  "Execução experiente em todas as principais plataformas",
  "Relatórios transparentes ligados às métricas do negócio",
  "Time dedicado: estrategista, criação e mídia paga em sintonia",
];

export function Solution() {
  return (
    <section className="py-24 md:py-32 bg-graphite text-offwhite relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold">A solução</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Marketing social <em className="text-beige">estratégico</em> que de fato converte.
          </h2>
          <p className="mt-6 text-lg text-beige-light/80 max-w-lg">
            Unimos estética artesanal com a frieza de quem lê planilhas todos os
            dias. O resultado é uma marca que parece grande — e cresce como uma.
          </p>
        </motion.div>

        <ul className="space-y-5">
          {items.map((it, i) => (
            <motion.li
              key={it}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-darkbrown/40 border border-darkbrown"
            >
              <span className="mt-0.5 w-7 h-7 rounded-full bg-gold flex-shrink-0 flex items-center justify-center">
                <Check size={15} className="text-graphite" strokeWidth={3} />
              </span>
              <span className="text-beige-light text-lg leading-snug">{it}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
