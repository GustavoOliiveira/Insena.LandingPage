import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Descoberta & Estratégia", body: "Imersão profunda nas metas de negócio, audiência e benchmarks. Saímos com um plano editorial e de mídia validado." },
  { n: "02", title: "Criação & Setup", body: "Produção de conteúdo, configuração de tracking, campanhas estruturadas em pilares e públicos definidos." },
  { n: "03", title: "Execução & Comunidade", body: "Publicação, escuta ativa, gestão de comunidade e veiculação de mídia paga em ritmo semanal." },
  { n: "04", title: "Monitoramento & Otimização", body: "Relatórios mensais, calls de revisão e ajustes contínuos com foco nas métricas de negócio." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-beige-light/30">
      <div className="container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl text-graphite max-w-3xl text-balance leading-[1.05] mb-16"
        >
          Nosso processo. <em className="text-gold">Provado</em>.
        </motion.h2>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-offwhite p-8 md:p-10 relative"
            >
              <div className="font-display text-6xl text-gold/70 mb-4">{s.n}</div>
              <h3 className="font-display text-2xl text-graphite leading-tight">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
